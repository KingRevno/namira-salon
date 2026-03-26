import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:2393756993"
      aria-label="Call Namira Salon"
      className="fixed bottom-6 right-5 z-50 lg:hidden flex items-center gap-2 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-lg shadow-rose-500/40 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="relative">
        <Phone className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border border-white" />
      </div>
      <span className="text-sm">Call Now</span>
    </a>
  );
}
