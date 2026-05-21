import React, { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, label, suffix = "" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-charcoal/10 bg-white/[0.54] p-5 shadow-soft backdrop-blur"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-serif text-4xl font-semibold text-charcoal">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-stoneText">{label}</p>
    </motion.div>
  );
}
