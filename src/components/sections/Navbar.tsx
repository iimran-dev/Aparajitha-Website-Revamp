'use client';

import { useState, useEffect } from 'react';
import { Menu, ArrowRight, ShieldCheck } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navItems } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-[0_4px_25px_rgba(17,10,41,0.08)] py-3'
          : 'bg-[#0B041C]/80 backdrop-blur-md border-b border-white/10 py-4'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className={cn(
            'flex size-8 items-center justify-center rounded-lg shadow-sm transition-colors',
            scrolled ? 'bg-[#7C3AED] text-white' : 'bg-white/10 text-white border border-white/20'
          )}>
            <ShieldCheck className="size-5" />
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className={cn(
                'text-xl font-extrabold tracking-tight transition-colors duration-300',
                scrolled ? 'text-[#1E0B4B]' : 'text-white'
              )}
            >
              Aparajitha
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-400/20 px-2 py-0.5 text-[11px] font-black text-amber-400 ring-1 ring-amber-400/40">
              25 Years
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200',
                scrolled
                  ? 'text-slate-700 hover:bg-purple-50 hover:text-[#7C3AED]'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Request a Demo</span>
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Mobile Hamburger Drawer Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  'flex size-10 items-center justify-center rounded-xl border transition-colors',
                  scrolled
                    ? 'border-purple-200 text-[#1E0B4B] hover:bg-purple-50'
                    : 'border-white/20 text-white hover:bg-white/10'
                )}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-80 p-0 bg-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-[#1E0B4B]">
                      Aparajitha
                    </span>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                      25 Years
                    </span>
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-purple-50 hover:text-[#7C3AED]"
                    >
                      {item.label}
                      <ArrowRight className="size-4 text-slate-400" />
                    </a>
                  ))}
                </div>

                {/* Mobile Drawer Bottom CTA */}
                <div className="border-t border-slate-100 p-6 bg-slate-50/50">
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/20"
                  >
                    <span>Request a Demo</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
}
