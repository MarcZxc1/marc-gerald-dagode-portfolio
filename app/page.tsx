import { HeroSection } from "@/components/site/hero-section";
import { SelectedWorkSection } from "@/components/site/selected-work-section";
import { ExpertiseSection } from "@/components/site/expertise-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SelectedWorkSection />
      <ExpertiseSection />
    </main>
  );
}
