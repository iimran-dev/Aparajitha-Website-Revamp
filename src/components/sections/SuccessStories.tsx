'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data';

export function SuccessStories() {
  const [images, setImages] = useState<Record<number, string>>({
    0: caseStudies[0].image,
    1: caseStudies[1].image,
    2: caseStudies[2].image,
  });

  return (
    <section id="case-studies" className="bg-gradient-to-br from-[#F5F2FF] via-[#FAF8FF] to-[#F3EFFF] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Real Impact. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-sm sm:text-base text-slate-500 font-normal"
          >
            Discover how we help businesses stay compliant and grow
          </motion.p>
        </div>

        {/* 4 Cards Grid - Responsive layout (1 col mobile, 2 cols tablet, 4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 3 Case Study Image Cards */}
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-purple-100/70 bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-200"
            >
              <div>
                {/* Top Image Preview Card with Badge Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={images[idx] || study.image}
                    alt={study.headline}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => {
                      setImages((prev) => ({ ...prev, [idx]: study.fallbackImage }));
                    }}
                  />
                  
                  {/* Floating Industry Badge Overlay */}
                  <div className="absolute left-3 bottom-3 z-10">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold text-[#7C3AED] shadow-md border border-purple-100">
                      {study.badge}
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold leading-snug text-slate-900 group-hover:text-[#7C3AED] transition-colors">
                    {study.headline}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-normal text-slate-500 leading-relaxed">
                    {study.subtext}
                  </p>
                </div>
              </div>

              {/* Bottom Read Case Study Link */}
              <div className="px-5 sm:px-6 pb-6 pt-2">
                <a
                  href={study.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7C3AED] transition-colors group-hover:text-[#6D28D9]"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* 4th Card: Dark Purple CTA Hero Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-gradient-to-br from-[#6D28D9] via-[#5B21B6] to-[#3B0764] p-6 sm:p-8 flex flex-col justify-between text-white shadow-xl shadow-purple-950/20 relative overflow-hidden group min-h-[280px]"
          >
            {/* Background Pattern Accent */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 size-48 rounded-full bg-purple-400/10 blur-2xl group-hover:scale-125 transition-transform" />
            <div className="pointer-events-none absolute right-4 bottom-4 opacity-10">
              <svg className="size-32 text-white" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
                <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="8" />
              </svg>
            </div>

            {/* Headline */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-white max-w-xs">
                See how we drive compliance excellence across industries.
              </h3>
            </div>

            {/* View All Case Studies Pill Button */}
            <div className="relative z-10 mt-8">
              <a
                href="#all-case-studies"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white hover:bg-purple-50 px-6 py-3 text-xs sm:text-sm font-bold text-[#5B21B6] shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

