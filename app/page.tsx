import { HeroParallax } from "./ui/home/home";
import { products } from "./lib/utils/data";
import TestimonialsPage from "./testimonials/page";
import { HoverBorderGradient } from "./ui/hover-button";
import FeaturesPage from "./features/page";
import AboutPage from "./about/page";
import FounderPage from "./founder/page";
import ContactUs from "./contact/page";

export default function Home() {
  return (
    <>
      <HeroParallax products={products} />
      <div className="relative z-10 flex items-center justify-center gap-4 px-4 py-8">
        <HoverBorderGradient>Request Feedback</HoverBorderGradient>
        <HoverBorderGradient>Explore Features</HoverBorderGradient>
      </div>
      <AboutPage />
      <FeaturesPage />
      <FounderPage />
      <ContactUs />
      <TestimonialsPage />
    </>
  );
}
