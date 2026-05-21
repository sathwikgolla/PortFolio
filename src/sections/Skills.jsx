import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layers3, ServerCog, Sparkles, Wrench } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { featuredSkills, skills } from "../data/skills";

const iconMap = {
  Frontend: Code2,
  Backend: ServerCog,
  Database: Database,
  Tools: Wrench,
  Other: Layers3
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding relative overflow-hidden bg-linen/55">
      <div aria-hidden="true" className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-16 right-[-10rem] h-80 w-80 rounded-full bg-mist/80 blur-3xl" />
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills"
          title="Technical toolkit"
          copy="A focused stack for building, testing, and deploying full-stack web applications."
        />

        <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="soft-card relative overflow-hidden p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-mist blur-3xl" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-charcoal/10 bg-paper text-clay">
                <Sparkles size={21} />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-charcoal">Built around the MERN workflow</h3>
              <p className="mt-4 text-sm leading-7 text-stoneText">
                My strongest focus is building complete web apps: React interfaces, Express APIs,
                MongoDB data models, authentication, and deployment-ready UI.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="soft-card overflow-hidden p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">Featured strengths</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {featuredSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="group relative overflow-hidden rounded-full border border-charcoal/10 bg-paper px-4 py-2 text-sm font-bold text-charcoal shadow-[0_10px_30px_rgba(39,37,34,0.06)]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, borderColor: "rgba(138,96,72,0.32)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.045, duration: 0.35 }}
                >
                  <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/60 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                  <span className="relative">{skill}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, groupIndex) => (
            <SkillCard key={skillGroup.group} skillGroup={skillGroup} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function SkillCard({ skillGroup, groupIndex }) {
  const Icon = iconMap[skillGroup.group] || Sparkles;

  return (
    <motion.article
      className="soft-card group relative min-h-[260px] overflow-hidden p-6 transition duration-300 hover:border-clay/35 hover:shadow-[0_24px_70px_rgba(138,96,72,0.14)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ delay: groupIndex * 0.06, duration: 0.45 }}
    >
      <div aria-hidden="true" className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-mist/80 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-clay/55 transition duration-500 group-hover:scale-x-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-charcoal/10 bg-paper text-clay">
          <Icon size={21} />
        </div>
        <span className="rounded-full border border-charcoal/10 bg-paper px-3 py-1 text-xs font-bold text-stoneText">
          {skillGroup.level}%
        </span>
      </div>

      <h3 className="relative mt-5 text-xl font-bold text-charcoal">{skillGroup.group}</h3>
      <p className="relative mt-3 text-sm leading-7 text-stoneText">{skillGroup.focus}</p>

      <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-charcoal/10">
        <motion.div
          className="h-full rounded-full bg-clay"
          initial={{ width: 0 }}
          whileInView={{ width: `${skillGroup.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + groupIndex * 0.05, duration: 0.9, ease: "easeOut" }}
        />
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {skillGroup.items.map((skill, index) => (
          <motion.span
            key={skill}
            className="rounded-full border border-charcoal/10 bg-paper px-3 py-1.5 text-sm font-semibold text-stoneText transition"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -3, borderColor: "rgba(138, 96, 72, 0.38)", color: "#8a6048" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.025, duration: 0.3 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="relative mt-6 flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white/45 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-stoneText opacity-0 transition group-hover:opacity-100"
        initial={false}
      >
        <span>Applied in projects</span>
        <span className="text-clay">Portfolio ready</span>
      </motion.div>
    </motion.article>
  );
}
