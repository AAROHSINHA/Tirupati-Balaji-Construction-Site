import Navbar from "./components/Navbar/Navbar.tsx";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import ServicesSection from "./components/ServicesSection/ServicesSection.tsx";
import AboutSection from "./components/AboutSection/AboutSection.tsx";
import StatsSection from "./components/StatsSection/StatsSection.tsx";
import GallerySection from "./components/GallerySection/GallerySection.tsx";
import ContactSection from "./components/ContactSection/ContactSection.tsx";
import GoogleMapEmbed from "./components/ContactSection/components/GoogleMapEmbed.tsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default App;
