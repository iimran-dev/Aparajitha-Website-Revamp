'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { resources } from '@/data';

export function ResourceCenter() {
  const [images, setImages] = useState<Record<string, string>>({
    1: resources[0].image,
    2: resources[1].image,
    3: resources[2].image,
    4: resources[3].image,
  });

  return (
    <section id="resources" className="bg-gradient-to-br from-[#F5F2FF] via-[#FAF8FF] to-[#F3EFFF] py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Stay Informed. Stay Ahead.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-sm sm:text-base text-slate-500 font-normal"
          >
            Latest updates on compliance, laws &amp; industry insights
          </motion.p>
        </div>

        {/* 5 Cards Row - Mobile Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          
          {/* 4 White Resource Article Cards */}
          {resources.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl border border-purple-100/70 bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-200"
            >
              <div>
                {/* Top Image Preview Card */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={images[item.id] || item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => {
                      setImages((prev) => ({ ...prev, [item.id]: item.fallbackImage }));
                    }}
                  />
                </div>

                {/* Overlapping Meta Bar (Date & Category Badge) */}
                <div className="flex items-center justify-between px-4 sm:px-5 pt-4">
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.date}
                  </span>
                  <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[11px] font-bold text-[#7C3AED] border border-purple-100">
                    {item.badge}
                  </span>
                </div>

                {/* Article Title */}
                <div className="p-4 sm:p-5 pt-3">
                  <h3 className="text-sm sm:text-base font-bold leading-snug text-slate-900 group-hover:text-[#7C3AED] transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Read More Link */}
              <div className="px-4 sm:px-5 pb-5 pt-1">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#7C3AED] transition-colors group-hover:text-[#6D28D9]"
                >
                  <span>Read More</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* 5th Card: Soft Purple Explore More Insights CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-purple-200/60 bg-gradient-to-br from-purple-100/70 via-purple-50/80 to-purple-100/50 p-5 sm:p-6 flex flex-col justify-between shadow-md relative overflow-hidden group min-h-[260px]"
          >
            {/* Ambient pattern accent */}
            <div className="pointer-events-none absolute -right-8 -bottom-8 size-36 rounded-full bg-purple-300/20 blur-xl" />

            <div>
              <h3 className="text-lg sm:text-xl font-bold leading-snug text-[#2D1B69]">
                Explore More Insights
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-purple-900/70 leading-relaxed font-medium">
                Blogs, articles, webinars and expert opinions.
              </p>
            </div>

            {/* View All Resources Pill Button */}
            <div className="mt-6">
              <a
                href="#all-resources"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View All Resources</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

