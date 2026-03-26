"use client";

import { useState } from "react";
import { X, Phone } from "lucide-react";

const MESSAGE =
  "🚧 Website under construction — details & pricing may change. For accurate info, please call us directly.";

export default function WIPBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border-b border-amber-200 shadow-sm">
      <div className="flex items-center justify-between gap-2 px-3 sm:px-6 py-2">

        {/* Mobile: scrolling ticker — Desktop: static text */}
        <div className="flex-1 min-w-0 overflow-hidden">

          {/* Static layout on sm+ screens */}
          <p className="hidden sm:block text-sm text-gray-700 text-center">
            <span className="font-semibold text-amber-700">🚧 Website under construction</span>
            {" — "}details & pricing may change. For accurate info, please{" "}
            <a href="tel:2393756993" className="text-rose-600 font-semibold underline underline-offset-2 hover:text-rose-700">
              call us directly
            </a>.
          </p>

          {/* Scrolling ticker on mobile */}
          <div className="sm:hidden overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
              <span className="text-sm text-gray-700 pr-16">{MESSAGE}</span>
              <span className="text-sm text-gray-700 pr-16" aria-hidden="true">{MESSAGE}</span>
            </div>
          </div>
        </div>

        {/* Right side — Call button + dismiss */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:2393756993"
            className="flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
          >
            <Phone className="w-3 h-3" />
            Call Now
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 text-gray-400 hover:text-gray-600 hover:bg-amber-100 rounded-full transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
