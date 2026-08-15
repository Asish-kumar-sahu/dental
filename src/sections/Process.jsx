import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

export default function Process() {
  const { process, theme } = siteConfig;

  return (
    <section
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: theme.bgSecondary }}
    >
      {/* Soft accent glow */}
      <div
        className="halo"
        style={{
          width: 500,
          height: 500,
          background: theme.accentSoft,
          opacity: 0.5,
          top: "10%",
          right: "-10%",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center">
            <SectionLabel centered>{process.sectionLabel}</SectionLabel>
          </div>
          <DualHeading
            line1={process.heading.line1}
            line2={process.heading.line2}
            centered
          />
        </div>

        {/* Steps - timeline style */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]"
            style={{ background: theme.border }}
          />

          {process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 mb-10 lg:mb-14 ${
                i % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Step number circle (center on desktop) */}
              <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full items-center justify-center font-display font-bold text-xl z-10"
                style={{
                  background: theme.bgPrimary,
                  border: `3px solid ${theme.accent}`,
                  color: theme.accent,
                }}
              >
                {step.number}
              </div>

              {/* Content card */}
              <div
                className={`p-6 rounded-2xl ${i % 2 === 0 ? "" : "lg:col-start-2"}`}
                style={{
                  background: theme.bgPrimary,
                  border: `1px solid ${theme.border}`,
                  boxShadow: `0 8px 24px ${theme.accent}10`,
                }}
              >
                {/* Mobile number */}
                <div
                  className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full font-display font-bold text-sm mb-3"
                  style={{
                    background: theme.accentSoft,
                    color: theme.accent,
                  }}
                >
                  {step.number}
                </div>

                <h3
                  className="font-display font-bold text-xl mb-2"
                  style={{ color: theme.textPrimary }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                  {step.description}
                </p>
              </div>

              {/* Empty space for zigzag layout */}
              <div className={i % 2 === 0 ? "hidden lg:block" : "hidden lg:block lg:col-start-1 lg:row-start-1"} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
