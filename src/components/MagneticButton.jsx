import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  as = "a",
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const Component = motion[as] || motion.a;
  const baseClass = variant === "primary" ? "button-primary premium-button" : "button-secondary premium-button";

  const handleMouseMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({
      x: (event.clientX - rect.left - rect.width / 2) * 0.22,
      y: (event.clientY - rect.top - rect.height / 2) * 0.22
    });
  };

  return (
    <Component
      ref={ref}
      href={href}
      className={`${baseClass} ${className}`}
      animate={position}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.45 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      {...props}
    >
      {children}
    </Component>
  );
}
