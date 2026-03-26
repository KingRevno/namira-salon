import { Phone } from "lucide-react";

const services = [
  {
    name: "Manicure",
    description:
      "Beautifully shaped, buffed, and polished nails with lasting results. Classic, gel, or nail art options available for a flawless, personalized finish.",
    price: "$45+",
    emoji: "💅",
    color: "bg-rose-50 group-hover:bg-rose-100",
  },
  {
    name: "Pedicure",
    description:
      "A relaxing and rejuvenating foot treatment with soothing soaks, exfoliation, and polished nails that leave your feet feeling silky soft.",
    price: "$35+",
    emoji: "🦶",
    color: "bg-pink-50 group-hover:bg-pink-100",
  },
  {
    name: "Hair Cut",
    description:
      "Precision cuts tailored to your face shape and personal style, from classic trims to fresh transformations that frame your features perfectly.",
    price: "$25+",
    emoji: "✂️",
    color: "bg-rose-50 group-hover:bg-rose-100",
  },
  {
    name: "Hair Styling",
    description:
      "Elegant blowouts, bouncy curls, sleek waves, or stunning updos for any occasion. From everyday glam to special event-ready styles.",
    price: "$10+",
    emoji: "💇‍♀️",
    color: "bg-pink-50 group-hover:bg-pink-100",
  },
  {
    name: "Lashes",
    description:
      "Fuller, longer, and more defined lashes for an instant wow effect. Classic, volume, and hybrid extension sets designed to suit your look.",
    price: "$35+",
    emoji: "👁️",
    color: "bg-rose-50 group-hover:bg-rose-100",
  },
  {
    name: "Waxing",
    description:
      "Smooth, clean, and long-lasting results with gentle, effective waxing. Eyebrows, lip, face, and body waxing performed with care.",
    price: "$5+",
    emoji: "✨",
    color: "bg-pink-50 group-hover:bg-pink-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Services & Pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Explore our beauty services. Every treatment is tailored to you.
          </p>
          <div className="mt-6 w-16 h-1 bg-rose-300 rounded-full mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service) => (
            <div
              key={service.name}
              className="group bg-white border border-rose-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300 flex-shrink-0`}
                >
                  {service.emoji}
                </div>
                <span className="text-rose-500 font-bold text-xl font-serif pt-1">
                  {service.price}
                </span>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">
                {service.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-5">
            Ready to treat yourself? Give us a call to book your appointment.
          </p>
          <a
            href="tel:2393756993"
            className="inline-flex items-center gap-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call 239-375-6993 to Book
          </a>
        </div>
      </div>
    </section>
  );
}
