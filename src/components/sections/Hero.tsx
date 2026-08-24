'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const dashboardVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="rounded-2xl bg-ap-indigo p-5 shadow-2xl shadow-ap-purple/30 ring-1 ring-white/10">
        {/* Header Row */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-white/50">Compliance Dashboard</p>
            <p className="mt-0.5 text-sm font-semibold text-white">Real-time Overview</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-emerald-300">Live</span>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="mb-4 grid grid-cols-3 gap-2.5">
          <div className="rounded-xl bg-white/[0.07] p-3 ring-1 ring-white/[0.06]">
            <p className="text-[10px] font-medium text-white/45">Compliance Score</p>
            <p className="mt-1 text-xl font-bold text-white">98.4%</p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[98.4%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.07] p-3 ring-1 ring-white/[0.06]">
            <p className="text-[10px] font-medium text-white/45">Pending Tasks</p>
            <p className="mt-1 text-xl font-bold text-amber-300">12</p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[12%] rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.07] p-3 ring-1 ring-white/[0.06]">
            <p className="text-[10px] font-medium text-white/45">Resolved Today</p>
            <p className="mt-1 text-xl font-bold text-emerald-300">147</p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-violet-400 to-violet-500" />
            </div>
          </div>
        </div>

        {/* Compliance Categories */}
        <div className="rounded-xl bg-white/[0.07] p-3.5 ring-1 ring-white/[0.06]">
          <p className="mb-2.5 text-[11px] font-semibold text-white/60">Category Breakdown</p>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-20 text-[10px] text-white/50">Labour Law</span>
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[96%] rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] font-semibold text-emerald-300 w-8 text-right">96%</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-20 text-[10px] text-white/50">Factory Act</span>
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[89%] rounded-full bg-violet-400/80" />
              </div>
              <span className="text-[10px] font-semibold text-violet-300 w-8 text-right">89%</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-20 text-[10px] text-white/50">Safety &amp; Env</span>
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-sky-400/80" />
              </div>
              <span className="text-[10px] font-semibold text-sky-300 w-8 text-right">92%</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-20 text-[10px] text-white/50">Payroll</span>
              <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[100%] rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] font-semibold text-emerald-300 w-8 text-right">100%</span>
            </div>
          </div>
        </div>

        {/* Activity Timeline Row */}
        <div className="mt-3 flex items-center gap-2.5">
          <div className="flex-1 rounded-lg bg-white/[0.05] px-3 py-2 ring-1 ring-white/[0.05]">
            <p className="text-[10px] text-white/40">Latest Filing</p>
            <p className="text-[11px] font-medium text-white">PF ECR - Submitted</p>
          </div>
          <div className="flex-1 rounded-lg bg-white/[0.05] px-3 py-2 ring-1 ring-white/[0.05]">
            <p className="text-[10px] text-white/40">Next Deadline</p>
            <p className="text-[11px] font-medium text-amber-300">ESI Return - 3 days</p>
          </div>
        </div>
      </div>

      {/* Floating Trust Badge: SOC 2 */}
      <div className="glass-card absolute -top-3 -right-3 rounded-xl px-3.5 py-2.5 shadow-lg sm:-top-4 sm:-right-4">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/20">
            <svg className="size-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-white">SOC 2</p>
            <p className="text-[9px] text-white/50">Certified</p>
          </div>
        </div>
      </div>

      {/* Floating Trust Badge: ISO 27001 */}
      <div className="glass-card absolute -bottom-3 -left-3 rounded-xl px-3.5 py-2.5 shadow-lg sm:-bottom-4 sm:-left-4">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-violet-500/20">
            <svg className="size-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-white">ISO 27001</p>
            <p className="text-[9px] text-white/50">Compliant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-ap-lavender/30 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-ap-violet/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-ap-purple/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-widest text-ap-gold"
            >
              India&apos;s Most Trusted Compliance Partner
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-3xl font-bold leading-tight text-ap-purple sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Enterprise Compliance,
              <br />
              Powered by Intelligence.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              Technology-driven compliance management trusted by 58,000+
              establishments across India. Simplify. Streamline. Stay Compliant.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="bg-ap-purple text-white rounded-xl px-8 py-3.5 text-sm font-semibold hover:bg-ap-indigo transition-all duration-200 shadow-lg shadow-ap-purple/20 hover:shadow-xl hover:shadow-ap-purple/30"
              >
                Request a Demo
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-ap-purple/30 text-ap-purple rounded-xl px-8 py-3.5 text-sm font-semibold hover:bg-ap-lavender transition-all duration-200 bg-white"
              >
                Explore Simpliance
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            variants={dashboardVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
