import { Phone, Clock, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-br from-rose-50 via-pink-50/60 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Ready to book or have a question? Reach out by phone or connect on
            social media — we&apos;d love to hear from you.
          </p>
          <div className="mt-6 w-16 h-1 bg-rose-300 rounded-full mx-auto" />
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-6 max-w-3xl mx-auto mb-8">
          {/* Phone */}
          <a
            href="tel:2393756993"
            className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center border border-rose-100"
          >
            <div className="w-16 h-16 bg-rose-100 group-hover:bg-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <Phone className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1.5">Call Us</h3>
            <p className="text-rose-500 font-bold text-lg">239-375-6993</p>
            <p className="text-gray-400 text-xs mt-2 font-medium">
              Tap to call directly
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/namirasalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center border border-rose-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 group-hover:from-pink-200 group-hover:to-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <InstagramIcon className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1.5">Instagram</h3>
            <p className="text-pink-500 font-bold text-lg">@namirasalon</p>
            <p className="text-gray-400 text-xs mt-2 font-medium">
              Follow our work
            </p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/namirasalon"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center border border-rose-100"
          >
            <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <FacebookIcon className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1.5">Facebook</h3>
            <p className="text-blue-500 font-bold text-lg">Namira Salon</p>
            <p className="text-gray-400 text-xs mt-2 font-medium">
              Connect with us
            </p>
          </a>
        </div>

        {/* Hours & Location */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Business Hours</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Monday – Saturday: 9 AM – 7 PM
                <br />
                Sunday: By appointment only
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Service Area</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                In-home salon — we come to you!
                <br />
                Call us to confirm your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
