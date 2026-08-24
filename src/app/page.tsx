import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import ClientMarquee from '@/components/sections/ClientMarquee';
import { ComplianceChallenges } from '@/components/sections/ComplianceChallenges';
import { SimplianceShowcase } from '@/components/sections/SimplianceShowcase';
import IndiaComplianceMap from '@/components/sections/IndiaComplianceMap';
import IndustrySolutions from '@/components/sections/IndustrySolutions';
import { IntelligenceHub } from '@/components/sections/IntelligenceHub';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { ComplianceTimeline } from '@/components/sections/ComplianceTimeline';
import { CertificationCenter } from '@/components/sections/CertificationCenter';
import { AIComplianceAssistant } from '@/components/sections/AIComplianceAssistant';
import { Leadership } from '@/components/sections/Leadership';
import { ResourceCenter } from '@/components/sections/ResourceCenter';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ClientMarquee />
        <ComplianceChallenges />
        <SimplianceShowcase />
        <IndiaComplianceMap />
        <IndustrySolutions />
        <IntelligenceHub />
        <SuccessStories />
        <ComplianceTimeline />
        <CertificationCenter />
        <AIComplianceAssistant />
        <Leadership />
        <ResourceCenter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
