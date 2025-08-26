interface GalleryProps {
  images?: string[];
  className?: string;
}

export default function Gallery({ images, className = "" }: GalleryProps) {
  // Generate 32 placeholder images if no images provided
  const galleryImages =
    images ||
    Array.from(
      { length: 32 },
      (_, i) =>
        `/placeholder.svg?height=300&width=300&query=gallery image ${i + 1}`
    );

  return (
    <div className={`mx-6 md:mx-12 lg:mx-16 ${className} mt-[5em]`}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden bg-muted hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
