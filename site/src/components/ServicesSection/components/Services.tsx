import mumbai1 from "../../../assets/mumbai1.webp";
import services33 from "../../../assets/services33.webp";
import services32 from "../../../assets/services32.webp";
import services31 from "../../../assets/services31.webp";
import { services } from "../services.ts";
export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
      {services.map((service) => (
        <div key={service.id} className="text-center hover:cursor-pointer">
          {/* Service Image */}
          <div className="mb">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Service Title */}
          <div className="bg-[#F7F7F7] p-4">
            <h3 className="text-left text-xl font-semibold text-gray-700 mb-4 px-2 leading-tight">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-left text-gray-600 text-sm leading-relaxed px-2">
              {service.description}
            </p>

            <p className="text-left px-2 text-base font-semibold text-yellow-500 cursor-pointer my-2 hover:text-yellow-300 transition-colors duration-200">
              View Gallery
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
