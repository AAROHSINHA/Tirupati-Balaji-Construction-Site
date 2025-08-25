import Navbar from "../CommonNavbar/Navbar.tsx";
import Header from "../CommonComponents/Header.tsx";
import Content from "../CommonComponents/Content.tsx";
import img7 from "../../assets/Gallery/img5.webp";
import CardsGrid from "../CommonComponents/CardsGrid.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import ContactButton from "../CommonComponents/ContactButton.tsx";

const desc =
  "We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect.";

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

export default function PlumbingPage() {
  return (
    <div>
      <Navbar />
      <Header title="PLUMBING AND UTILITIES" />
      <Content
        title="Transform Your Interiors"
        description={desc}
        imgSrc={img7}
      />
      <CardsGrid cards={cardData} />
      <ContactButton />
      <Footer />
    </div>
  );
}
