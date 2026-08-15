import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, ArrowUp, Shield } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import Logo from "./Logo";
import BrandName from "./BrandName";

export default function Footer() {
  const { brand, footer, socials, navbar, theme } = siteConfig;

  return (
    <footer
      className="relative pt-20 pb-8 border-t"
      style={{
        background: theme.bgSecondary,
        borderColor: theme.border,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo size={46} />
              <BrandName />
            </div>
            <p
              className="max-w-md text-sm leading-relaxed mb-6"
              style={{ color: theme.textMuted }}
            >
              {footer.tagline}
            </p>

            {/* Accreditations */}
            {footer.accreditations && footer.accreditations.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {footer.accreditations.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium"
                    style={{ background: theme.bgTertiary, color: theme.textPrimary }}
                  >
                    <Shield size={11} style={{ color: theme.accent }} />
                    {a}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div
              className="text-xs font-semibold tracking-wider uppercase mb-4"
              style={{ color: theme.accent }}
            >
              Navigate
            </div>
            <ul className="space-y-2.5">
              {navbar.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: theme.textMuted }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="text-xs font-semibold tracking-wider uppercase mb-4"
              style={{ color: theme.accent }}
            >
              Legal
            </div>
            <ul className="space-y-2.5">
              {footer.legalLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: theme.textMuted }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="text-xs font-semibold tracking-wider uppercase mt-8 mb-4"
              style={{ color: theme.accent }}
            >
              Follow
            </div>
            <div className="flex gap-2">
              {socials.facebook && <FooterSocial href={socials.facebook} Icon={Facebook} />}
              {socials.instagram && <FooterSocial href={socials.instagram} Icon={Instagram} />}
              {socials.youtube && <FooterSocial href={socials.youtube} Icon={Youtube} />}
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: `1px solid ${theme.border}`,
            color: theme.textLight,
          }}
        >
          <div>
            © {new Date().getFullYear()} {brand.name} {brand.suffix}. {footer.credits}
          </div>
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = theme.textLight)}
          >
            Back to top
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: theme.bgTertiary, color: theme.accent }}
            >
              <ArrowUp size={11} />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({ href, Icon }) {
  const { theme } = siteConfig;
  return (
    <motion.a
      whileHover={{ y: -2 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
      style={{ background: theme.bgTertiary, color: theme.textMuted }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = theme.accent;
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = theme.bgTertiary;
        e.currentTarget.style.color = theme.textMuted;
      }}
    >
      <Icon size={15} />
    </motion.a>
  );
}
