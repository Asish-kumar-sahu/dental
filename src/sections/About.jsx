import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const { about, theme } = siteConfig;

  return (
    <section
      id="about"
      className="relative py-24 lg:py-36"
      style={{ background: theme.bgSecondary }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ boxShadow: `0 30px 60px ${theme.accent}1A` }}
            >
              <img
                src={about.image}
                alt="Clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7">
            <SectionLabel>{about.sectionLabel}</SectionLabel>
            <DualHeading line1={about.heading.line1} line2={about.heading.line2} />

            <div className="space-y-5 text-base lg:text-lg leading-relaxed mt-8 mb-12 max-w-xl" style={{ color: theme.textMuted }}>
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {about.values.map((v, i) => {
                const Icon = Icons[v.icon] || Icons.CircleCheck;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="p-5 rounded-2xl transition-all"
                    style={{
                      background: theme.bgPrimary,
                      border: `1px solid ${theme.border}`,
                    }}
                    whileHover={{ y: -4, boxShadow: `0 10px 30px ${theme.accent}15` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: theme.accentSoft,
                        color: theme.accent,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div
                      className="font-display font-bold text-base mb-1"
                      style={{ color: theme.textPrimary }}
                    >
                      {v.title}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: theme.textMuted }}>
                      {v.description}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
