import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Webinars from "@/components/home/Webinars";
import Differentiators from "@/components/home/Differentiators";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Webinars />
      <Differentiators />
      <Testimonials />
      <CTABanner />
    </>
  );
}
