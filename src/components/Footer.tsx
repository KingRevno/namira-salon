import { Phone, Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-serif font-bold text-white">
                Namira
              </span>
              <span className="text-2xl font-serif font-light text-rose-400">
                Salon
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Professional in-home beauty services with over 15 years of
              experience. Manicure, pedicure, hair, lashes, and waxing — all
              with a personal touch.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/namirasalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/namirasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:2393756993"
                className="w-9 h-9 bg-gray-800 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-rose-400 text-sm transition-colors duration-200 w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="tel:2393756993"
                className="flex items-center gap-3 text-gray-400 hover:text-rose-400 text-sm transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-gray-800 group-hover:bg-rose-500/20 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                239-375-6993
              </a>
              <a
                href="https://www.instagram.com/namirasalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-rose-400 text-sm transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-gray-800 group-hover:bg-rose-500/20 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                @namirasalon
              </a>
              <a
                href="https://www.facebook.com/namirasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-rose-400 text-sm transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-gray-800 group-hover:bg-rose-500/20 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                  <FacebookIcon className="w-4 h-4" />
                </div>
                Namira Salon
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Namira Salon. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />{" "}
            for beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
