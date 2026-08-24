'use client';

import { motion } from 'framer-motion';
import { Sparkles, Send } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';

const suggestedQuestions = [
  'What labour law changes are coming?',
  'What is my vendor compliance status?',
  'What risks require immediate attention?',
  'Generate compliance report for Q2',
];

const riskItems = [
  { label: 'PF Filing Due in 3 Days', color: 'bg-amber-400' },
  { label: 'Factory License Renewal - 30 Days', color: 'bg-red-500' },
  { label: 'ESI Half-yearly Return - 45 Days', color: 'bg-green-500' },
];

export function AIComplianceAssistant() {
  return (
    <section className="bg-ap-indigo py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI-Powered Intelligence"
          title="The Future of Compliance is Intelligent"
          description="Meet your AI compliance assistant — built on 25 years of regulatory expertise and powered by advanced language models."
          light={true}
        />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left: AI Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="bg-ap-purple/60 glass-card rounded-2xl overflow-hidden flex flex-col h-[480px] sm:h-[520px]">
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-ap-violet/30 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-ap-violet" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold">
                    AI Compliance Assistant
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-ap-violet rounded-full animate-pulse" />
                  <span className="text-white/60 text-xs">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex justify-end"
                >
                  <div className="bg-ap-violet/30 text-white rounded-2xl rounded-br-md px-4 py-2.5 text-sm max-w-[80%]">
                    What compliances apply to my factory in Tamil Nadu?
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 text-white/90 rounded-2xl rounded-bl-md px-4 py-3 text-sm max-w-[80%]">
                    <p>Based on your factory in Tamil Nadu, the following compliances apply:</p>
                    <ol className="mt-2 space-y-1 list-decimal list-inside">
                      <li>
                        <strong>Factories Act, 1948</strong> - License renewal, safety compliance
                      </li>
                      <li>
                        <strong>Tamil Nadu Shops & Establishments</strong> - Registration & renewal
                      </li>
                      <li>
                        <strong>PF & ESI</strong> - Monthly contributions for all employees
                      </li>
                      <li>
                        <strong>Professional Tax</strong> - Monthly deduction & remittance
                      </li>
                      <li>
                        <strong>Labour Welfare Fund</strong> - Annual contribution
                      </li>
                    </ol>
                    <p className="mt-2">Shall I generate a detailed compliance calendar for your establishment?</p>
                  </div>
                </motion.div>

                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="typing-dot w-2 h-2 bg-white/50 rounded-full inline-block" />
                      <span className="typing-dot w-2 h-2 bg-white/50 rounded-full inline-block" />
                      <span className="typing-dot w-2 h-2 bg-white/50 rounded-full inline-block" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input Bar */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Ask about compliance..."
                    readOnly
                    className="flex-1 bg-transparent text-white/70 text-sm placeholder:text-white/30 outline-none"
                  />
                  <button className="w-8 h-8 rounded-lg bg-ap-violet hover:bg-ap-violet/80 flex items-center justify-center transition-colors">
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Suggested Questions + Risk Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Suggested Questions */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="text-white font-semibold text-base mb-4">
                Suggested Questions
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={question}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 text-white/80 rounded-full px-4 py-2 text-sm hover:bg-white/20 cursor-pointer transition-colors"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Risk Prediction Panel */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="text-white font-semibold text-base mb-4">
                Compliance Risk Assessment
              </h3>
              <div className="space-y-3.5">
                {riskItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span
                      className={`w-2 h-2 ${item.color} rounded-full shrink-0`}
                    />
                    <span className="text-sm text-white/80">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
