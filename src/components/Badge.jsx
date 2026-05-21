import React from "react";

export default function Badge({ children, tone = "light", className = "" }) {
  const tones = {
    light: "border-charcoal/10 bg-paper text-stoneText",
    gold: "border-clay/25 bg-clay/10 text-clay",
    dark: "border-white/10 bg-white/[0.06] text-paper/75",
    darkGold: "border-clay/25 bg-clay/15 text-[#d7a66f]"
  };

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
