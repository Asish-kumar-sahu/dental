import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export function SectionLabel({ children, centered = false }) {
  const { theme } = siteConfig;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 ${centered ? "" : ""}`}
      style={{ background: theme.accentSoft }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: theme.accent }}
      ></span>
      <span
        className="text-xs font-semibold tracking-wide uppercase"
        style={{ color: theme.accent }}
      >
        {children}
      </span>
    </motion.div>
  );
}

export function DualHeading({ line1, line2, centered = false }) {
  const { theme } = siteConfig;
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight ${centered ? "text-center" : ""}`}
      style={{ color: theme.textPrimary }}
    >
      <span className="block">{line1}</span>
      <span className="block" style={{ color: theme.accent }}>
        {line2}
      </span>
    </motion.h2>
  );
}
