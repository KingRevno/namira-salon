// Required env vars: ANTHROPIC_API_KEY, KV_REST_API_URL, KV_REST_API_TOKEN

import Anthropic from "@anthropic-ai/sdk";
import { Redis } from "@upstash/redis";
import { type NextRequest } from "next/server";

const client = new Anthropic();

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const SYSTEM_PROMPT = `You are a helpful assistant for Namira Salon. Only answer questions about Namira Salon. If asked about anything unrelated to the salon's services, hours, location, pricing, or booking, politely decline and redirect: "I can only help with questions about Namira Salon. Would you like to know about our services or how to book an appointment?"

Services: manicure, pedicure, haircut, hair styling, lashes, waxing
Hours: Mon–Sat 9 AM–7 PM, Sunday by appointment
Location: in-home salon, call to confirm area
Phone: 239-375-6993
Instagram: @namirasalon

Your goal is to answer frequently asked questions and always close by directing clients to call for booking.`;

function getMonthKey(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  return `namira:spend:${yyyy}-${mm}`;
}

function getDayKey(ip: string): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `namira:ip:${ip}:${yyyy}-${mm}-${dd}`;
}

export async function POST(request: NextRequest) {
  // 1. Check monthly spend cap
  const spendKey = getMonthKey();
  const currentSpend = (await redis.get<number>(spendKey)) ?? 0;
  if (currentSpend >= 0.5) {
    return Response.json(
      {
        error:
          "The chat assistant is temporarily unavailable. Please call us at 239-375-6993 to book an appointment.",
      },
      { status: 503 }
    );
  }

  // 2. Check IP rate limit
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  const ipKey = getDayKey(ip);
  const requestCount = await redis.incr(ipKey);
  if (requestCount === 1) {
    await redis.expire(ipKey, 86400);
  }
  if (requestCount > 10) {
    return Response.json(
      {
        error:
          "You've reached the maximum of 10 questions for today. Please call us at 239-375-6993 to book or ask further questions.",
      },
      { status: 429 }
    );
  }

  // 3. Parse request body and trim to last 6 messages
  const { messages } = await request.json();
  const trimmedMessages = messages.slice(-6);

  // 4. Stream response from Anthropic
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      let inputTokens = 0;
      let outputTokens = 0;

      try {
        const response = await client.messages.create({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 300,
          system: SYSTEM_PROMPT,
          messages: trimmedMessages,
          stream: true,
        });

        for await (const event of response) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
          if (event.type === "message_delta" && event.usage) {
            outputTokens = event.usage.output_tokens;
          }
          if (event.type === "message_start" && event.message.usage) {
            inputTokens = event.message.usage.input_tokens;
          }
        }

        controller.close();

        // 5. Record token usage after stream completes
        const inputCost = (inputTokens / 1_000_000) * 0.8;
        const outputCost = (outputTokens / 1_000_000) * 4.0;
        const totalCost = inputCost + outputCost;

        await redis.incrbyfloat(spendKey, totalCost);
        if (currentSpend === 0) {
          await redis.expire(spendKey, 2678400);
        }
      } catch (err) {
        controller.error(err);
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
