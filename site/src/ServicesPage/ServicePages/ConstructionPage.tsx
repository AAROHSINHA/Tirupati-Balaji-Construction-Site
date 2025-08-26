import Navbar from "../CommonNavbar/Navbar.tsx";
import Header from "../CommonComponents/Header.tsx";
import Content from "../CommonComponents/Content.tsx";
import img from "../../assets/Gallery/img2.webp";
import CardsGrid from "../CommonComponents/CardsGrid.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ContactButton from "../CommonComponents/ContactButton.tsx";
import { constructionDescription } from "./content.ts";
import { constructionCardData } from "./content.ts";

export default function ConstructionPage() {
  return (
    <div>
      <Navbar />
      <Header title="CONSTRUCTION AND REMODELLING" />
      <Content
        title="Transform Your Interiors"
        description={constructionDescription}
        imgSrc={img}
      />
      <CardsGrid cards={constructionCardData} />
      <ContactButton />
      <Footer />
    </div>
  );
}
