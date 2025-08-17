import mumbai1 from "../../assets/mumbai1.webp";
import ContactForm from "./components/ContactForm";
import LeftText from "./components/LeftText";

export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mumbai1})`,
          backgroundPosition: "50% 0%",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header (placeholder, untouched) */}
      <header className="relative z-10 flex items-center justify-between p-10"></header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center min-h-[calc(100vh-100px)] p-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          {/* Left Side - Hero Text */}
          <LeftText />

          {/* Right Side - Contact Form */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
