'use client';

import { User } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const leaders = [
  {
    title: 'Chief Technology Officer',
    tagline: 'Driving Simpliance innovation',
  },
  {
    title: 'Head of Compliance',
    tagline: '25+ years regulatory expertise',
  },
  {
    title: 'VP of Operations',
    tagline: 'Nationwide compliance delivery',
  },
  {
    title: 'Chief Risk Officer',
    tagline: 'Enterprise risk management',
  },
];

const expertStats = [
  '25+ Regulatory Experts',
  '200+ Years Combined Experience',
  '50+ Specializations',
];

export function Leadership() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership & Expertise"
          title="25 Years of Regulatory Authority"
          description="Our leadership combines deep regulatory expertise with technology vision to deliver enterprise compliance at scale."
        />

        {/* Founder / CEO Spotlight */}
        <ScrollReveal className="mt-12 lg:mt-16">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
              {/* Left: Avatar placeholder */}
              <div className="shrink-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-ap-purple to-ap-indigo rounded-2xl flex items-center justify-center">
                <User className="w-24 h-24 text-white/30" />
              </div>

              {/* Right: Info */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-ap-violet text-sm font-semibold">
                  Founder & CEO
                </p>
                <h3 className="text-2xl font-bold text-ap-purple mt-1">
                  Aparajitha Leadership
                </h3>
                <blockquote className="mt-4 text-muted-foreground italic border-l-2 border-ap-violet pl-4 leading-relaxed">
                  For 25 years, we have been building the compliance infrastructure
                  that powers India&apos;s enterprises. Our mission is to make
                  compliance intelligent, automated, and accessible to every
                  organization.
                </blockquote>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  With over two decades of experience in labour law and regulatory
                  compliance, our leadership has guided Aparajitha from a
                  consulting firm to India&apos;s leading Digital Compliance
                  Authority Platform.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Leadership Team Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {leaders.map((member, index) => (
            <ScrollReveal key={member.title} delay={0.1 * index}>
              <div className="rounded-xl p-5 text-center border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 rounded-full bg-ap-lavender mx-auto flex items-center justify-center">
                  <User className="w-7 h-7 text-ap-violet" />
                </div>
                <h4 className="mt-4 font-semibold text-ap-purple">
                  {member.title}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.tagline}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Expert Stats Bar */}
        <ScrollReveal delay={0.2} className="mt-12 lg:mt-16">
          <div className="bg-ap-purple rounded-2xl py-6 px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-16">
            {expertStats.map((stat, index) => (
              <div key={stat} className="flex items-center gap-4">
                <span className="text-white text-sm sm:text-base font-medium">
                  {stat}
                </span>
                {index < expertStats.length - 1 && (
                  <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
