'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Building2, Headphones, Phone, Mail } from 'lucide-react';

const trustIndicators = [
  { icon: ShieldCheck, label: 'ISO 27001 Certified' },
  { icon: Award, label: '25+ Years Experience' },
  { icon: Building2, label: '58,000+ Clients' },
  { icon: Headphones, label: '24/7 Support' },
];

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-ap-purple to-ap-indigo py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Ready To Simplify Compliance Across Your Organization?
          </h2>

          {/* Description */}
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Join 58,000+ establishments that trust Aparajitha for enterprise compliance management. Get
            started with a free consultation or explore our platform.
          </p>

          {/* 3 CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-ap-gold text-ap-purple font-semibold rounded-xl px-8 py-4 hover:bg-ap-gold-light transition-colors duration-200 text-center">
              Request Demo
            </button>
            <button className="w-full sm:w-auto bg-white text-ap-purple font-semibold rounded-xl px-8 py-4 hover:bg-white/90 transition-colors duration-200 text-center">
              Book Consultation
            </button>
            <button className="w-full sm:w-auto border-2 border-white/30 text-white font-semibold rounded-xl px-8 py-4 hover:bg-white/10 transition-colors duration-200 text-center">
              Free Assessment
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {trustIndicators.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-5 w-5 text-white/60" />
                <span className="text-sm text-white/60">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-white/50"
          >
            <a
              href="tel:1800XXXXXXX"
              className="flex items-center gap-2 hover:text-white/70 transition-colors"
            >
              <Phone className="h-4 w-4" />
              1800-XXX-XXXX
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="mailto:contact@aparajitha.com"
              className="flex items-center gap-2 hover:text-white/70 transition-colors"
            >
              <Mail className="h-4 w-4" />
              contact@aparajitha.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
