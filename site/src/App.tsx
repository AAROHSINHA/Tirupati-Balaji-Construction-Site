import { useRef } from "react";
import NavbarContext from "./NavbarContext";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import GallerySection from "./components/GallerySection/GallerySection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <NavbarContext.Provider
      value={{ homeRef, servicesRef, aboutRef, galleryRef, contactRef }}
    >
      <Navbar />
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={galleryRef}>
        <GallerySection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer />
    </NavbarContext.Provider>
  );
}

export default App;
