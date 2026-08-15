import React from "react";
import { siteConfig } from "../config/siteConfig";

export default function BrandName() {
  const { brand, theme } = siteConfig;
  return (
    <div className="flex flex-col leading-none">
      <span
        className="font-display font-extrabold tracking-tight"
        style={{ fontSize: "20px", color: theme.textPrimary }}
      >
        {brand.name}
      </span>
      <span className="text-[10px] mt-1" style={{ color: theme.textMuted }}>
        {brand.suffix}
      </span>
    </div>
  );
}
