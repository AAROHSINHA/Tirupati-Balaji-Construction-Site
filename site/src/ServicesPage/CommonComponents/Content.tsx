interface ContentProps {
  description: string;
  imgSrc: string;
  imgAlt?: string;
}

export default function Content({
  description,
  imgSrc,
  imgAlt = "Service image",
}: ContentProps) {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="w-full max-h-5xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 max-w-prose">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h2> */}
          <p className="text-md text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
