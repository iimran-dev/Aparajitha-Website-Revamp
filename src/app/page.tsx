import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import { ComplianceChallenges } from '@/components/sections/ComplianceChallenges';
import { SimplianceShowcase } from '@/components/sections/SimplianceShowcase';
import IndiaComplianceMap from '@/components/sections/IndiaComplianceMap';
import IndustrySolutions from '@/components/sections/IndustrySolutions';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { ResourceCenter } from '@/components/sections/ResourceCenter';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ComplianceChallenges />
        <SimplianceShowcase />
        <IndiaComplianceMap />
        <IndustrySolutions />
        <SuccessStories />
        <ResourceCenter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}


