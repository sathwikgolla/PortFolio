import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import profilePhoto from "../assets/profile.jpg";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { achievements } from "../data/achievements";

const heroLines = [
  "I build real-world MERN stack web applications with practical workflows, secure authentication, clean interfaces, and deployment-ready frontend experiences."
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

export default function Hero() {
  const skillCount = skills.reduce((total, group) => total + group.items.length, 0);

  return (
    <section id="home" className="relative overflow-hidden border-b border-charcoal/10 bg-paper">
      <div aria-hidden="true" className="absolute left-1/2 top-24 h-72 w-72 rounded-full bg-mist/70 blur-3xl" />
      <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={reveal} className="section-kicker">Portfolio</motion.p>
          <motion.h1
            variants={reveal}
            className="text-balance max-w-3xl font-serif text-5xl font-semibold leading-tight text-charcoal sm:text-6xl lg:text-7xl"
          >
            Sathwik Golla
          </motion.h1>
          <motion.p variants={reveal} className="mt-5 text-xl font-semibold text-clay sm:text-2xl">
            {profile.role}
          </motion.p>
          {heroLines.map((line) => (
            <motion.p
              key={line}
              variants={reveal}
              className="mt-6 max-w-2xl text-base leading-8 text-stoneText sm:text-lg"
            >
              {line}
            </motion.p>
          ))}

          <motion.div variants={reveal} className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-stoneText">
            <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/55 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-clay" />
              Open to internships and project roles
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/55 px-4 py-2">
              <MapPin size={15} />
              Hyderabad, India
            </span>
          </motion.div>

          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects">
              <ArrowDown size={16} />
              View Projects
            </MagneticButton>
            <MagneticButton href={profile.resumePath} download variant="secondary">
              <Download size={16} />
              Download Resume
            </MagneticButton>
            {/* Replace GitHub link in src/data/profile.js if needed. */}
            <MagneticButton href={profile.github} target="_blank" rel="noopener noreferrer" variant="secondary">
              <FaGithub size={16} />
              GitHub
            </MagneticButton>
            {/* Replace LinkedIn link in src/data/profile.js if needed. */}
            <MagneticButton href={profile.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
              <FaLinkedinIn size={16} />
              LinkedIn
            </MagneticButton>
          </motion.div>

          <motion.div variants={reveal} className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <AnimatedCounter value={projects.length} label="Projects" />
            <AnimatedCounter value={skillCount} label="Skills" />
            <AnimatedCounter value={achievements.length} label="Certifications" />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[430px]"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
        >
          <div aria-hidden="true" className="absolute -left-8 top-12 h-32 w-32 rounded-full border border-charcoal/10 bg-mist/65 blur-[1px]" />
          <div aria-hidden="true" className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full border border-charcoal/10 bg-linen" />
          <div aria-hidden="true" className="absolute inset-8 rounded-[2rem] bg-clay/15 blur-3xl" />

          <motion.div
            className="relative rounded-[2rem] border border-charcoal/10 bg-white/55 p-3 shadow-[0_28px_85px_rgba(39,37,34,0.16)] backdrop-blur"
            animate={{ y: [0, -12, 0], rotate: [-0.4, 0.35, -0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.015 }}
          >
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[2.4rem] border border-white/55 bg-linen/50" />
            <div aria-hidden="true" className="absolute inset-4 -z-10 rounded-[1.6rem] bg-mist/30 blur-xl" />
            <div className="absolute -left-10 top-16 hidden rounded-2xl border border-charcoal/10 bg-paper/85 p-4 shadow-soft backdrop-blur md:block">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-clay">Focus</p>
              <p className="mt-1 text-sm font-bold text-charcoal">MERN products</p>
            </div>
            <div className="absolute -bottom-8 right-5 hidden rounded-2xl border border-charcoal/10 bg-paper/85 p-4 shadow-soft backdrop-blur md:block">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-clay" />
                <p className="text-sm font-bold text-charcoal">Production-ready UI</p>
              </div>
            </div>

            <motion.div className="overflow-hidden rounded-[1.55rem] border border-charcoal/10 bg-linen">
              <motion.img
                src={profilePhoto}
                alt="Portrait of Sathwik Golla"
                className="aspect-[4/5] w-full object-cover object-center"
                decoding="async"
                fetchPriority="high"
                whileHover={{ scale: 1.055 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
