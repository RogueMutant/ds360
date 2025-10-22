import { testimonials } from "../lib/utils/data";
import { AnimatedTestimonials } from "../ui/testimonials/testimonial-carousel";

export default function TestimonialsPage() {
  return (
    <>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
