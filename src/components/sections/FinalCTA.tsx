'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { trustIndicators } from '@/data';

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-r from-[#0C0621] via-[#170939] to-[#1E0B4B] py-12 sm:py-14 lg:py-16 text-white border-t border-purple-900/40">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[450px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Ready To Simplify Compliance Across Your Organization?
          </h2>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-purple-200/80 leading-relaxed max-w-xl mx-auto font-normal">
            Join 58,000+ establishments that trust Aparajitha for enterprise compliance management.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request a Demo</span>
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 hover:bg-white/15 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Trust indicators & Contact Bar */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-purple-200/60 font-normal">
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <item.icon className="size-3.5 text-amber-400" />
                <span>{item.label}</span>
              </div>
            ))}
            <span className="hidden sm:inline text-white/20">|</span>
            <a href="tel:1800XXXXXXX" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="size-3.5 text-purple-300" />
              <span>1800-XXX-XXXX</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

