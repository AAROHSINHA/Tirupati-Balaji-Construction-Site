import galleryImages from "./GalleryImages";

export default function GalleryGrid() {
  return (
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
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
