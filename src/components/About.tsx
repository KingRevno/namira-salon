import Image from "next/image";

const highlights = [
  { icon: "⭐", label: "15+ Years Experience" },
  { icon: "💖", label: "Personalized Care" },
  { icon: "🏠", label: "Professional Home Studio" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-gradient-to-br from-rose-50 via-pink-50/50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/namira.jpg"
                  alt="Namira — Professional Beauty Stylist"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-rose-400/10" />
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-5 border border-rose-50">
              <p className="text-4xl font-serif font-bold text-rose-400 leading-none">
                15+
              </p>
              <p className="text-xs text-gray-500 font-medium mt-1">
                Years of Excellence
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-14 h-14 bg-rose-200/70 rounded-full" />
            <div className="absolute top-1/4 -right-4 w-8 h-8 bg-pink-300/60 rounded-lg rotate-12" />
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Meet Your Stylist
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              About Namira
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8 text-[1.0625rem]">
              <p>
                With over{" "}
                <strong className="text-gray-800 font-semibold">
                  15 years in the beauty industry
                </strong>
                , Namira has perfected the art of making her clients look and
                feel their absolute best. From precision manicures to stunning
                lash sets, every service she provides is delivered with skill,
                care, and a personal touch.
              </p>
              <p>
                Namira&apos;s in-home studio is clean, comfortable, and
                thoughtfully designed&mdash;a true sanctuary where you can fully
                unwind while receiving expert care. No crowded waiting rooms,
                no rushing. Just you and a professional who genuinely cares
                about your experience.
              </p>
              <p>
                Whether you&apos;re booking a quick trim, a full-glam session,
                or some much-needed pampering, Namira&apos;s mission is simple:
                to help you feel{" "}
                <span className="text-rose-500 font-medium italic">
                  confident, beautiful, and cared for
                </span>{" "}
                every time.
              </p>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 bg-white border border-rose-100 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
