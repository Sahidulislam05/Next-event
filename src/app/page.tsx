import { EventsSection } from "@/components/pages/home/EventsSection";
import HeroSection from "@/components/pages/home/heroSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";
import { SubscribeSection } from "@/components/pages/home/SubscribeSection";
import { TestimonialSection } from "@/components/pages/home/TestimonialSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <EventsSection></EventsSection>
      <TestimonialSection></TestimonialSection>
      <SubscribeSection></SubscribeSection>
    </div>
  );
}
