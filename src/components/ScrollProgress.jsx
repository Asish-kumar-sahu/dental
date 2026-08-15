import React from "react";
import { motion, useScroll } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { theme } = siteConfig;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: `linear-gradient(to right, ${theme.accent}, ${theme.accentDark})`,
      }}
    />
  );
}
