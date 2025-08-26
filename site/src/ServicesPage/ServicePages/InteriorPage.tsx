import Navbar from "../CommonNavbar/Navbar.tsx";
import Header from "../CommonComponents/Header.tsx";
import Content from "../CommonComponents/Content.tsx";
import img from "../../assets/Gallery/img7.webp";
import CardsGrid from "../CommonComponents/CardsGrid.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ContactButton from "../CommonComponents/ContactButton.tsx";
import { interiorDescription } from "./content.ts";
import { interiorCardData } from "./content.ts";

export default function InteriorPage() {
  return (
    <div>
      <Navbar />
      <Header title="INTERIOR AND FINISHING" />
      <Content
        title="Transform Your Interiors"
        description={interiorDescription}
        imgSrc={img}
      />
      <CardsGrid cards={interiorCardData} />
      <ContactButton />
      <Footer />
    </div>
  );
}
