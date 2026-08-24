'use client';

import { Factory, Store, Truck, Landmark, HeartPulse, Building2, Monitor, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

interface Industry {
  name: string;
  icon: React.ElementType;
  description: string;
  gradient: string;
}

const industries: Industry[] = [
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Complex factory compliance, safety audits, and environmental regulations across multiple production facilities.',
    gradient: 'from-ap-purple to-ap-violet',
  },
  {
    name: 'Retail',
    icon: Store,
    description: 'Multi-location compliance management for retail chains with diverse labour and establishment requirements.',
    gradient: 'from-ap-violet to-purple-500',
  },
  {
    name: 'Logistics',
    icon: Truck,
    description: 'Fleet compliance, driver regulations, and transportation industry statutory requirements.',
    gradient: 'from-purple-600 to-ap-purple',
  },
  {
    name: 'BFSI',
    icon: Landmark,
    description: 'Stringent regulatory compliance for banking, financial services, and insurance sectors.',
    gradient: 'from-ap-indigo to-ap-purple',
  },
  {
    name: 'Healthcare',
    icon: HeartPulse,
    description: 'Healthcare facility compliance, patient safety regulations, and medical establishment requirements.',
    gradient: 'from-ap-purple to-violet-600',
  },
  {
    name: 'Real Estate',
    icon: Building2,
    description: 'Construction compliance, RERA requirements, and real estate regulatory management.',
    gradient: 'from-violet-700 to-ap-purple',
  },
  {
    name: 'IT & ITES',
    icon: Monitor,
    description: 'IT/ITES establishment compliance, labour law adherence, and workplace regulation management.',
    gradient: 'from-purple-500 to-ap-violet',
  },
];

export default function IndustrySolutions() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Expertise"
          title="Compliance Solutions for Every Industry"
          description="Tailored compliance management for the unique regulatory challenges of your industry."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <ScrollReveal key={industry.name} delay={index * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200 h-full flex flex-col">
                  {/* Top gradient area */}
                  <div
                    className={`relative h-36 bg-gradient-to-br ${industry.gradient} transition-all duration-300 group-hover:h-40 flex items-center justify-center overflow-hidden`}
                  >
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-3 right-3 w-16 h-16 rounded-full border border-white/30" />
                      <div className="absolute bottom-2 left-2 w-24 h-24 rounded-full border border-white/20" />
                    </div>
                    <div className="relative w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-ap-purple text-lg">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                      {industry.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ap-violet mt-4 transition-all duration-200 group-hover:gap-2.5"
                      onClick={(e) => e.preventDefault()}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
