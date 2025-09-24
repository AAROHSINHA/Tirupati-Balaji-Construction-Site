import Navbar from "../CommonNavbar/Navbar.tsx";
import Header from "../CommonComponents/Header.tsx";
import Content from "../CommonComponents/Content.tsx";
import img7 from "../../assets/Gallery/image_pl.jpg";
import CardsGrid from "../CommonComponents/CardsGrid.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ContactButton from "../CommonComponents/ContactButton.tsx";
import { plumbingDescription } from "./content.ts";
import { plumbingCardData } from "./content.ts";
import Floating from "../CommonComponents/Floating.tsx";

export default function PlumbingPage() {
  return (
    <div>
      <Floating />
      <Navbar />
      <Header title="PLUMBING AND UTILITIES" />
      <Content description={plumbingDescription} imgSrc={img7} />
      <CardsGrid cards={plumbingCardData} />
      <ContactButton />
      <Footer />
    </div>
  );
}
