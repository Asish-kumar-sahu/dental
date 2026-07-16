import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

/* Before/After comparison slider (drag to reveal) */
function BeforeAfterSlider({ before, after, treatment, duration, patientNote }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const { theme } = siteConfig;

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9 }}
      className="group"
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none mb-4"
        style={{
          border: `1px solid ${theme.border}`,
          boxShadow: `0 20px 50px ${theme.accent}15`,
        }}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => e.touches[0] && handleMove(e.touches[0].clientX)}
      >
        {/* After (base layer) */}
        <img
          src={after}
          alt="After treatment"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Before treatment"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${(100 / position) * 100}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md"
          style={{ background: "rgba(15, 23, 42, 0.7)", color: "#fff" }}
        >
          BEFORE
        </div>
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md"
          style={{ background: theme.accent, color: "#fff" }}
        >
          AFTER
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
          style={{ left: `${position}%`, background: "#fff" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: "#fff",
              color: theme.accent,
            }}
          >
            <ChevronsLeftRight size={18} />
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className="font-display font-bold text-base mb-1"
            style={{ color: theme.textPrimary }}
          >
            {treatment}
          </div>
          <div className="text-xs" style={{ color: theme.textMuted }}>
            {duration}
          </div>
        </div>
        <div
          className="text-xs px-3 py-1 rounded-full"
          style={{ background: theme.accentSoft, color: theme.accent }}
        >
          {patientNote}
        </div>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const { results, theme } = siteConfig;

  return (
    <section id="results" className="relative py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center">
            <SectionLabel centered>{results.sectionLabel}</SectionLabel>
          </div>
          <DualHeading
            line1={results.heading.line1}
            line2={results.heading.line2}
            centered
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base leading-relaxed"
            style={{ color: theme.textMuted }}
          >
            {results.description}
          </motion.p>
        </div>

        {/* Instruction hint */}
        <div
          className="text-center text-xs mb-10 flex items-center justify-center gap-2"
          style={{ color: theme.textLight }}
        >
          <ChevronsLeftRight size={14} />
          Drag the slider to see before / after
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {results.items.map((item, i) => (
            <BeforeAfterSlider key={i} {...item} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs text-center mt-12 italic max-w-2xl mx-auto"
          style={{ color: theme.textLight }}
        >
          {results.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
