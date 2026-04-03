import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery-nails.jpg",
    alt: "Beautiful nail art and manicure",
    label: "Nail Art",
    tall: true,
  },
  {
    id: 2,
    src: "/images/gallery-lashes.jpg",
    alt: "Lash extensions",
    label: "Lash Extensions",
    tall: false,
  },
  {
    id: 3,
    src: "/images/gallery-hair.jpg",
    alt: "Professional hair styling",
    label: "Hair Styling",
    tall: false,
  },
  {
    id: 4,
    src: "/images/gallery-spa.jpg",
    alt: "Relaxing spa and pedicure treatment",
    label: "Pedicure & Spa",
    tall: true,
  },
  {
    id: 5,
    src: "/images/gallery-beauty.jpg",
    alt: "Beauty treatment results",
    label: "Beauty Results",
    tall: false,
  },
  {
    id: 6,
    src: "/images/gallery-polish.jpg",
    alt: "Nail polish collection",
    label: "Nail Polish",
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
              <div
                className={`relative ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-colors duration-300" />

                {/* Label on hover */}
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
          Follow{" "}
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
