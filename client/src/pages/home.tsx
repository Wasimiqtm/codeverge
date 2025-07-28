import Header from "@/components/header";
import Loader from "@/components/loader";
import HeroSlider from "@/components/hero-slider";
import FeaturedStats from "@/components/featured-stats";
import ServicesGrid from "@/components/services-grid";
import Footer from "@/components/footer";
import { Suspense, lazy } from "react";
const FintechExpertise = lazy(() => import("@/components/fintech-expertise"));
const FaqSection = lazy(() => import("@/components/faq-section"));
const TestimonialCarousel = lazy(() => import("@/components/testimonial-carousel"));
const ContactForm = lazy(() => import("@/components/contact-form"));
const HowWeWork = lazy(() => import("@/components/how-we-work"));
import StickyCTA from "@/components/sticky-cta";
import NewsletterSignup from "@/components/newsletter-signup";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Loader />
      <Header />
      <HeroSlider />
      <FeaturedStats />
      <Suspense fallback={null}>
        <ServicesGrid />
        <HowWeWork />
        <FintechExpertise />
        <TestimonialCarousel />
        <FaqSection />
        <ContactForm />
      </Suspense>
      <NewsletterSignup />
      <StickyCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
