import Header from "./components/Header";
import { ViewMoreButton } from "./components/ViewMoreButton";
import GalleryGrid from "./components/GalleryGrid";

export default function GallerySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <Header />
        {/* Gallery Grid */}
        <GalleryGrid />
      </div>
      {/* <ViewMore /> */}
      <ViewMoreButton />
    </section>
  );
}
