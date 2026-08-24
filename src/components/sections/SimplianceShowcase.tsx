'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Search, 
  Bell, 
  ChevronDown, 
  LayoutDashboard, 
  ShieldAlert, 
  Calendar, 
  Users, 
  FileText, 
  ClipboardCheck, 
  Settings, 
  Folder, 
  Briefcase 
} from 'lucide-react';
import { platformFeatures, dashboardStats } from '@/data';

/* ------------------------------------------------------------------ */
/*  Dashboard sidebar items                                           */
/* ------------------------------------------------------------------ */
const sidebarItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Compliance', icon: ShieldAlert, active: false },
  { label: 'Calendar', icon: Calendar, active: false },
  { label: 'Vendors', icon: Users, active: false },
  { label: 'Contracts', icon: Briefcase, active: false },
  { label: 'Workforce', icon: Users, active: false },
  { label: 'Documents', icon: Folder, active: false },
  { label: 'Audits', icon: ClipboardCheck, active: false },
  { label: 'Reports', icon: FileText, active: false },
  { label: 'Alerts', icon: Bell, active: false },
  { label: 'Settings', icon: Settings, active: false },
];

/* ------------------------------------------------------------------ */
/*  Calendar Day Grid Mockup                                           */
/* ------------------------------------------------------------------ */
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const calendarGridDays = [
  { day: 1, status: null },
  { day: 2, status: null },
  { day: 3, status: null },
  { day: 4, status: null },
  { day: 5, status: 'warning' },
  { day: 6, status: null },
  { day: 7, status: null },
  { day: 8, status: null },
  { day: 9, status: 'urgent' },
  { day: 10, status: null },
  { day: 11, status: null },
  { day: 12, status: 'success' },
  { day: 13, status: 'urgent' },
  { day: 14, status: null },
  { day: 15, status: 'tooltip' }, // Tooltip day
  { day: 16, status: null },
  { day: 17, status: null },
  { day: 18, status: 'warning' },
  { day: 19, status: null },
  { day: 20, status: null },
  { day: 21, status: null },
  { day: 22, status: null },
  { day: 23, status: null },
  { day: 24, status: 'warning' },
  { day: 25, status: 'urgent' },
  { day: 26, status: null },
  { day: 27, status: null },
  { day: 28, status: null },
];

export function SimplianceShowcase() {
  return (
    <section id="platform" className="bg-gradient-to-br from-[#F5F2FF] via-[#FAF8FF] to-[#F3EFFF] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Container */}
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left Column: Platform Overview & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Top Subtitle */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7C3AED]">
              Powered by Technology. Driven by Expertise.
            </p>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black leading-[1.18] tracking-tight text-slate-900">
              Simpliance — Your All-in-One Compliance Management Platform
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Experience the power of automation, real-time alerts and centralized compliance management.
            </p>

            {/* Checklist items */}
            <ul className="space-y-3.5 pt-2">
              {platformFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-sm">
                    <CheckCircle2 className="size-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Platform</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#tour"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-purple-300 bg-white hover:bg-purple-50 px-6 py-3 text-sm font-semibold text-[#7C3AED] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Watch Platform Tour</span>
                <span className="flex size-6 items-center justify-center rounded-full border border-purple-300 text-[#7C3AED]">
                  <Play className="size-3 fill-current translate-x-[1px]" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Platform Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            {/* Main Outer Mockup Card */}
            <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-2xl shadow-purple-900/10">
              
              <div className="flex min-h-[500px] sm:min-h-[540px]">
                
                {/* Dark Left Sidebar */}
                <div className="hidden sm:flex w-44 flex-shrink-0 flex-col bg-[#120B2E] p-3 text-white">
                  {/* App Brand Logo */}
                  <div className="mb-5 px-3 pt-2">
                    <span className="text-lg font-black tracking-tight text-white">
                      Simpliance
                    </span>
                  </div>

                  {/* Nav List */}
                  <nav className="space-y-1 flex-1">
                    {sidebarItems.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                            item.active
                              ? 'bg-[#7C3AED] text-white shadow-md'
                              : 'text-purple-200/60 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <IconComp className="size-4 shrink-0" />
                          <span>{item.label}</span>
                        </div>
                      );
                    })}
                  </nav>
                </div>

                {/* Main White Content Workspace */}
                <div className="flex flex-1 flex-col bg-slate-50/60 overflow-hidden">
                  
                  {/* Top Dashboard Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 sm:px-6 py-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Dashboard</h3>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <span>Overview</span>
                        <span>›</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex items-center gap-1 text-slate-400 hover:text-slate-600 cursor-pointer">
                        <Search className="size-4" />
                      </div>
                      <div className="relative cursor-pointer">
                        <Bell className="size-4 text-slate-500" />
                        <span className="absolute -top-1 -right-1 size-2 rounded-full bg-red-500" />
                      </div>
                      
                      {/* User Profile */}
                      <div className="flex items-center gap-2 pl-2 border-l border-slate-100">
                        <div className="size-7 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-xs font-bold text-purple-900">
                          A
                        </div>
                        <span className="hidden sm:inline text-xs font-bold text-slate-700">
                          Aparajitha Admin
                        </span>
                        <ChevronDown className="size-3 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Workspace Body */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    
                    {/* Top 4 Metric Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {dashboardStats.map((stat, idx) => (
                        <div
                          key={idx}
                          className={`rounded-xl border border-slate-100 bg-white p-3 shadow-sm border-l-4 ${stat.borderColor}`}
                        >
                          <p className="text-[10px] font-medium text-slate-400 truncate">
                            {stat.title}
                          </p>
                          <p className={`mt-0.5 text-xl font-extrabold ${stat.valueColor}`}>
                            {stat.value}
                          </p>
                          <p className="mt-0.5 text-[9px] text-slate-400 truncate">
                            {stat.subtext}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Middle Section: Calendar & Health Donut */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                      
                      {/* Compliance Calendar Widget */}
                      <div className="lg:col-span-7 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-900">
                            Compliance Calendar
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400">
                            May 2025 ‹ ›
                          </span>
                        </div>

                        {/* Calendar Header Days */}
                        <div className="grid grid-cols-7 gap-1 text-center mb-1">
                          {dayNames.map((d) => (
                            <span key={d} className="text-[9px] font-bold text-slate-400">
                              {d}
                            </span>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center relative">
                          {calendarGridDays.map((item, idx) => (
                            <div
                              key={idx}
                              className={`h-6 sm:h-7 rounded flex items-center justify-center text-[10px] font-medium relative ${
                                item.status === 'tooltip'
                                  ? 'bg-purple-600 text-white font-bold'
                                  : 'text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              {item.day}
                              {item.status === 'urgent' && (
                                <span className="absolute bottom-0.5 size-1 rounded-full bg-red-500" />
                              )}
                              {item.status === 'warning' && (
                                <span className="absolute bottom-0.5 size-1 rounded-full bg-amber-500" />
                              )}
                              {item.status === 'success' && (
                                <span className="absolute bottom-0.5 size-1 rounded-full bg-emerald-500" />
                              )}
                            </div>
                          ))}

                          {/* Floating Calendar Tooltip Card matching image */}
                          <div className="absolute left-1/3 top-1/2 z-20 rounded-lg bg-[#110A29] p-2 text-white shadow-xl text-[10px] text-left pointer-events-none min-w-[130px]">
                            <p className="font-bold text-purple-200">ESI Return</p>
                            <p className="text-[9px] text-purple-300/80">Due on 15 May 2025</p>
                          </div>
                        </div>
                      </div>

                      {/* Compliance Status Donut Widget */}
                      <div className="lg:col-span-5 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm flex flex-col justify-between">
                        <span className="text-xs font-bold text-slate-900 mb-2">
                          Compliance Status
                        </span>
                        
                        <div className="flex items-center justify-center py-2">
                          {/* Circular Progress Ring */}
                          <div 
                            className="relative size-24 rounded-full flex items-center justify-center"
                            style={{
                              background: 'conic-gradient(#10B981 0deg 270deg, #3B82F6 270deg 320deg, #EF4444 320deg 360deg)',
                            }}
                          >
                            <div className="size-16 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                              <span className="text-base font-black text-slate-900">75%</span>
                              <span className="text-[8px] font-bold text-slate-400">Compliant</span>
                            </div>
                          </div>
                        </div>

                        {/* Legend */}
                        <div className="grid grid-cols-3 gap-1 text-[9px] text-slate-500 pt-1 border-t border-slate-100">
                          <span className="flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-emerald-500" /> Compliant
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-blue-500" /> Progress
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-red-500" /> Overdue
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Location Compliance Bar Widget */}
                    <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
                      <span className="text-xs font-bold text-slate-900 mb-2 block">
                        Top Locations by Compliance
                      </span>
                      <div className="space-y-2 text-[10px]">
                        <div>
                          <div className="flex justify-between text-slate-600 font-semibold mb-1">
                            <span>Chennai</span>
                            <span>92%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full w-[92%] bg-blue-500 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-slate-600 font-semibold mb-1">
                            <span>Pune</span>
                            <span>85%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full w-[85%] bg-purple-500 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

