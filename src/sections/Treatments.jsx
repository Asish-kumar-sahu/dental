import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Clock, Repeat, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

export default function Treatments() {
  const { treatments, theme } = siteConfig;

  return (
    <section id="treatments" className="relative py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center">
            <SectionLabel centered>{treatments.sectionLabel}</SectionLabel>
          </div>
          <DualHeading
            line1={treatments.heading.line1}
            line2={treatments.heading.line2}
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
            {treatments.description}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.items.map((t, i) => {
            const Icon = Icons[t.icon] || Icons.Sparkles;
            return (
              <motion.a
                key={i}
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden transition-all"
                style={{
                  background: theme.bgPrimary,
                  border: `1px solid ${theme.border}`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md"
                    style={{
                      background: `${theme.bgPrimary}ee`,
                      color: theme.accent,
                    }}
                  >
                    {t.category}
                  </div>

                  {/* Icon */}
                  <div
                    className="absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md"
                    style={{
                      background: `${theme.bgPrimary}ee`,
                      color: theme.accent,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: theme.textPrimary }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="text-xs mb-4 font-medium"
                    style={{ color: theme.accent }}
                  >
                    {t.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: theme.textMuted }}
                  >
                    {t.description}
                  </p>

                  {/* Details strip */}
                  <div
                    className="flex items-center gap-4 pb-4 mb-4 text-xs"
                    style={{ borderBottom: `1px solid ${theme.border}` }}
                  >
                    <div className="flex items-center gap-1.5" style={{ color: theme.textMuted }}>
                      <Clock size={13} />
                      {t.duration}
                    </div>
                    <div className="flex items-center gap-1.5" style={{ color: theme.textMuted }}>
                      <Repeat size={13} />
                      {t.sessions}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-end">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:rotate-[-45deg]"
                      style={{
                        background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                        color: "#fff",
                      }}
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
