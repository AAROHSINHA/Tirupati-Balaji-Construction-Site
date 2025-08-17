import Navbar from "./components/Navbar/Navbar.tsx";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import ServicesSection from "./components/ServicesSection/ServicesSection.tsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </div>
  );
}

export default App;
