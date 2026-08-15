import React from "react";
import { Phone, CircleCheck } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function TopStrip() {
  const { navbar, theme } = siteConfig;
  if (!navbar.topStrip?.show) return null;

  return (
    <div
      className="relative z-[55] py-2.5 px-6 text-white text-xs"
      style={{ background: theme.textPrimary }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <CircleCheck size={13} style={{ color: theme.accent }} />
          <span className="opacity-90">{navbar.topStrip.text}</span>
        </div>
        <a
          href={`tel:${navbar.topStrip.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 transition-colors"
          onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <Phone size={12} />
          <span className="hidden sm:inline">{navbar.topStrip.phone}</span>
        </a>
      </div>
    </div>
  );
}
