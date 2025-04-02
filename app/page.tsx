import HeroSection from '@/components/section/heroSection';
import AwardsSetion from '@/components/section/awardsSetion';
import TeachingSection from '@/components/section/teachingSection';
import ResearchSection from '@/components/section/ResearchSection';
import InnovationsSection from '@/components/section/InnovationsSection';
import PhdSection from '@/components/section/PhdSection';
import ConferencesSection from '@/components/section/ConferencesSection';
import LeadershipSection from '@/components/section/LeadershipSection';
import SpiritualitySection from '@/components/section/SpiritualitySection';
import BookSection from '@/components/section/bookSection';

export default function ProfessorPage() {
  return (
    <main className="container mx-auto py-8 px-6 md:px-12">
      <HeroSection />

      <AwardsSetion />

      <TeachingSection />

      <BookSection />

      <ResearchSection />

      <InnovationsSection />

      <PhdSection />

      <ConferencesSection />

      <LeadershipSection />

      <SpiritualitySection />
    </main>
  );
}
