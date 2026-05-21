import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "./Badge.jsx";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-left shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur transition hover:border-clay/45"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7, scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-clay/15 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4">
          <Badge tone="darkGold">{project.category}</Badge>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-paper/70 transition group-hover:border-clay/35 group-hover:text-[#d7a66f]">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-paper">{project.name}</h3>
        <p className="mt-3 min-h-[3.5rem] text-sm leading-7 text-paper/62">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} tone="dark">{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
