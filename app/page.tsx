import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import MeetInstructor from "@/components/home/MeetInstructor";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Certifications from "@/components/home/Certifications";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <MeetInstructor />
      <FeaturedProjects />
      <Certifications />
      <Testimonials />
      <CTABanner />
    </>
  );
}
