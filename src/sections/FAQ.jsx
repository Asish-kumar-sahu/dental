import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

export default function FAQ() {
  const { faq, theme } = siteConfig;
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-36"
      style={{ background: theme.bgSecondary }}
    >
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel centered>{faq.sectionLabel}</SectionLabel>
          </div>
          <DualHeading
            line1={faq.heading.line1}
            line2={faq.heading.line2}
            centered
          />
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden transition-all"
                style={{
                  background: theme.bgPrimary,
                  border: `1px solid ${isOpen ? theme.accent : theme.border}`,
                  boxShadow: isOpen ? `0 8px 30px ${theme.accent}15` : "none",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left p-5 lg:p-6 flex items-center justify-between gap-4"
                >
                  <span
                    className="font-display font-bold text-base lg:text-lg pr-4"
                    style={{ color: theme.textPrimary }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: isOpen ? theme.accent : theme.bgSecondary,
                      color: isOpen ? "#fff" : theme.accent,
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-5 pb-6 lg:px-6 text-sm leading-relaxed"
                        style={{ color: theme.textMuted }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
