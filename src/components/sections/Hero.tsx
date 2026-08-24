'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { heroStats } from '@/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/images/hero-workers.jpg');

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B041C] via-[#150935] to-[#1E0B48] text-white pt-24 sm:pt-28 lg:pt-32 pb-24 sm:pb-32 lg:pb-40">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 size-[600px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 size-[500px] rounded-full bg-indigo-500/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          
          {/* Left Column: Headline, Description, Stats & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 z-10 pb-8 lg:pb-0"
          >
            {/* Top Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-medium text-white/90 tracking-wide"
            >
              India&apos;s Most Trusted Partner for
            </motion.p>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="mt-3 text-3xl sm:text-5xl lg:text-6xl xl:text-[3.6rem] font-bold leading-[1.15] tracking-tight text-white"
            >
              Labour, Industrial &amp;
              <br />
              Employment{' '}
              <span className="text-[#FFBA08] drop-shadow-md">
                Compliance
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="mt-5 space-y-1 text-sm sm:text-base lg:text-lg text-purple-100/80 leading-relaxed font-normal max-w-2xl"
            >
              <p>Tech-driven compliance solutions for a changing India.</p>
              <p>Simplicity. Streamline. Stay Compliant.</p>
            </motion.div>

            {/* Inline Stats Row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-6 py-3.5 border-y border-white/10"
            >
              {heroStats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-300 ring-1 ring-purple-400/30">
                      <IconComponent className="size-3.5 text-purple-300" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs text-purple-200/70 whitespace-nowrap font-normal">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request a Demo</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#platform"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/5 hover:bg-white/15 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Simpliance Platform</span>
                <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#160B38] shadow-md transition-transform duration-200 group-hover:scale-110">
                  <Play className="size-3.5 fill-current translate-x-[1px]" />
                </span>
              </a>
            </motion.div>

            {/* Sub-text */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xs sm:text-sm text-purple-200/60 font-normal"
            >
              Get a free compliance assessment for your business
            </motion.p>
          </motion.div>

          {/* Right Column: Worker Photography in Landscape Format */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Landscape Format Container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-w-lg lg:max-w-none overflow-hidden rounded-2xl bg-[#0B041C]">
              <Image
                src={imgSrc}
                alt="Aparajitha Industrial & Labour Compliance Team"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top filter brightness-[0.98]"
                onError={() => {
                  setImgSrc('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80');
                }}
              />
              {/* Soft ambient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#150935] via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B041C] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Swooping Curved White Bottom Wave Divider with Integrated 25 Years Badge */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none">
        {/* SVG Swooping Bottom Wave matching exact reference curve */}
        <div className="relative w-full">
          <svg
            viewBox="0 0 1440 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-28 sm:h-36 lg:h-48 object-fill text-white block"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,70 C 380,190 680,190 1020,40 C 1180,-30 1340,30 1440,90 L 1440,240 L 0,240 Z"
              fill="currentColor"
            />
          </svg>

          {/* 25th Anniversary Circular Badge overlaid on the right side of the swoop */}
          <div className="pointer-events-auto absolute right-4 sm:right-12 lg:right-24 bottom-2 sm:bottom-6 z-30 flex items-center">
            
            {/* Left Pink & Gold Fireworks Rangoli Starburst */}
            <div className="hidden sm:block size-20 sm:size-24 mr-2 sm:mr-4">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full animate-pulse">
                <circle cx="50" cy="50" r="7" fill="#F59E0B" />
                <path d="M50 12 V32 M50 68 V88 M15 50 H35 M68 50 H88 M23 23 L37 37 M63 63 L77 77 M77 23 L63 37 M37 63 L25 77" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
                <path d="M50 4 V10 M50 90 V96 M4 50 H10 M90 50 H96" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="4" r="2.5" fill="#EC4899" />
                <circle cx="50" cy="96" r="2.5" fill="#EC4899" />
                <circle cx="4" cy="50" r="2.5" fill="#EC4899" />
                <circle cx="96" cy="50" r="2.5" fill="#EC4899" />
              </svg>
            </div>

            {/* Main White Badge Container with Double Purple Arc Rings */}
            <div className="relative">
              {/* Outer Double Arc Purple Ring */}
              <div className="absolute -inset-2.5 sm:-inset-4 rounded-full border-[4px] sm:border-[5px] border-transparent border-t-[#2D1B69] border-r-[#2D1B69] rotate-[-15deg] pointer-events-none" />
              <div className="absolute -inset-1 sm:-inset-2 rounded-full border-[2px] sm:border-[3px] border-transparent border-t-white border-r-white rotate-[-15deg] pointer-events-none" />

              {/* Top-Right Decorative Rangoli Seals / Stamps */}
              <div className="absolute -right-2 -top-2 z-20 flex gap-1 pointer-events-none">
                <div className="flex size-5 sm:size-7 items-center justify-center rounded-full bg-[#2D1B69] text-white text-[7px] sm:text-[8px] font-bold shadow-md ring-2 ring-white">
                  <div className="size-3.5 sm:size-5 rounded-full border border-dashed border-purple-300 flex items-center justify-center">
                    ★
                  </div>
                </div>
                <div className="flex size-4 sm:size-6 items-center justify-center rounded-full bg-[#7C3AED] text-white text-[6px] sm:text-[7px] font-bold shadow-md ring-2 ring-white -ml-2">
                  <div className="size-2.5 sm:size-4 rounded-full border border-dashed border-white" />
                </div>
              </div>

              {/* White Circular Badge */}
              <div className="bg-white rounded-full size-36 sm:size-52 lg:size-56 p-2.5 sm:p-4 flex flex-col items-center justify-center shadow-2xl border border-purple-100 relative text-center">
                <p className="text-[8px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#2D1B69]">
                  Celebrating
                </p>
                <div className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-purple-500 via-amber-400 to-pink-500 rounded-full my-0.5" />
                <div className="relative my-0.5 flex items-center justify-center">
                  <span className="text-3xl sm:text-6xl font-black tracking-tighter bg-gradient-to-r from-[#2D1B69] via-[#6D28D9] to-[#2563EB] bg-clip-text text-transparent drop-shadow-sm select-none">
                    25
                  </span>
                </div>
                <div className="text-center font-extrabold text-slate-900 tracking-wider uppercase text-[8px] sm:text-xs leading-tight">
                  <p className="text-[#2D1B69] font-bold">Years of</p>
                  <p className="text-slate-950 font-black tracking-widest text-[9px] sm:text-xs">COMPLIANCE</p>
                  <p className="text-slate-900 font-extrabold tracking-widest text-[8px] sm:text-[11px]">EXCELLENCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

