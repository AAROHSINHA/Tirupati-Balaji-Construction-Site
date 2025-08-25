import Navbar from "../CommonNavbar/Navbar.tsx";
import Header from "../CommonComponents/Header.tsx";
import Content from "../CommonComponents/Content.tsx";
import img7 from "../../assets/Gallery/img7.webp";

const desc =
  "We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect. We design elegant and practical interiors that reflect your lifestyle. From planning to execution, our team ensures every detail is perfect.";

export default function InteriorPage() {
  return (
    <div>
      <Navbar />
      <Header title="INTERIOR" />
      <Content
        title="Transform Your Interiors"
        description={desc}
        imgSrc={img7}
      />
    </div>
  );
}
