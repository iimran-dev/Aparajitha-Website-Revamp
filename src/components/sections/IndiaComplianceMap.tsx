'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import IndiaMap from '@react-map/india';
import { SectionHeading } from '@/components/shared/section-heading';
import { MapPin, Clock, Building2, FileCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { stateDetails } from '@/data';

// Map state highlights with brand colors
const activeCityColors: Record<string, string> = {
  'Tamil Nadu': '#7C3AED',
  Maharashtra: '#7C3AED',
  Karnataka: '#7C3AED',
  Telangana: '#6D28D9',
  Gujarat: '#6D28D9',
  Delhi: '#F59E0B',
  'West Bengal': '#6D28D9',
  Haryana: '#5B21B6',
  'Uttar Pradesh': '#5B21B6',
  Rajasthan: '#5B21B6',
  Kerala: '#7C3AED',
  'Madhya Pradesh': '#4C1D95',
  Punjab: '#4C1D95',
  'Andhra Pradesh': '#6D28D9',
  Odisha: '#4C1D95',
};

const statCards = [
  { value: '25+', label: 'States Covered', sublabel: 'Active Compliance Operations', icon: MapPin },
  { value: '58,209+', label: 'Establishments', sublabel: 'Across Pan-India Network', icon: Building2 },
  { value: '4M+', label: 'Statutory Filings', sublabel: 'Annual Compliance Transactions', icon: FileCheck },
  { value: '24/7', label: 'Real-time Tracking', sublabel: 'Monitoring & Regulatory Support', icon: Clock },
];

export default function IndiaComplianceMap() {
  const [selectedState, setSelectedState] = useState<string>('Tamil Nadu');

  const activeDetail = stateDetails[selectedState] || {
    name: selectedState || 'Pan-India Operational Region',
    establishments: '3,500+',
    filings: '250K+',
    status: 'Active State Operations',
    hub: 'Regional Service Desk',
  };

  return (
    <section id="coverage" className="relative overflow-hidden bg-gradient-to-b from-[#0B041C] via-[#140833] to-[#1E0B4B] py-20 lg:py-28 text-white">
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 size-[450px] rounded-full bg-amber-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nationwide Compliance Coverage"
          title="Where Compliance Meets Impact Across India"
          description="Click or hover over any state to inspect localized compliance operations, filings, and regional hubs."
          light={true}
        />

        {/* Interactive Map + Detail Panel Container */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          
          {/* Left / Center Column: @react-map/india Interactive SVG Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center justify-center relative p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl"
          >
            {/* Map Header Instructions */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 text-xs text-purple-200/80">
              <span className="flex items-center gap-2 font-semibold">
                <span className="size-2 rounded-full bg-amber-400 animate-ping" />
                Interactive Pan-India Compliance Map
              </span>
              <span className="text-purple-300/60 hidden sm:inline">
                Click any state to view details
              </span>
            </div>

            {/* React Map India SVG Component */}
            <div className="relative my-4 flex justify-center w-full max-w-[460px] overflow-hidden">
              <IndiaMap
                type="select-single"
                size={420}
                mapColor="#1F1345"
                strokeColor="#7C3AED"
                strokeWidth={1}
                hoverColor="#9333EA"
                selectColor="#F59E0B"
                hints={true}
                hintTextColor="#FFFFFF"
                hintBackgroundColor="#110A29"
                hintPadding="6px 12px"
                hintBorderRadius={8}
                cityColors={activeCityColors}
                onSelect={(stateName) => {
                  if (stateName) setSelectedState(stateName);
                }}
              />
            </div>

            {/* Color Legend Bar */}
            <div className="w-full flex flex-wrap items-center justify-center gap-4 pt-3 border-t border-white/10 text-[11px] text-purple-200/70">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#F59E0B]" /> Selected State
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#7C3AED]" /> High Density Hubs
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#5B21B6]" /> Regional Operations
              </span>
            </div>
          </motion.div>

          {/* Right Column: Selected State Info & Pan-India Metrics */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Selected State Detail Card */}
            <motion.div
              key={activeDetail.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/80 via-[#190D42] to-[#120733] p-6 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <MapPin className="size-24 text-amber-400" />
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Selected Operational State
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-0.5">
                    {activeDetail.name}
                  </h3>
                </div>
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300 border border-purple-400/30">
                  {activeDetail.hub}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <p className="text-xs text-purple-200/70 font-medium">Establishments</p>
                  <p className="text-xl font-black text-white mt-1">{activeDetail.establishments}</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <p className="text-xs text-purple-200/70 font-medium">Annual Filings</p>
                  <p className="text-xl font-black text-amber-400 mt-1">{activeDetail.filings}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-purple-200/80 pt-1">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Status: {activeDetail.status}</span>
              </div>
            </motion.div>

            {/* 4 Pan-India Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {statCards.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-purple-400/40 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300 ring-1 ring-purple-400/30">
                        <IconComponent className="size-4" />
                      </div>
                      <div>
                        <p className="text-lg font-black text-white leading-none">{stat.value}</p>
                        <p className="text-xs font-semibold text-purple-200 mt-1">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

