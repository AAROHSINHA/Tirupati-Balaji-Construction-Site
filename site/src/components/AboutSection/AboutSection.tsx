import about1 from "../../assets/about.webp";
import TextContent from "./components/TextContent";

export default function AboutSection() {
  return (
    <section className="bg-[#F7F7F7] mt-[3em]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side text */}
        <div className="flex items-center px-12 lg:pl-50 py-16">
          <TextContent />
        </div>

        {/* Right side image */}
        <div
          className="relative h-80 lg:h-auto absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${about1})`,
            backgroundPosition: "50% 0%",
          }}
        >
          {/* <img
            src={mumbai1}
            alt="Construction site with tower cranes and concrete structures during golden hour"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
}
