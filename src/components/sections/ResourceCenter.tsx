'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Download, Play } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const categories = ['All', 'Guides', 'Checklists', 'Webinars', 'Whitepapers', 'Reports'] as const;

type Category = (typeof categories)[number];

interface Resource {
  id: string;
  category: Category;
  title: string;
  description: string;
  badge: string;
  date: string;
  readTime: string;
}

const resources: Resource[] = [
  {
    id: '1',
    category: 'Guides',
    title: 'Complete Guide to Labour Law Compliance 2025',
    description: 'Comprehensive 40-page guide covering all major labour law requirements.',
    badge: 'PDF Guide',
    date: 'Jan 2025',
    readTime: '40 min read',
  },
  {
    id: '2',
    category: 'Checklists',
    title: 'Factory Compliance Audit Checklist',
    description: 'Step-by-step checklist for factory audit preparation and compliance verification.',
    badge: 'Checklist',
    date: 'Feb 2025',
    readTime: '15 min read',
  },
  {
    id: '3',
    category: 'Webinars',
    title: 'Navigating Labour Code Changes',
    description: 'Expert panel discussion on the latest labour code amendments and their impact.',
    badge: 'Webinar',
    date: 'Mar 2025',
    readTime: '45 min',
  },
  {
    id: '4',
    category: 'Whitepapers',
    title: 'The State of Enterprise Compliance in India',
    description: 'Research-backed analysis of compliance trends, challenges, and technology adoption.',
    badge: 'Whitepaper',
    date: 'Apr 2025',
    readTime: '25 min read',
  },
  {
    id: '5',
    category: 'Reports',
    title: 'Compliance Penalty Analysis Q1 2025',
    description: 'Data-driven report on compliance penalties across Indian states and industries.',
    badge: 'Report',
    date: 'May 2025',
    readTime: '20 min read',
  },
  {
    id: '6',
    category: 'Guides',
    title: 'Vendor Compliance Management Framework',
    description: 'Best practices framework for managing multi-vendor compliance requirements.',
    badge: 'PDF Guide',
    date: 'Jun 2025',
    readTime: '30 min read',
  },
];

const badgeColors: Record<Category, string> = {
  Guides: 'bg-ap-purple text-white',
  Checklists: 'bg-green-600 text-white',
  Webinars: 'bg-ap-violet text-white',
  Whitepapers: 'bg-ap-indigo text-white',
  Reports: 'bg-amber-600 text-white',
  All: 'bg-gray-100 text-gray-600',
};

export function ResourceCenter() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredResources = resources.filter(
    (r) => activeCategory === 'All' || r.category === activeCategory
  );

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Knowledge Center"
          title="Resources for Compliance Leaders"
          description="Guides, reports, and tools to strengthen your compliance strategy."
        />

        {/* Category Filter Tabs */}
        <ScrollReveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-ap-purple text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Resource Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="group rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${
                      badgeColors[resource.category]
                    }`}
                  >
                    {resource.category === 'Webinars' && (
                      <Play className="mr-1 inline-block h-3 w-3" fill="currentColor" />
                    )}
                    {resource.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-base font-semibold text-ap-purple leading-snug">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {resource.description}
                </p>

                {/* Bottom meta row */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{resource.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {resource.readTime}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-1 text-xs font-semibold text-ap-purple transition-colors hover:text-ap-violet">
                    {resource.category === 'Webinars' ? 'Watch' : 'Download'}
                    {resource.category === 'Webinars' ? (
                      <Play className="h-3 w-3" />
                    ) : (
                      <Download className="h-3 w-3" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {filteredResources.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No resources found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
