import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import TrainingOptions from "@/components/home/TrainingOptions";
import Webinars from "@/components/home/Webinars";
import Differentiators from "@/components/home/Differentiators";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import MobileStickyBar from "@/components/home/MobileStickyBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <TrainingOptions />
      <Webinars />
      <Differentiators />
      <Testimonials />
      <CTABanner />
      <MobileStickyBar />
    </>
  );
}
