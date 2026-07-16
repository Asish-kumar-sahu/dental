import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, GraduationCap, Clock } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

export default function Doctors() {
  const { doctors, theme } = siteConfig;

  return (
    <section
      id="doctors"
      className="relative py-24 lg:py-36"
      style={{ background: theme.bgSecondary }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center">
            <SectionLabel centered>{doctors.sectionLabel}</SectionLabel>
          </div>
          <DualHeading
            line1={doctors.heading.line1}
            line2={doctors.heading.line2}
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
            {doctors.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {doctors.items.map((doc, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden transition-all"
              style={{
                background: theme.bgPrimary,
                border: `1px solid ${theme.border}`,
              }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
                {/* Experience pill */}
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md"
                  style={{
                    background: `${theme.bgPrimary}ee`,
                    color: theme.accent,
                  }}
                >
                  <Clock size={11} />
                  {doc.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: theme.textPrimary }}
                >
                  {doc.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: theme.accent }}
                >
                  {doc.title}
                </p>

                {/* Qualifications */}
                <div
                  className="flex items-start gap-2 mb-4 pb-4"
                  style={{ borderBottom: `1px solid ${theme.border}` }}
                >
                  <GraduationCap size={14} className="mt-0.5 flex-shrink-0" style={{ color: theme.textMuted }} />
                  <span className="text-xs font-medium" style={{ color: theme.textPrimary }}>
                    {doc.qualifications}
                  </span>
                </div>

                {/* Bio */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: theme.textMuted }}
                >
                  {doc.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {doc.specialties.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: theme.accentSoft,
                        color: theme.accentDark,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-2">
                  {doc.instagram && doc.instagram !== "#" && (
                    <SocialLink href={doc.instagram} Icon={Instagram} />
                  )}
                  {doc.linkedin && doc.linkedin !== "#" && (
                    <SocialLink href={doc.linkedin} Icon={Linkedin} />
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, Icon }) {
  const { theme } = siteConfig;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
      style={{ background: theme.bgSecondary, color: theme.textMuted }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = theme.accent;
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = theme.bgSecondary;
        e.currentTarget.style.color = theme.textMuted;
      }}
    >
      <Icon size={14} />
    </a>
  );
}
