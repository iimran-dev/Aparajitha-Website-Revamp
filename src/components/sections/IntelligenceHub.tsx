'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const categories = ['All', 'Labour Law', 'Factory Act', 'Payroll', 'EHS', 'Regulatory Updates'] as const;

type Category = (typeof categories)[number];

interface Article {
  id: string;
  category: Category;
  title: string;
  author: string;
  date: string;
  readTime: string;
  description: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: '1',
    category: 'Labour Law',
    title: 'Key Changes in the Code on Wages 2019: What Enterprises Need to Know',
    author: 'Dr. Priya Sharma',
    date: 'May 2025',
    readTime: '8 min read',
    description:
      'A comprehensive analysis of the latest amendments to the Code on Wages 2019, including implications for payroll restructuring, minimum wage compliance, and the new statutory filing requirements effective from the current financial year.',
    featured: true,
  },
  {
    id: '2',
    category: 'Payroll',
    title: 'EPFO Compliance Checklist for FY 2025-26',
    author: 'Rajesh Nair',
    date: 'Apr 2025',
    readTime: '5 min read',
    description: 'Essential EPFO compliance requirements and deadlines for the upcoming financial year, covering contribution rates, filing schedules, and common pitfalls.',
  },
  {
    id: '3',
    category: 'Factory Act',
    title: 'How to Prepare for a Labour Department Audit',
    author: 'Anita Desai',
    date: 'Mar 2025',
    readTime: '6 min read',
    description: 'Step-by-step guide to preparing your organization for a labour department audit, including document readiness and inspection protocols.',
  },
  {
    id: '4',
    category: 'Regulatory Updates',
    title: 'Factories Act Compliance: Employer Essentials',
    author: 'Vikram Rao',
    date: 'Feb 2025',
    readTime: '7 min read',
    description: 'Critical compliance requirements under the Factories Act that every employer must understand and implement for operational safety.',
  },
  {
    id: '5',
    category: 'Labour Law',
    title: 'Vendor Compliance Framework for 2025',
    author: 'Meera Krishnan',
    date: 'Jan 2025',
    readTime: '4 min read',
    description: 'Building a robust vendor compliance framework to manage third-party risk and ensure statutory adherence across your supply chain.',
  },
];

const categoryColors: Record<string, string> = {
  'Labour Law': 'bg-ap-lavender text-ap-purple',
  'Factory Act': 'bg-amber-50 text-amber-700',
  'Payroll': 'bg-emerald-50 text-emerald-700',
  'EHS': 'bg-rose-50 text-rose-700',
  'Regulatory Updates': 'bg-sky-50 text-sky-700',
};

export function IntelligenceHub() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredArticles = articles.filter(
    (article) => activeCategory === 'All' || article.category === activeCategory
  );

  const featuredArticle = articles[0];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compliance Intelligence Hub"
          title="Insights That Drive Compliance Decisions"
          description="Authoritative research, analysis, and regulatory intelligence from India's leading compliance experts."
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

        {/* Featured Article */}
        {!filteredArticles.find((a) => a.featured) && activeCategory !== 'All' ? null : (
          <ScrollReveal delay={0.2} className="mt-10">
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                {/* Left: Colored placeholder area */}
                <div className="flex-shrink-0 bg-gradient-to-br from-ap-purple to-ap-violet h-48 min-w-[280px] md:h-full md:w-[320px] lg:w-[380px] flex items-center justify-center">
                  <div className="text-center text-white/30">
                    <div className="text-5xl font-bold tracking-tighter">AI</div>
                    <div className="mt-1 text-xs uppercase tracking-widest">Featured Analysis</div>
                  </div>
                </div>

                {/* Right: Content area */}
                <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
                  <span
                    className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${
                      categoryColors[featuredArticle.category] || 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {featuredArticle.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-ap-purple leading-snug">
                    {featuredArticle.title}
                  </h3>

                  {/* Author info */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ap-lavender text-ap-purple">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-ap-purple">{featuredArticle.author}</span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-muted-foreground">{featuredArticle.date}</span>
                    </div>
                  </div>

                  {/* Reading time */}
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {featuredArticle.description}
                  </p>

                  {/* Read link */}
                  <div className="mt-5">
                    <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-ap-purple transition-colors hover:text-ap-violet">
                      Read Analysis
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Supporting Articles Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredArticles
              .filter((a) => !a.featured)
              .map((article, index) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="group rounded-xl border border-gray-100 bg-white p-5 transition-shadow duration-300 hover:shadow-md"
                >
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      categoryColors[article.category] || 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {article.category}
                  </span>

                  <h4 className="mt-3 text-base font-semibold text-ap-purple leading-snug">
                    {article.title}
                  </h4>

                  {/* Meta info */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span>{article.date}</span>
                    <span className="text-gray-300">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Read link */}
                  <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ap-purple transition-colors hover:text-ap-violet">
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Empty state when no articles match filter */}
          {filteredArticles.filter((a) => !a.featured).length === 0 &&
            (activeCategory !== 'All' || !filteredArticles.find((a) => a.featured)) && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No articles found for this category.
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
