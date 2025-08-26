import Navbar from "../CommonNavbar/Navbar.tsx";
import Header from "../CommonComponents/Header.tsx";
import Content from "../CommonComponents/Content.tsx";
import img from "../../assets/Gallery/img4.webp";
import CardsGrid from "../CommonComponents/CardsGrid.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ContactButton from "../CommonComponents/ContactButton.tsx";
import { interiorDescription } from "./content.ts";

const cardData = [
  {
    number: 1,
    title: "Design System",
    description:
      "Create consistent and scalable design patterns for your application with reusable components.Create consistent and scalable design patterns for your application with reusable components.Create consistent and scalable design patterns for your application with reusable components.Create consistent and scalable design patterns for your application with reusable components.",
  },
  {
    number: 2,
    title: "User Experience",
    description:
      "Focus on intuitive interfaces that provide seamless interactions and delightful user journeys.",
  },
  {
    number: 3,
    title: "Performance",
    description:
      "Optimize loading times and ensure smooth animations for the best possible user experience.",
  },
  {
    number: 4,
    title: "Accessibility",
    description:
      "Build inclusive applications that work for everyone, following WCAG guidelines and best practices.",
  },
  {
    number: 5,
    title: "Responsive Design",
    description:
      "Ensure your application looks and works perfectly across all devices and screen sizes.",
  },
  {
    number: 6,
    title: "Code Quality",
    description:
      "Maintain clean, readable, and maintainable code with proper testing and documentation.",
  },
];

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
      <CardsGrid cards={cardData} />
      <ContactButton />
      <Footer />
    </div>
  );
}
