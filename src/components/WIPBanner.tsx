"use client";

import { useState } from "react";
import { X, Phone, Construction } from "lucide-react";

export default function WIPBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border-b border-amber-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <Construction className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <p className="text-sm text-gray-700 truncate sm:whitespace-normal">
              <span className="font-semibold text-amber-700">
                Website under construction.
              </span>{" "}
              <span className="hidden sm:inline">
                Details and pricing may change.{" "}
              </span>
              For the most accurate info, please call us directly.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="tel:2393756993"
              className="flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm"
            >
              <Phone className="w-3 h-3" />
              <span>Call Now</span>
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
    </div>
  );
}
