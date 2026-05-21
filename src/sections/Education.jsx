import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { education } from "../data/education";

export default function Education() {
  return (
    <AnimatedSection id="education" className="section-padding bg-linen/55">
      <div className="container-page">
        <SectionHeader eyebrow="Education" title="Academic background" />
        <div className="relative grid gap-5 md:grid-cols-3">
          <motion.div
            aria-hidden="true"
            className="absolute left-0 top-5 hidden h-px w-full bg-charcoal/10 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          {education.map((item, index) => (
            <motion.article
              key={`${item.degree}-${item.period}`}
              className="soft-card relative p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <span className="absolute -top-2 left-6 hidden h-4 w-4 rounded-full border-4 border-paper bg-clay md:block" />
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">{item.period}</p>
              <h3 className="mt-4 text-xl font-bold leading-snug text-charcoal">{item.degree}</h3>
              <p className="mt-3 text-sm font-semibold text-stoneText">{item.institution}</p>
              <p className="mt-4 rounded-full border border-charcoal/10 bg-paper px-4 py-2 text-sm font-bold text-charcoal">
                {item.score}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
