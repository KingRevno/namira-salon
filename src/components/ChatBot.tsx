"use client";

import { MessageCircle, X, Send, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const BOOKING_PATTERN = /book|appointment|schedul|reserv|call us/i;

function containsBookingCue(text: string): boolean {
  return BOOKING_PATTERN.test(text);
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const showCallLink =
    !isUser && containsBookingCue(message.content) && message.content !== "";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-rose-500 text-white rounded-br-sm"
            : "bg-rose-50 text-gray-800 border border-rose-100 rounded-bl-sm"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        {showCallLink && (
          <a
            href="tel:2393756993"
            className="mt-2 flex items-center gap-1.5 text-rose-600 font-semibold hover:text-rose-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call 239-375-6993
          </a>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-rose-50 border border-rose-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
        <span
          className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm here to help with questions about Namira Salon. Ask me about our services, hours, or how to book an appointment! 💅",
    },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || isStreaming || isTyping) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.error ??
              "Something went wrong. Please try again or call us directly.",
          },
        ]);
        setIsTyping(false);
        return;
      }

      setIsTyping(false);
      setIsStreaming(true);

      const assistantMessage: Message = { role: "assistant", content: "" };
      setMessages((prev) => [...prev, assistantMessage]);

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = {
            role: "assistant",
            content: next[next.length - 1].content + chunk,
          };
          return next;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong. Please try again or call us at 239-375-6993.",
        },
      ]);
    } finally {
      setIsTyping(false);
      setIsStreaming(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-24 right-5 z-50 lg:bottom-8 lg:right-8 w-14 h-14 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white rounded-full shadow-lg shadow-rose-500/40 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-44 right-5 lg:bottom-24 lg:right-8 z-50 w-[380px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl border border-rose-100 shadow-2xl shadow-rose-100/60 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{ height: "500px" }}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-rose-100 rounded-t-2xl bg-gradient-to-r from-rose-500 to-pink-500">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">
                Namira Salon
              </p>
              <p className="text-rose-100 text-xs">Ask me anything!</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {messages.map((msg, i) => (
            <MessageBubble key={i} message={msg} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-rose-100">
          <div className="flex items-center gap-2 bg-rose-50 rounded-xl px-3 py-2 border border-rose-100 focus-within:border-rose-300 transition-colors">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about services, hours…"
              disabled={isStreaming || isTyping}
              className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isStreaming || isTyping}
              aria-label="Send message"
              className="w-8 h-8 bg-rose-500 hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
