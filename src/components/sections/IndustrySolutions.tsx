'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { industriesData } from '@/data';

export default function IndustrySolutions() {
  return (
    <section id="industries" className="bg-slate-50/50 py-12 sm:py-16 lg:py-20 border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Outer Rounded Container Card matching image */}
        <div className="rounded-3xl bg-white border border-purple-100 p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          
          {/* Header Row: Title & Top-Right CTA Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 sm:pb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Tailored Solutions for Every Industry
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
                Specialized compliance frameworks designed for unique sector regulations
              </p>
            </div>

            {/* Top Right Pill CTA */}
            <a
              href="#all-industries"
              className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/50 hover:bg-purple-100/70 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#7C3AED] transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 self-start sm:self-auto"
            >
              <span>View All Industries</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* 8 Industry Cards Grid - Mobile Responsive (2 cols on small mobile, 4 on tablet, 8 on desktop) */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {industriesData.map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-purple-200 hover:shadow-lg"
              >
                {/* Top Icon Badge */}
                <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100/60 text-[#7C3AED] transition-colors group-hover:bg-[#7C3AED] group-hover:text-white">
                  <Building2 className="size-5" />
                </div>

                {/* Industry Title */}
                <h3 className="mt-3 text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-[#7C3AED] transition-colors">
                  {item.name}
                </h3>

                {/* Bottom Pill Badge */}
                <span className="mt-3 inline-block rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-500 border border-slate-200/80 group-hover:border-purple-200 group-hover:text-[#7C3AED]">
                  {item.badge}
                </span>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
