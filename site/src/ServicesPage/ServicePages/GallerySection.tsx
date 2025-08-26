import galleryImages from "./gallery";
import Gallery from "../CommonComponents/Gallery";
import Navbar from "../CommonNavbar/Navbar";
import Header from "../CommonComponents/Header";
import Footer from "../../components/Footer/Footer";

export default function GallerySection() {
  return (
    <>
      <Navbar />
      <Header title="GALLERY" />
      <Gallery images={galleryImages} />
      <Footer />
    </>
  );
}
