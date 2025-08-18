import Header from "./components/Header";
import GoogleMapEmbed from "./components/GoogleMapEmbed";
import ContactInfo from "./components/ContactInfo";
export default function ContactSection() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center justify-center">
        <Header />
        <GoogleMapEmbed />
        <ContactInfo />
      </div>
    </div>
  );
}
