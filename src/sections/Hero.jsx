import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, Play } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function Hero() {
  const { hero, theme } = siteConfig;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28"
    >
      {/* Soft accent halo behind */}
      <div
        className="halo"
        style={{
          width: 600,
          height: 600,
          background: theme.accentSoft,
          opacity: 0.7,
          top: "-20%",
          right: "-10%",
        }}
      />
      <div
        className="halo"
        style={{
          width: 400,
          height: 400,
          background: theme.accentSoft,
          opacity: 0.5,
          bottom: "10%",
          left: "-10%",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${theme.textPrimary} 1px, transparent 1px), linear-gradient(90deg, ${theme.textPrimary} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-7">
            {/* Trust label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: theme.accentSoft }}
            >
              <CircleCheck size={14} style={{ color: theme.accent }} />
              <span className="text-xs font-semibold" style={{ color: theme.accent }}>
                {hero.label}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[1.05] mb-6" style={{ color: theme.textPrimary }}>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]"
                >
                  {hero.headline.line1}
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]"
                  style={{ color: theme.accent }}
                >
                  {hero.headline.line2}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base lg:text-lg leading-relaxed max-w-xl mb-8"
              style={{ color: theme.textMuted }}
            >
              {hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={hero.primaryButton.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-semibold rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                  boxShadow: `0 10px 30px ${theme.accent}4D`,
                }}
              >
                {hero.primaryButton.label}
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={hero.secondaryButton.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-full transition-all"
                style={{
                  background: theme.bgSecondary,
                  color: theme.textPrimary,
                  border: `1px solid ${theme.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.color = theme.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.color = theme.textPrimary;
                }}
              >
                <Play size={12} fill="currentColor" />
                {hero.secondaryButton.label}
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            {hero.trustBadges && hero.trustBadges.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-2"
              >
                {hero.trustBadges.map((badge, i) => (
                  <div
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5"
                    style={{
                      background: theme.bgPrimary,
                      border: `1px solid ${theme.border}`,
                      color: theme.textMuted,
                    }}
                  >
                    <CircleCheck size={11} style={{ color: theme.accent }} />
                    {badge}
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main image card */}
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
              style={{
                boxShadow: `0 30px 80px ${theme.accent}26`,
              }}
            >
              <img
                src={hero.bgImage}
                alt="Clinic"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-6 -left-6 lg:-left-10 p-4 rounded-2xl"
              style={{
                background: theme.bgPrimary,
                boxShadow: `0 10px 40px ${theme.accent}20`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <div className="text-xs" style={{ color: theme.textMuted }}>
                Patient satisfaction
              </div>
              <div
                className="font-display font-extrabold text-3xl"
                style={{ color: theme.textPrimary }}
              >
                98%
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-6 -right-6 lg:-right-10 p-4 rounded-2xl"
              style={{
                background: theme.bgPrimary,
                boxShadow: `0 10px 40px ${theme.accent}20`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: theme.accentSoft }}
                >
                  <CircleCheck size={18} style={{ color: theme.accent }} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: theme.textMuted }}>
                    Open today
                  </div>
                  <div className="font-bold text-sm" style={{ color: theme.textPrimary }}>
                    Till 9:00 PM
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 pt-10 grid grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ borderTop: `1px solid ${theme.border}` }}
        >
          {hero.stats.map((stat, i) => (
            <div key={i}>
              <div
                className="font-display font-extrabold text-4xl lg:text-5xl mb-2"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: theme.textMuted }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
