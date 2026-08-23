'use client';

import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

interface CaseStudy {
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  before: string[];
  after: string[];
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'Manufacturing',
    challenge:
      'Manual compliance processes across 50+ factories led to missed deadlines and regulatory penalties.',
    solution:
      'Deployed Simpliance for automated compliance tracking, calendar management, and real-time audit readiness.',
    results: ['92% Risk Reduction', '40% Faster Compliance', '100% Audit Readiness'],
    before: ['High Risk', 'Manual Processes', 'Limited Visibility'],
    after: ['Reduced Risk', 'Automated Compliance', 'Real-Time Visibility'],
  },
  {
    industry: 'Retail',
    challenge:
      'Compliance management for 500+ retail locations with varying state regulations.',
    solution:
      'Centralized compliance platform with state-specific regulatory tracking and vendor management.',
    results: ['500+ Stores Compliant', '85% Process Efficiency', 'Zero Penalties'],
    before: ['State-Level Gaps', 'Fragmented Systems', 'Inconsistent Tracking'],
    after: ['Unified Platform', 'Centralized Compliance', 'Consistent Reporting'],
  },
  {
    industry: 'BFSI',
    challenge:
      'Stringent regulatory requirements with complex audit demands across financial operations.',
    solution:
      'End-to-end compliance automation with real-time risk monitoring and regulatory intelligence.',
    results: ['100% On-Time Compliance', '60% Audit Prep Time Reduction', '24/7 Monitoring'],
    before: ['Reactive Approach', 'Manual Audits', 'Delayed Reporting'],
    after: ['Proactive Monitoring', 'Automated Audits', 'Instant Reporting'],
  },
];

export function SuccessStories() {
  return (
    <section className="bg-ap-lavender/20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proven Results"
          title="Real Impact. Real Outcomes."
          description="Measurable compliance transformation for India's leading enterprises."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.industry} delay={0.1 * index}>
              <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-shadow duration-300 hover:shadow-lg lg:p-8">
                {/* Header: industry badge + case study label */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ap-purple px-3 py-1 text-xs font-semibold text-white">
                    {study.industry}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Case Study
                  </span>
                </div>

                {/* Challenge */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ap-violet">
                    Challenge
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ap-violet">
                    Solution
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {study.solution}
                  </p>
                </div>

                {/* Result Metrics */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ap-violet">
                    Results
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="rounded-lg bg-ap-lavender px-3 py-1.5 text-xs font-semibold text-ap-purple"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Before → After Comparison */}
                <div className="mt-5 flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-ap-violet">
                    Transformation
                  </h4>
                  <div className="mt-2.5 grid grid-cols-2 gap-3">
                    {/* Before column */}
                    <div className="rounded-xl bg-red-50/70 p-3">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">
                        Before
                      </p>
                      <ul className="space-y-1.5">
                        {study.before.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-1.5 text-xs text-red-700/80"
                          >
                            <XCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-red-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After column */}
                    <div className="rounded-xl bg-emerald-50/70 p-3">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                        After
                      </p>
                      <ul className="space-y-1.5">
                        {study.after.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-1.5 text-xs text-emerald-700/80"
                          >
                            <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Read Full Study link */}
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-ap-purple transition-colors hover:text-ap-violet">
                    Read Full Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
