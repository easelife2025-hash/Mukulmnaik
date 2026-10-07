import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import PropertyFilter from '@/components/PropertyFilter';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import EmiCalculator from '@/components/EmiCalculator';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import ContactForm from '@/components/ContactForm';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Hero Section with 4 Auto-Looping Slides */}
      <HeroSlider />

      {/* Verified Properties Search & Showcase (Showing 5 properties with redirect to /properties) */}
      <PropertyFilter limit={5} showViewMoreButton={true} />

      {/* About Mukul M Naik (Founder & Local Authority) */}
      <AboutSection />

      {/* Verified Google Reviews & Social Proof (5.0 ★ · 245 Reviews) */}
      <ReviewsSection />

      {/* Interactive EMI & Affordability Calculator */}
      <EmiCalculator />

      {/* High-Resolution Property & Office Gallery */}
      <GallerySection />

      {/* Physical Office Location, Map & Directions */}
      <LocationSection />

      {/* Direct Requirement & Consultation Form */}
      <ContactForm />

      {/* Fixed Floating Call & WhatsApp Buttons */}
      <FloatingContactButtons />

      {/* Professional Agency Footer */}
      <Footer />
    </main>
  );
}
