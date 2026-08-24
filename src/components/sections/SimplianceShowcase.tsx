'use client';

import { motion } from 'framer-motion';
import {
  CalendarDays,
  Users,
  ClipboardCheck,
  Factory,
  Calculator,
  ShieldAlert,
  Bell,
  LayoutDashboard,
  Search,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

/* ------------------------------------------------------------------ */
/*  Sidebar nav items for the fake dashboard                          */
/* ------------------------------------------------------------------ */
const sidebarNav = [
  { label: 'Dashboard', Icon: LayoutDashboard, active: true },
  { label: 'Compliance', Icon: ShieldAlert, active: false },
  { label: 'Calendar', Icon: CalendarDays, active: false },
  { label: 'Vendors', Icon: Users, active: false },
  { label: 'Audit', Icon: ClipboardCheck, active: false },
  { label: 'Reports', Icon: FileText, active: false },
];

/* ------------------------------------------------------------------ */
/*  Metric cards in the dashboard                                     */
/* ------------------------------------------------------------------ */
const metrics = [
  { label: 'Overdue', value: '42', color: 'bg-red-500/20 text-red-400' },
  { label: 'Due This Week', value: '156', color: 'bg-amber-500/20 text-amber-400' },
  { label: 'Active Notices', value: '1,248', color: 'bg-blue-500/20 text-blue-400' },
  { label: 'Documents', value: '3,562', color: 'bg-emerald-500/20 text-emerald-400' },
];

/* ------------------------------------------------------------------ */
/*  Recent activity items                                              */
/* ------------------------------------------------------------------ */
const activities = [
  { label: 'PF return filed — Mumbai HQ', time: '2 min ago', status: 'success' },
  { label: 'Factory license renewal due in 5 days', time: '1 hr ago', status: 'warning' },
  { label: 'ESI half-yearly return submitted', time: '3 hrs ago', status: 'success' },
  { label: 'Labour inspection scheduled — Pune', time: '5 hrs ago', status: 'warning' },
];

/* ------------------------------------------------------------------ */
/*  Calendar grid (simple 5×7)                                        */
/* ------------------------------------------------------------------ */
const calendarDays = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, null, null, null, null],
];
const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const highlightedDays = [5, 12, 15, 20, 28]; // compliance deadlines

/* ------------------------------------------------------------------ */
/*  Feature cards below the dashboard                                 */
/* ------------------------------------------------------------------ */
const features = [
  {
    Icon: CalendarDays,
    title: 'Compliance Calendar',
    description: 'Never miss a filing deadline with intelligent calendar management.',
  },
  {
    Icon: Users,
    title: 'Vendor Management',
    description: 'Track and manage vendor compliance across your supply chain.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Audit Management',
    description: 'Streamline audit preparation and corrective action tracking.',
  },
  {
    Icon: Factory,
    title: 'Factory Compliance',
    description: 'Monitor factory-specific compliance requirements in real-time.',
  },
  {
    Icon: Calculator,
    title: 'Payroll Compliance',
    description: 'Automate complex payroll calculations and statutory filings.',
  },
  {
    Icon: ShieldAlert,
    title: 'Risk Monitoring',
    description: 'Identify and mitigate compliance risks before they become penalties.',
  },
  {
    Icon: Bell,
    title: 'Alerts Center',
    description: 'Stay informed with intelligent compliance alerts and notifications.',
  },
];

/* ================================================================== */
/*  Component                                                         */
/* ================================================================== */
export function SimplianceShowcase() {
  return (
    <section className="bg-ap-lavender/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <SectionHeading
          eyebrow="The Technology Engine"
          title="Simpliance — Your Compliance Command Center"
          description="One platform to manage, monitor, and master every compliance obligation across your enterprise."
        />

        {/* ---------- Dashboard Mockup ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl bg-ap-indigo/95 p-3 sm:p-4 lg:p-6 shadow-2xl">
            <div className="flex h-[420px] sm:h-[480px] lg:h-[520px] rounded-xl overflow-hidden bg-ap-indigo">

              {/* ---- Sidebar ---- */}
              <div className="hidden sm:flex w-16 lg:w-20 flex-shrink-0 flex-col items-center gap-1 bg-[#160e30] py-4">
                {/* Logo mark */}
                <div className="mb-4 flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-lg bg-ap-violet font-bold text-white text-xs">
                  S
                </div>
                {sidebarNav.map((item) => {
                  const { Icon, active } = item;
                  return (
                    <button
                      key={item.label}
                      title={item.label}
                      className={`flex h-10 w-10 lg:h-11 lg:w-11 items-center justify-center rounded-lg transition-colors ${
                        active
                          ? 'bg-ap-violet/20 text-ap-violet'
                          : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                    </button>
                  );
                })}
              </div>

              {/* ---- Main Area ---- */}
              <div className="flex flex-1 flex-col overflow-hidden">

                {/* Top Bar */}
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5">
                    <Search className="h-3.5 w-3.5 text-white/50" />
                    <span className="text-xs text-white/40">Search compliance…</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Bell className="h-4 w-4 text-white/60" />
                      <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                        3
                      </span>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-ap-violet/40 flex items-center justify-center text-[10px] font-semibold text-white">
                      AP
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">

                  {/* Metric Cards Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    {metrics.map((m) => (
                      <div
                        key={m.label}
                        className={`rounded-xl ${m.color} p-3 sm:p-4`}
                      >
                        <p className="text-[10px] sm:text-xs font-medium opacity-80">
                          {m.label}
                        </p>
                        <p className="mt-1 text-lg sm:text-2xl font-bold">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Calendar + Donut Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">

                    {/* Calendar Preview */}
                    <div className="lg:col-span-3 rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-white/90">
                          Compliance Calendar
                        </span>
                        <span className="text-[10px] sm:text-xs text-white/50">
                          January 2025
                        </span>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {dayLabels.map((d) => (
                          <div
                            key={d}
                            className="text-center text-[9px] sm:text-[10px] font-medium text-white/40 pb-1"
                          >
                            {d}
                          </div>
                        ))}
                        {calendarDays.flat().map((day, i) => (
                          <div
                            key={i}
                            className={`flex h-6 sm:h-7 items-center justify-center rounded text-[10px] sm:text-xs ${
                              day
                                ? highlightedDays.includes(day)
                                  ? 'bg-ap-violet text-white font-semibold'
                                  : 'text-white/60'
                                : ''
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-[9px] sm:text-[10px] text-white/50">
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-sm bg-ap-violet" /> Filing Deadline
                        </span>
                      </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="lg:col-span-2 rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 flex flex-col items-center justify-center">
                      <span className="text-xs sm:text-sm font-semibold text-white/90 mb-3">
                        Compliance Health
                      </span>
                      <div
                        className="relative h-24 w-24 sm:h-28 sm:w-28"
                        style={{
                          background:
                            'conic-gradient(#7C3AED 0deg 270deg, rgba(255,255,255,0.1) 270deg 360deg)',
                          borderRadius: '50%',
                        }}
                      >
                        <div className="absolute inset-2 rounded-full bg-[#1a1035] flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-bold text-white">
                            75<span className="text-xs text-white/60">%</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-4 text-[9px] sm:text-[10px] text-white/50">
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-sm bg-ap-violet" /> Compliant
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-sm bg-white/10" /> Pending
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4">
                    <span className="text-xs sm:text-sm font-semibold text-white/90">
                      Recent Activity
                    </span>
                    <div className="mt-2 space-y-2">
                      {activities.map((a, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"
                        >
                          {a.status === 'success' ? (
                            <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                          ) : (
                            <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
                          )}
                          <span className="flex-1 text-[11px] sm:text-xs text-white/70 truncate">
                            {a.label}
                          </span>
                          <span className="flex-shrink-0 text-[10px] text-white/40">
                            {a.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Floating Badges ---- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -left-2 sm:-left-6 top-1/4 hidden md:flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg border border-gray-100"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ap-violet/10">
              <Bell className="h-3 w-3 text-ap-violet" />
            </span>
            <span className="text-xs font-semibold text-ap-purple">Real-time Alerts</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -right-2 sm:-right-6 top-1/3 hidden md:flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg border border-gray-100"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ap-violet/10">
              <CalendarDays className="h-3 w-3 text-ap-violet" />
            </span>
            <span className="text-xs font-semibold text-ap-purple">Auto Reminders</span>
          </motion.div>
        </motion.div>

        {/* ---------- Feature Cards Grid ---------- */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, index) => {
            const { Icon } = feature;
            return (
              <ScrollReveal key={feature.title} delay={index * 0.08}>
                <div className="group rounded-xl bg-white p-5 transition-shadow duration-300 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ap-lavender text-ap-violet">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-semibold text-ap-purple text-sm sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
