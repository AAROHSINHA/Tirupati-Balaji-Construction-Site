import img2 from "../../assets/Gallery/img2.webp";
import img4 from "../../assets/Gallery/img4.webp";
import img6 from "../../assets/Gallery/img6.webp";
import img7 from "../../assets/Gallery/img7.webp";
import img10 from "../../assets/Gallery/img10.webp";
import img15 from "../../assets/Gallery/img15.webp";
import img19 from "../../assets/Gallery/img19.webp";
import img21 from "../../assets/Gallery/img21.webp";

export default function GallerySection() {
  const galleryImages = [
    {
      src: img2,
      alt: "Modern construction project exterior view",
    },
    {
      src: img4,
      alt: "Active construction site with tower cranes",
    },
    {
      src: img6,
      alt: "Architectural planning and blueprint review",
    },
    {
      src: img7,
      alt: "Completed residential building complex",
    },
    {
      src: img10,
      alt: "Steel beam installation work",
    },
    {
      src: img15,
      alt: "Modern office building with glass facade",
    },
    {
      src: img19,
      alt: "Heavy construction equipment on site",
    },
    {
      src: img21,
      alt: "High-quality interior construction finish",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-wider mb-6 mt-6">
            OUR WORK
          </h2>
          <div className="w-16 h-2 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
