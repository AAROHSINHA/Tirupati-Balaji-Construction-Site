import HomePage from "./Homepage.tsx";
import InteriorPage from "./ServicesPage/ServicePages/InteriorPage.tsx";
import PlumbingPage from "./ServicesPage/ServicePages/PlumbingPage.tsx";
import ConstructionPage from "./ServicesPage/ServicePages/ConstructionPage.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GallerySection from "./ServicesPage/ServicePages/GallerySection.tsx";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/interior-and-finishing" element={<InteriorPage />} />
      <Route path="/plumbing-and-utilities" element={<PlumbingPage />} />
      <Route
        path="/construction-and-remodelling"
        element={<ConstructionPage />}
      />
      <Route path="/gallery" element={<GallerySection />} />
    </Routes>
  );
}
export default App;
