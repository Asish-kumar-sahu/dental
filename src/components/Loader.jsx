import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function Loader({ onDone }) {
  const { brand, theme } = siteConfig;
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(onDone, 400);
          return 100;
        }
        return p + 4;
      });
    }, 20);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: theme.bgPrimary }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Soft accent glow */}
      <div
        className="halo"
        style={{
          width: 400,
          height: 400,
          background: theme.accentSoft,
          opacity: 0.6,
          top: "30%",
          left: "40%",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-10"
      >
        {/* Logo */}
        <div
          className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
          }}
        >
          <span className="font-display font-bold text-white text-3xl">
            {brand.name.charAt(0)}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight" style={{ color: theme.textPrimary }}>
          {brand.name}
        </h1>
        <p className="text-xs tracking-[0.3em] uppercase mt-3" style={{ color: theme.textMuted }}>
          {brand.suffix}
        </p>
      </motion.div>

      {/* Progress */}
      <div className="w-64 h-[2px] rounded-full overflow-hidden relative" style={{ background: theme.border }}>
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(to right, ${theme.accent}, ${theme.accentDark})`,
          }}
        />
      </div>
      <div
        className="mt-3 text-xs tracking-[0.3em] tabular-nums font-medium"
        style={{ color: theme.accent }}
      >
        {String(pct).padStart(3, "0")}
      </div>
    </motion.div>
  );
}
