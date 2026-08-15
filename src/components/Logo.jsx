import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";

export default function Logo({ size = 44 }) {
  const [errored, setErrored] = useState(false);
  const { brand, theme } = siteConfig;
  const firstLetter = brand.name.charAt(0);

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
      }}
    >
      {!errored ? (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="w-full h-full object-contain p-1"
          onError={() => setErrored(true)}
        />
      ) : (
        <span
          className="font-display font-bold text-white"
          style={{ fontSize: size * 0.5 }}
        >
          {firstLetter}
        </span>
      )}
    </div>
  );
}
