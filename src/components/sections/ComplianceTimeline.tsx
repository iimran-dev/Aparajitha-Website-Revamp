'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, Map, Rocket, Activity, RefreshCw } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';

const stages = [
  {
    icon: Search,
    title: 'Assessment',
    description:
      'Comprehensive evaluation of your current compliance posture, risk exposure, and regulatory obligations.',
    outcome: 'Risk Baseline Report',
  },
  {
    icon: Map,
    title: 'Planning',
    description:
      'Strategic compliance roadmap aligned with your business operations and regulatory requirements.',
    outcome: 'Custom Compliance Plan',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description:
      'Deploy Simpliance platform, configure workflows, and integrate with your existing systems.',
    outcome: 'Platform Go-Live',
  },
  {
    icon: Activity,
    title: 'Monitoring',
    description:
      'Real-time compliance monitoring, automated alerts, and continuous regulatory tracking.',
    outcome: 'Live Compliance Dashboard',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Compliance',
    description:
      'Ongoing optimization, regulatory updates, and compliance maturity advancement.',
    outcome: 'Zero-Gap Compliance',
  },
];

export function ComplianceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-20 lg:py-28" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Compliance Journey"
          title="From Assessment to Continuous Compliance"
          description="A proven methodology refined over 25 years and 58,000+ successful implementations."
        />

        {/* Desktop Horizontal Timeline */}
        <div className="mt-16 hidden lg:block">
          {/* Connector line with animated draw */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-gray-200" />
            <motion.div
              className="absolute left-0 top-6 h-0.5 bg-ap-purple origin-left"
              style={{ scaleX: lineScaleX, width: '100%' }}
            />
          </div>

          {/* Stages */}
          <div className="relative flex justify-between">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={stage.title}
                  className="relative flex w-1/5 flex-col items-center"
                  initial={{ opacity: 0, y: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: 'easeOut',
                  }}
                >
                  {/* Card (alternating above/below) */}
                  <div
                    className={`mb-8 w-full max-w-[220px] rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md ${
                      !isEven ? 'order-last mb-8 mt-8' : ''
                    }`}
                  >
                    <h3 className="font-semibold text-ap-purple">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                    <span className="mt-3 inline-block bg-ap-lavender px-3 py-1 text-sm rounded-full text-ap-purple font-medium">
                      {stage.outcome}
                    </span>
                  </div>

                  {/* Circle node on the line */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-ap-purple text-white shadow-lg shadow-ap-purple/30">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Stage number below node (only for even, above for odd) */}
                  <p className="mt-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Stage {index + 1}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="mt-16 lg:hidden">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.title}
                className="relative flex gap-6 pb-10 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                {/* Vertical line on left */}
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ap-purple text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  {index < stages.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200" />
                  )}
                </div>

                {/* Card on right */}
                <div className="flex-1 pb-2">
                  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium tracking-wider text-ap-violet uppercase">
                      Stage {index + 1}
                    </p>
                    <h3 className="mt-1 font-semibold text-ap-purple">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                    <span className="mt-3 inline-block bg-ap-lavender px-3 py-1 text-sm rounded-full text-ap-purple font-medium">
                      {stage.outcome}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
