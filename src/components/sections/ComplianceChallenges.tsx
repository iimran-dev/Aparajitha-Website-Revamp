'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { complianceSolutions } from '@/data';

export function ComplianceChallenges() {
  return (
    <section id="solutions" className="bg-slate-50/50 py-16 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            We Help You Solve Complex Compliance Challenges
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-slate-500 font-normal"
          >
            Tailored statutory and regulatory solutions for Indian enterprises across states
          </motion.p>
        </div>

        {/* 5 Cards Row - Mobile Responsive Layout */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {complianceSolutions.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-purple-100/70 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-200"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50 text-[#7C3AED] transition-colors group-hover:bg-[#7C3AED] group-hover:text-white">
                      <IconComponent className="size-5" />
                    </div>
                    <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-bold text-[#7C3AED] border border-purple-100">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold leading-snug text-slate-900 group-hover:text-[#7C3AED] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-5 pt-3 border-t border-slate-50">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7C3AED] transition-colors group-hover:text-[#6D28D9]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
