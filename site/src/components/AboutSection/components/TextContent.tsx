import { useState } from "react";
export default function TextContent() {
  const [showContent, setShowContent] = useState("hidden");

  const showClick = () => {
    if (showContent == "hidden") setShowContent("");
    else setShowContent("hidden");
  };

  return (
    <div className="space-y-6">
      <div className="text-center lg:text-left">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          ABOUT
        </h2>
        <div className="w-16 h-2 bg-yellow-500 mx-auto lg:mx-0"></div>
      </div>

      <div className="text-gray-600 leading-relaxed text-base">
        <p>
          Tirupati Balaji Constructions, based in Mumbai, is your trusted
          partner for all kinds of construction and renovation needs. With years
          of expertise, we specialize in delivering complete solutions for both
          residential and commercial projects. From{" "}
          <b>building strong structures</b>
          to <b>designing functional and stylish interiors</b>, we handle every
          aspect of construction with precision and care. Our services cover
          everything from <b>plumbing</b>, <b>painting</b>, <b>flooring</b>, and{" "}
          <b>bathroom construction</b> to <b>full-scale home development</b>,
          ensuring seamless work from the outside framework to the finest
          interior details.
        </p>
        <br />

        <p className={`${showContent} md:block`}>
          We believe in quality craftsmanship, timely project completion, and
          customer satisfaction, making us a reliable choice for clients seeking
          durability and aesthetic excellence. At Tirupati Balaji Constructions,
          we combine technical knowledge with innovative design to create spaces
          that stand the test of time. Whether it’s a small renovation or a
          complete home construction, we are committed to turning your vision
          into reality with professionalism and dedication.
        </p>

        <p
          className="block text-center px-2 text-sm font-medium tracking-wide text-yellow-500 cursor-pointer my-2 hover:text-yellow-300 transition-colors duration-200 md:hidden pt-2"
          onClick={showClick}
        >
          {showContent == "" ? "SHOW LESS" : "SHOW MORE"}
        </p>
      </div>
    </div>
  );
}
