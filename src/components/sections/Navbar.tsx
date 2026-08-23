'use client';

import { useState, useEffect } from 'react';
import { Menu, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  'Solutions',
  'Industries',
  'Simpliance',
  'Compliance Intelligence',
  'Resources',
  'About',
];

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
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(45,27,105,0.08)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5">
          <span
            className={cn(
              'text-xl font-bold tracking-tight transition-colors duration-300',
              scrolled ? 'text-ap-purple' : 'text-ap-purple'
            )}
          >
            Aparajitha
          </span>
          <span className="inline-flex items-center rounded-full bg-ap-gold/15 px-2.5 py-1 text-xs font-bold text-ap-gold ring-1 ring-ap-gold/30">
            25
          </span>
          <span className="hidden sm:inline text-xs text-ap-gold/70 font-medium">Years</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                'group flex items-center gap-0.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                scrolled
                  ? 'text-gray-700 hover:bg-ap-lavender hover:text-ap-purple'
                  : 'text-ap-indigo/80 hover:bg-white/60 hover:text-ap-purple'
              )}
            >
              {item}
              <ChevronRight className="size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button className="bg-ap-purple text-white rounded-full px-6 hover:bg-ap-indigo transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-ap-purple/20">
            Request a Demo
            <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
                  scrolled
                    ? 'text-ap-purple hover:bg-ap-lavender'
                    : 'text-ap-indigo hover:bg-white/60'
                )}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-2.5 border-b border-gray-100 px-5 py-4">
                  <span className="text-xl font-bold text-ap-purple tracking-tight">
                    Aparajitha
                  </span>
                  <span className="inline-flex items-center rounded-full bg-ap-gold/15 px-2.5 py-1 text-xs font-bold text-ap-gold ring-1 ring-ap-gold/30">
                    25
                  </span>
                </div>

                {/* Mobile Nav Items */}
                <div className="flex-1 overflow-y-auto py-3">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:bg-ap-lavender hover:text-ap-purple"
                    >
                      {item}
                      <ChevronRight className="size-4 text-gray-400" />
                    </a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="border-t border-gray-100 p-5">
                  <Button className="w-full bg-ap-purple text-white rounded-full py-3 hover:bg-ap-indigo transition-all duration-200">
                    Request a Demo
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
