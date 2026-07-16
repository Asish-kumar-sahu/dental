import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

export default function Testimonials() {
  const { testimonials, theme } = siteConfig;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % testimonials.items.length),
      7000
    );
    return () => clearInterval(t);
  }, [testimonials.items.length]);

  const current = testimonials.items[active];
  const next = () => setActive((a) => (a + 1) % testimonials.items.length);
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.items.length) % testimonials.items.length);

  return (
    <section className="relative py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center">
            <SectionLabel centered>{testimonials.sectionLabel}</SectionLabel>
          </div>
          <DualHeading
            line1={testimonials.heading.line1}
            line2={testimonials.heading.line2}
            centered
          />
        </div>

        <div
          className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 lg:p-14 relative overflow-hidden"
          style={{
            background: theme.bgSecondary,
            border: `1px solid ${theme.border}`,
          }}
        >
          {/* Decorative quote mark */}
          <Quote
            size={80}
            className="absolute top-6 right-8 opacity-10"
            style={{ color: theme.accent }}
          />

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={theme.accent}
                style={{ color: theme.accent }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-display font-medium text-xl md:text-2xl lg:text-3xl leading-[1.4] mb-10"
              style={{ color: theme.textPrimary }}
            >
              "{current.quote}"
            </motion.blockquote>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`meta-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <img
                src={current.image}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                style={{ border: `2px solid ${theme.accent}` }}
              />
              <div>
                <div
                  className="font-display font-bold text-base"
                  style={{ color: theme.textPrimary }}
                >
                  {current.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: theme.textMuted }}>
                  {current.treatment}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              background: theme.bgSecondary,
              border: `1px solid ${theme.border}`,
              color: theme.textMuted,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.accent;
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = theme.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = theme.bgSecondary;
              e.currentTarget.style.color = theme.textMuted;
              e.currentTarget.style.borderColor = theme.border;
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all"
                style={{
                  width: active === i ? 28 : 8,
                  height: 8,
                  background: active === i ? theme.accent : theme.border,
                }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              background: theme.bgSecondary,
              border: `1px solid ${theme.border}`,
              color: theme.textMuted,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.accent;
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = theme.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = theme.bgSecondary;
              e.currentTarget.style.color = theme.textMuted;
              e.currentTarget.style.borderColor = theme.border;
            }}
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
