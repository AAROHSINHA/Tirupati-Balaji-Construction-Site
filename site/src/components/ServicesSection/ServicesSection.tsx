import Header from "./components/Header";
import Services from "./components/Services";
export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <Header />
        <Services />
      </div>
    </section>
  );
}
