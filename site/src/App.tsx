import Navbar from "./components/Navbar/Navbar.tsx";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import ServicesSection from "./components/ServicesSection/ServicesSection.tsx";
import AboutSection from "./components/AboutSection/AboutSection.tsx";
import StatsSection from "./components/StatsSection/StatsSection.tsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
    </div>
  );
}

export default App;
