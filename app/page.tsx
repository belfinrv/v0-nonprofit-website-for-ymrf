import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/home/mission-section"
import { ProgramsPreview } from "@/components/home/programs-preview"
import { EventsPreview } from "@/components/home/events-preview"
import { ImpactSection } from "@/components/home/impact-section"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProgramsPreview />
      <EventsPreview />
      <ImpactSection />
      <FinalCta />
    </>
  )
}
