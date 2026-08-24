'use client';

import { Linkedin, Youtube, Twitter, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const services = [
  'Labour Compliance',
  'Vendor Compliance',
  'Factory Compliance',
  'Payroll Compliance',
  'Audit Management',
];

const industries = [
  'Manufacturing',
  'Retail',
  'Logistics',
  'BFSI',
  'Healthcare',
  'Real Estate',
  'IT & ITES',
];

const resourceLinks = [
  'Intelligence Hub',
  'Guides',
  'Webinars',
  'Whitepapers',
  'Reports',
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
];

const footerLinks = [
  'Privacy Policy',
  'Terms & Conditions',
  'Sitemap',
];

export function Footer() {
  return (
    <footer className="bg-[#0A0618] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main 5-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Company column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Aparajitha</span>
              <span className="inline-flex items-center justify-center rounded-full bg-ap-gold text-ap-purple text-xs font-bold w-6 h-6">
                25
              </span>
            </div>
            <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-xs">
              India&apos;s Digital Compliance Authority Platform. Technology-powered compliance
              management trusted by enterprises nationwide.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <social.icon className="h-4 w-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-white transition-colors py-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-1">
              {industries.map((industry) => (
                <li key={industry}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-white transition-colors py-1 inline-block"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-1">
              {resourceLinks.map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-white transition-colors py-1 inline-block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:1800XXXXXXX"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  1800-XXX-XXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@aparajitha.com"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  contact@aparajitha.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Chennai | Bengaluru | Mumbai | Delhi | Hyderabad | Pune</span>
                </div>
              </li>
            </ul>
            <button className="mt-4 border border-white/20 rounded-lg px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              &copy; 2025 Aparajitha Corporate Services Pvt Ltd
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {footerLinks.map((link, i) => (
                <span key={link} className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                  {i < footerLinks.length - 1 && <span className="text-white/20">|</span>}
                </span>
              ))}
            </div>
            <span className="inline-block text-xs bg-white/10 px-3 py-1 rounded-full text-white/60">
              ISO 27001:2022 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
