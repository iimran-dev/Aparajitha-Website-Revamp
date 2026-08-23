'use client';

import { ShieldCheck, Lock, Award, Leaf, HardHat, Shield, CheckCircle, Users, Bell } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const certifications = [
  {
    icon: ShieldCheck,
    name: 'SOC 2',
    description:
      'Enterprise-grade security controls for data protection and privacy compliance.',
  },
  {
    icon: Lock,
    name: 'ISO 27001',
    description:
      'Comprehensive information security management system certification.',
  },
  {
    icon: Award,
    name: 'ISO 9001',
    description:
      'Quality management system ensuring consistent service delivery excellence.',
  },
  {
    icon: Leaf,
    name: 'ISO 14001',
    description:
      'Environmental management system for sustainable compliance operations.',
  },
  {
    icon: HardHat,
    name: 'ISO 45001',
    description:
      'Occupational health and safety management system certification.',
  },
];

const trustMetrics = [
  {
    icon: Shield,
    title: '100% Data Security',
    description: 'End-to-end encryption & access controls',
  },
  {
    icon: CheckCircle,
    title: 'Zero Compliance Penalties',
    description: 'Proactive risk mitigation track record',
  },
  {
    icon: Users,
    title: '25+ Regulatory Experts',
    description: 'Dedicated compliance specialists on staff',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Instant notifications for regulatory changes',
  },
];

export function CertificationCenter() {
  return (
    <section className="bg-ap-lavender/20 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certified. Compliant. Committed."
          title="Enterprise-Grade Trust & Security"
          description="Our commitment to security and quality is validated by the world's leading certification bodies."
        />

        {/* Certification Cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <ScrollReveal key={cert.name} delay={index * 0.1}>
                <div className="group rounded-2xl border border-white/50 bg-white/70 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ap-lavender text-ap-violet">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-bold text-ap-purple">{cert.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                  <button
                    type="button"
                    className="mt-3 text-sm font-medium text-ap-violet transition-colors hover:text-ap-purple"
                  >
                    Verify &rarr;
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Trust Metrics Bar */}
        <ScrollReveal delay={0.3} className="mt-12">
          <div className="rounded-2xl bg-ap-purple p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {trustMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.title} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white sm:text-xl">
                      {metric.title}
                    </h4>
                    <p className="mt-1 text-sm text-white/70">
                      {metric.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
