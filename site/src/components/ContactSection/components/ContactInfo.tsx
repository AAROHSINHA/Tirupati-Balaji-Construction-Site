import InquiriesSection from "./InquiriesSection";
import HeadOfficeSection from "./HeadOfficeSection";
import ContactForm from "./ContactForm";
import ContactNumbers from "./ContactNumbers";
export default function ContactInfo() {
  return (
    <div className="max-w-5xl mx-auto px-2 py-16">
      <div className="grid md:grid-cols-2 gap-y-12 md:gap-y-8 md:gap-x-16">
        <InquiriesSection />
        <HeadOfficeSection />
        <ContactForm />
        <div className="flex flex-col ">
          <ContactNumbers />
        </div>
      </div>
    </div>
  );
}
