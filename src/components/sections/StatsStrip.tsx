'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { clientLogos } from '@/data';

export default function StatsStrip() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-white py-10 sm:py-14 border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            Trusted by India&apos;s Leading Enterprises
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-sm sm:text-base text-slate-500 font-normal"
          >
            Delivering compliance excellence to businesses across industries
          </motion.p>
        </div>

        {/* Client Logos Row (All 12 cards in a single responsive row) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-start xl:justify-center gap-2.5 sm:gap-3 overflow-x-auto scrollbar-none pb-2 pt-1"
        >
          {clientLogos.map((client, i) => (
            <div
              key={client.name}
              className="flex h-14 min-w-[125px] sm:min-w-[135px] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-purple-200 cursor-pointer shrink-0"
            >
              <span className="text-xs font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors">
                {client.logoText}
              </span>
              <span className="text-[10px] font-medium text-slate-400 mt-0.5 whitespace-nowrap">
                {client.tagline}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Purple Active Page Pagination Pill Indicator */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? 'w-7 bg-[#7C3AED]'
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
