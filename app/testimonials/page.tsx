import { testimonials } from "../lib/utils/data";
import { AnimatedTestimonials } from "../ui/testimonials/testimonial-carousel";

export function TestimonialsPage() {
  return (
    <>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
