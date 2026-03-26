import { Phone, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-rose-50/60 to-pink-50 pt-16 lg:pt-20"
    >
      {/* Decorative blobs */}
      <div className="absolute top-24 right-[-4rem] w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-[-4rem] w-72 h-72 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-100/80 text-rose-600 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-rose-200/50">
              <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
              Professional In-Home Beauty Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-5">
              Professional Beauty{" "}
              <span className="text-rose-400 italic">Services</span>
              <br />
              <span className="text-rose-500">by Namira</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-medium mb-4 leading-snug">
              15+ years of experience in manicure, pedicure, hair, lashes, and
              waxing
            </p>

            <p className="text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Step into a clean, relaxing, and professional in-home salon
              experience. Namira brings personalized, expert care directly to
              you&mdash;so you can look and feel your absolute best without ever
              leaving home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                View Services
              </a>
              <a
                href="tel:2393756993"
                className="flex items-center justify-center gap-2 border-2 border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-gray-900">
                  15+
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  Years Experience
                </p>
              </div>
              <div className="w-px h-10 bg-rose-200" />
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-gray-900">
                  6+
                </p>
                <p className="text-xs text-gray-500 font-medium">Services</p>
              </div>
              <div className="w-px h-10 bg-rose-200" />
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-gray-900">
                  100%
                </p>
                <p className="text-xs text-gray-500 font-medium">Personal</p>
              </div>
            </div>
          </div>

          {/* Image / visual area */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder image area - swap with <Image> when photos are ready */}
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-28 h-28 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                    <span className="text-5xl">💅</span>
                  </div>
                  <p className="text-rose-800 font-serif text-xl font-semibold">
                    Namira Salon
                  </p>
                  <p className="text-rose-600 text-sm mt-1">
                    Professional Beauty Services
                  </p>
                  <p className="text-rose-500/70 text-xs mt-3">
                    Replace with salon photo
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 border border-rose-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Trusted by clients
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    15+ Years of Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-rose-100 rounded-2xl rotate-12 shadow-sm animate-float" />
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-pink-100 rounded-full shadow-sm" />
            <div className="absolute top-1/3 -right-3 w-6 h-6 bg-rose-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400">
        <span className="text-xs font-medium tracking-wider uppercase">
          Scroll to explore
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
