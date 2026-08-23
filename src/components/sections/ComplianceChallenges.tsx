'use client';

import { Scale, Users, Factory, Calculator, ClipboardCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const challenges = [
  {
    icon: Scale,
    title: 'Labour Compliance',
    description:
      'Managing 200+ labour law requirements across multiple states with constantly changing regulations.',
  },
  {
    icon: Users,
    title: 'Vendor Compliance',
    description:
      'Ensuring contract labour compliance, vendor certifications, and third-party regulatory adherence.',
  },
  {
    icon: Factory,
    title: 'Factory Compliance',
    description:
      'Meeting stringent factory act requirements, safety audits, and environmental compliance standards.',
  },
  {
    icon: Calculator,
    title: 'Payroll Compliance',
    description:
      'Complex payroll calculations, statutory deductions, PF/ESI/TDS compliance across jurisdictions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit Compliance',
    description:
      'Preparing for and managing regulatory audits, inspections, and compliance assessments.',
  },
];

export function ComplianceChallenges() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Solve"
          title="Compliance Challenges That Cost Enterprises Millions"
          description="Navigate the complex landscape of Indian regulatory compliance with technology-driven solutions."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <ScrollReveal key={challenge.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-l-4 hover:border-l-ap-violet hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ap-lavender text-ap-violet">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-ap-purple">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
