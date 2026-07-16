/* ============================================================================
   MAIN APP — Content change karne ke liye src/config/siteConfig.js edit karo
   ============================================================================ */

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { siteConfig } from "./config/siteConfig";

// Components
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import TopStrip from "./components/TopStrip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingConsultButton from "./components/FloatingConsultButton";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { theme } = siteConfig;
    const root = document.documentElement.style;
    root.setProperty("--accent", theme.accent);
    root.setProperty("--accent-dark", theme.accentDark);
    root.setProperty("--accent-soft", theme.accentSoft);
    root.setProperty("--bg-primary", theme.bgPrimary);
    root.setProperty("--bg-secondary", theme.bgSecondary);
    root.setProperty("--text-primary", theme.textPrimary);
    root.setProperty("--text-muted", theme.textMuted);
    root.setProperty("--border", theme.border);
  }, []);

  return (
    <div style={{ background: siteConfig.theme.bgPrimary, color: siteConfig.theme.textPrimary }}>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <ScrollProgress />
      <TopStrip />
      <Navbar />
      <FloatingConsultButton />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
