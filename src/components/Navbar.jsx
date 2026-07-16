import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Youtube, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import Logo from "./Logo";
import BrandName from "./BrandName";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { navbar, socials, theme } = siteConfig;
  const hasTopStrip = navbar.topStrip?.show;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? `${theme.bgPrimary}ee` : theme.bgPrimary,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${theme.border}` : "1px solid transparent",
          padding: scrolled ? "12px 0" : "20px 0",
          top: 0,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          <motion.a href="#home" className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <Logo size={42} />
            <BrandName />
          </motion.a>

          <nav className="hidden lg:flex items-center gap-8">
            {navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors relative group"
                style={{ color: theme.textPrimary }}
                onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = theme.textPrimary)}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-1/2 w-0 group-hover:w-full group-hover:left-0 h-[2px] transition-all duration-300 rounded-full"
                  style={{ background: theme.accent }}
                ></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              {socials.instagram && <SocialIcon href={socials.instagram} Icon={Instagram} />}
              {socials.facebook && <SocialIcon href={socials.facebook} Icon={Facebook} />}
              {socials.youtube && <SocialIcon href={socials.youtube} Icon={Youtube} />}
            </div>

            <motion.a
              href={navbar.ctaButton.href}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold text-sm rounded-full transition-all"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                boxShadow: `0 6px 20px ${theme.accent}40`,
              }}
            >
              {navbar.ctaButton.label}
              <ArrowRight size={14} />
            </motion.a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: theme.bgSecondary, color: theme.textPrimary }}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: "rgba(15, 23, 42, 0.5)", backdropFilter: "blur(8px)" }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm p-8 pt-24 overflow-y-auto"
              style={{ background: theme.bgPrimary }}
            >
              <nav className="flex flex-col">
                {navbar.links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-4 text-lg font-semibold transition-colors flex items-center gap-3"
                    style={{
                      borderBottom: `1px solid ${theme.border}`,
                      color: theme.textPrimary,
                    }}
                  >
                    <span
                      className="font-mono text-xs"
                      style={{ color: theme.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={navbar.ctaButton.href}
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 text-white font-semibold rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                }}
              >
                {navbar.ctaButton.label}
                <ArrowRight size={15} />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialIcon({ href, Icon }) {
  const { theme } = siteConfig;
  return (
    <motion.a
      whileHover={{ y: -2 }}
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
    </motion.a>
  );
}
