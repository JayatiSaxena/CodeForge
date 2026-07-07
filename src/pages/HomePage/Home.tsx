import HomeNavbar from "./HomeNavbar";
import HeroSection from "./HeroSection";
import FeatureCards from "./FeatureCards";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <HomeNavbar />

      {/* Main Content */}
      <main className="space-y-24">
        <HeroSection />

        <section className="max-w-7xl mx-auto px-6">
          <FeatureCards />
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <AboutSection />
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <ServicesSection />
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <FAQ />
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}