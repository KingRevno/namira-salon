const galleryItems = [
  {
    id: 1,
    label: "Nail Art",
    sublabel: "Manicure",
    emoji: "💅",
    gradient: "from-rose-200 via-pink-200 to-rose-300",
    tall: true,
  },
  {
    id: 2,
    label: "Lash Extensions",
    sublabel: "Lashes",
    emoji: "👁️",
    gradient: "from-pink-100 via-rose-200 to-pink-200",
    tall: false,
  },
  {
    id: 3,
    label: "Hair Styling",
    sublabel: "Hair",
    emoji: "💇‍♀️",
    gradient: "from-rose-100 via-pink-150 to-rose-200",
    tall: false,
  },
  {
    id: 4,
    label: "Pedicure",
    sublabel: "Foot Care",
    emoji: "🦶",
    gradient: "from-pink-200 via-rose-100 to-pink-200",
    tall: true,
  },
  {
    id: 5,
    label: "Beauty Results",
    sublabel: "Glam",
    emoji: "✨",
    gradient: "from-rose-200 via-rose-300 to-pink-300",
    tall: false,
  },
  {
    id: 6,
    label: "Salon Setup",
    sublabel: "Studio",
    emoji: "🏠",
    gradient: "from-pink-100 via-rose-200 to-rose-100",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            A glimpse into the beautiful results created at Namira Salon.
          </p>
          <div className="mt-6 w-16 h-1 bg-rose-300 rounded-full mx-auto" />
        </div>

        {/* Masonry-style columns grid */}
        <div className="columns-2 md:columns-3 gap-4 lg:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-4 lg:mb-5 group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder block — swap background-image or use <Image> when photos are ready */}
              <div
                className={`bg-gradient-to-br ${item.gradient} ${
                  item.tall ? "aspect-[3/4]" : "aspect-square"
                } flex items-center justify-center relative`}
              >
                {/* Content */}
                <div className="text-center p-4 z-10 relative">
                  <span className="text-5xl sm:text-6xl block mb-2 drop-shadow-sm">
                    {item.emoji}
                  </span>
                  <p className="text-rose-800 text-sm font-semibold">
                    {item.label}
                  </p>
                  <p className="text-rose-600/70 text-xs mt-0.5">
                    {item.sublabel}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/10 transition-colors duration-300" />

                {/* Hover label */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-800 text-sm font-semibold text-center">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Real photos coming soon. Follow{" "}
          <a
            href="https://www.instagram.com/namirasalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 hover:text-rose-500 font-medium transition-colors"
          >
            @namirasalon
          </a>{" "}
          on Instagram for the latest looks.
        </p>
      </div>
    </section>
  );
}
