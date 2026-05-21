import React from "react";
import { motion } from "framer-motion";

export default function Button({ as = "a", children, className = "", variant = "gold", ...props }) {
  const Component = motion[as] || motion.a;
  const variants = {
    gold: "border-clay/35 bg-clay text-paper hover:bg-[#9a6849] shadow-[0_16px_38px_rgba(138,96,72,0.28)]",
    dark: "border-white/10 bg-white/[0.04] text-paper hover:border-clay/35 hover:text-[#d7a66f]",
    light: "border-charcoal/10 bg-white/65 text-charcoal hover:border-clay/35 hover:text-clay"
  };

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
}
