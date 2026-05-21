import React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const smoothX = useSpring(mouseX, { stiffness: 85, damping: 24, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 85, damping: 24, mass: 0.5 });

  React.useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden opacity-70 sm:block"
      style={{
        background: useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, rgba(138, 96, 72, 0.12), transparent 62%)`
      }}
    />
  );
}
