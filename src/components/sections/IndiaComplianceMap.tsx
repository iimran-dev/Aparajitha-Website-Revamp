'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { MapPin, Clock, Building2, FileCheck } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  left: string;
  top: string;
  color: 'violet' | 'gold';
  badge?: string;
  delay: number;
}

interface Connection {
  from: string;
  to: string;
}

const hotspots: Hotspot[] = [
  { id: 'delhi', name: 'Delhi', left: '52%', top: '18%', color: 'violet', badge: '850+ Clients', delay: 0.1 },
  { id: 'mumbai', name: 'Mumbai', left: '32%', top: '42%', color: 'gold', badge: '2,400+ Filings', delay: 0.15 },
  { id: 'bengaluru', name: 'Bengaluru', left: '42%', top: '70%', color: 'violet', badge: '1,200+ Audits', delay: 0.2 },
  { id: 'chennai', name: 'Chennai', left: '50%', top: '72%', color: 'violet', delay: 0.25 },
  { id: 'hyderabad', name: 'Hyderabad', left: '40%', top: '60%', color: 'gold', delay: 0.3 },
  { id: 'pune', name: 'Pune', left: '35%', top: '46%', color: 'violet', delay: 0.35 },
  { id: 'kolkata', name: 'Kolkata', left: '65%', top: '42%', color: 'gold', delay: 0.4 },
  { id: 'ahmedabad', name: 'Ahmedabad', left: '30%', top: '34%', color: 'violet', delay: 0.45 },
  { id: 'jaipur', name: 'Jaipur', left: '42%', top: '28%', color: 'gold', delay: 0.5 },
  { id: 'kochi', name: 'Kochi', left: '37%', top: '80%', color: 'violet', delay: 0.55 },
  { id: 'lucknow', name: 'Lucknow', left: '57%', top: '30%', color: 'gold', delay: 0.6 },
  { id: 'guwahati', name: 'Guwahati', left: '72%', top: '36%', color: 'violet', delay: 0.65 },
  { id: 'indore', name: 'Indore', left: '38%', top: '46%', color: 'gold', delay: 0.7 },
  { id: 'chandigarh', name: 'Chandigarh', left: '48%', top: '16%', color: 'violet', delay: 0.75 },
];

const connections: Connection[] = [
  { from: 'delhi', to: 'jaipur' },
  { from: 'delhi', to: 'lucknow' },
  { from: 'delhi', to: 'chandigarh' },
  { from: 'mumbai', to: 'pune' },
  { from: 'mumbai', to: 'ahmedabad' },
  { from: 'pune', to: 'hyderabad' },
  { from: 'hyderabad', to: 'bengaluru' },
  { from: 'hyderabad', to: 'chennai' },
  { from: 'kolkata', to: 'guwahati' },
  { from: 'bengaluru', to: 'chennai' },
  { from: 'bengaluru', to: 'kochi' },
];

const statCards = [
  { value: '25+', label: 'States', sublabel: 'Active Compliance Operations', icon: MapPin },
  { value: '58,209+', label: 'Establishments', sublabel: 'Establishments Managed', icon: Building2 },
  { value: '4M+', label: 'Transactions', sublabel: 'Annual Compliance Transactions', icon: FileCheck },
  { value: '24/7', label: 'Monitoring', sublabel: 'Monitoring & Support', icon: Clock },
];

export default function IndiaComplianceMap() {
  const getHotspotPos = (id: string) => {
    const h = hotspots.find((hotspot) => hotspot.id === id);
    if (!h) return { x1: 0, y1: 0, x2: 0, y2: 0 };
    const x1 = parseFloat(h.left) / 100;
    const y1 = parseFloat(h.top) / 100;
    return { x1, y1 };
  };

  return (
    <section className="relative bg-ap-indigo overflow-hidden py-20 lg:py-28">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ap-violet/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ap-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nationwide Compliance Coverage"
          title="Where Compliance Meets Impact"
          description="Pulsating compliance activity across 25+ states, covering every major industrial corridor in India."
          light={true}
        />

        {/* Desktop: Map + Stats side by side */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-5 gap-12 items-start">
          {/* Map Area - 3 cols */}
          <div className="col-span-3 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg mx-auto"
              style={{ aspectRatio: '4 / 5' }}
            >
              {/* SVG India Outline */}
              <svg
                viewBox="0 0 200 250"
                className="absolute inset-0 w-full h-full opacity-20"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M100,10 L120,20 L130,40 L125,60 L135,80 L140,100 L130,120 L140,140 L135,160 L120,180 L100,200 L80,210 L70,230 L60,240 L50,230 L55,210 L65,190 L70,170 L60,150 L55,130 L60,110 L50,90 L55,70 L60,50 L70,30 L80,15 Z"
                  fill="none"
                  stroke="rgba(124,58,237,0.3)"
                  strokeWidth="1"
                />
              </svg>

              {/* Connection Lines */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                {connections.map((conn, i) => {
                  const from = getHotspotPos(conn.from);
                  const to = getHotspotPos(conn.to);
                  return (
                    <motion.line
                      key={i}
                      x1={from.x1 * 100}
                      y1={from.y1 * 100}
                      x2={to.x1 * 100}
                      y2={to.y1 * 100}
                      stroke="rgba(124,58,237,0.2)"
                      strokeWidth="0.15"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.05 }}
                    />
                  );
                })}
              </svg>

              {/* Hotspot Dots */}
              {hotspots.map((hotspot) => (
                <motion.div
                  key={hotspot.id}
                  className="absolute z-10"
                  style={{ left: hotspot.left, top: hotspot.top }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: hotspot.delay,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  {/* Pulse ring */}
                  <div
                    className={`absolute -inset-2 rounded-full animate-pulse-glow ${
                      hotspot.color === 'violet' ? 'bg-ap-violet/30' : 'bg-ap-gold/30'
                    }`}
                  />
                  {/* Dot */}
                  <div
                    className={`relative w-3 h-3 rounded-full shadow-lg ${
                      hotspot.color === 'violet'
                        ? 'bg-ap-violet shadow-ap-violet/50'
                        : 'bg-ap-gold shadow-ap-gold/50'
                    }`}
                  />
                  {/* Label */}
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-medium text-white/60">
                    {hotspot.name}
                  </span>

                  {/* Floating Badge */}
                  {hotspot.badge && (
                    <motion.div
                      className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        hotspot.color === 'violet'
                          ? 'bg-ap-violet/20 text-ap-violet border border-ap-violet/30'
                          : 'bg-ap-gold/20 text-ap-gold border border-ap-gold/30'
                      }`}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: hotspot.delay + 0.2 }}
                    >
                      {hotspot.badge}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stat Cards - 2 cols */}
          <div className="col-span-2 space-y-4">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card rounded-xl p-5 group hover:bg-white/12 transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-ap-violet/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ap-violet" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm font-semibold text-white/80 mt-0.5">{stat.label}</p>
                      <p className="text-xs text-white/50 mt-1">{stat.sublabel}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Simplified state list */}
        <div className="mt-12 lg:hidden space-y-8">
          {/* Compact map dots display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-xs mx-auto"
            style={{ aspectRatio: '4 / 5' }}
          >
            <svg
              viewBox="0 0 200 250"
              className="absolute inset-0 w-full h-full opacity-20"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M100,10 L120,20 L130,40 L125,60 L135,80 L140,100 L130,120 L140,140 L135,160 L120,180 L100,200 L80,210 L70,230 L60,240 L50,230 L55,210 L65,190 L70,170 L60,150 L55,130 L60,110 L50,90 L55,70 L60,50 L70,30 L80,15 Z"
                fill="none"
                stroke="rgba(124,58,237,0.3)"
                strokeWidth="1"
              />
            </svg>
            {hotspots.map((hotspot) => (
              <motion.div
                key={hotspot.id}
                className="absolute z-10"
                style={{ left: hotspot.left, top: hotspot.top }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: hotspot.delay,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <div
                  className={`absolute -inset-2 rounded-full animate-pulse-glow ${
                    hotspot.color === 'violet' ? 'bg-ap-violet/30' : 'bg-ap-gold/30'
                  }`}
                />
                <div
                  className={`relative w-2.5 h-2.5 rounded-full ${
                    hotspot.color === 'violet' ? 'bg-ap-violet' : 'bg-ap-gold'
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Stat cards in 2x2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                >
                  <Icon className="w-5 h-5 text-ap-violet mb-2" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-0.5">{stat.sublabel}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
