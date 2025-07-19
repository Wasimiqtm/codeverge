import Header from "@/components/header";
import HeroSlider from "@/components/hero-slider";
import FeaturedStats from "@/components/featured-stats";
import ServicesGrid from "@/components/services-grid";
import TestimonialCarousel from "@/components/testimonial-carousel";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSlider />
      <FeaturedStats />
      <ServicesGrid />
      <TestimonialCarousel />
      <ContactForm />
      <Footer />
    </div>
  );
}
