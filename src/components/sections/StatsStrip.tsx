'use client';

import { AnimatedCounter } from '@/components/shared/animated-counter';

const stats = [
  { value: 58209, suffix: '+', label: 'Establishments' },
  { value: 3, suffix: 'M+', label: 'Contract Labourers' },
  { value: 4, suffix: 'M+', label: 'Compliance Transactions' },
  { value: 1175, suffix: '+', label: 'Factories' },
  { value: 25, suffix: '+', label: 'States Presence' },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-ap-purple py-12 sm:py-16">
      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ap-violet/50 to-transparent" />
      {/* Bottom border glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ap-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2200}
                  className="text-3xl font-bold sm:text-4xl"
                />
              </div>
              <p className="mt-1.5 text-sm text-white/70 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
