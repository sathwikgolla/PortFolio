import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Code2, ExternalLink, Github, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import Badge from "./Badge.jsx";
import Button from "./Button.jsx";

export default function ProjectDetail({ project, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#d7a66f] transition hover:text-paper"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </button>

      <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Badge tone="darkGold">{project.category}</Badge>
            <h3 className="mt-5 font-serif text-4xl font-semibold text-paper md:text-5xl">{project.name}</h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-paper/65 md:text-base">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-paper/75"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.035, duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} live demo in a new tab`}>
                Live Demo
                <ExternalLink size={16} />
              </Button>
              <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="dark" aria-label={`Open ${project.name} GitHub repository in a new tab`}>
                <Github size={16} />
                GitHub
              </Button>
              <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="dark" aria-label={`View ${project.name} source code in a new tab`}>
                <Code2 size={16} />
                View Code
              </Button>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101115] p-4 shadow-[0_24px_75px_rgba(0,0,0,0.38)]">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-clay/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#17181d] transition duration-500 group-hover:scale-[1.02]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-clay" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-auto text-[0.65rem] font-bold uppercase tracking-[0.18em] text-paper/45">Preview</span>
              </div>
              <div className="aspect-video p-5">
                <div className="grid h-full gap-4 md:grid-cols-[0.35fr_1fr]">
                  <div className="rounded-xl border border-white/10 bg-white/[0.045] p-3">
                    <div className="mb-4 h-2 w-16 rounded-full bg-clay/60" />
                    <div className="space-y-3">
                      <div className="h-2 rounded-full bg-white/15" />
                      <div className="h-2 w-4/5 rounded-full bg-white/10" />
                      <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-paper p-4">
                    <div className="h-5 w-44 rounded-full bg-charcoal/70" />
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-2xl bg-mist" />
                      <div className="h-20 rounded-2xl bg-linen" />
                      <div className="h-20 rounded-2xl bg-mist/70" />
                    </div>
                    <div className="mt-5 h-24 rounded-2xl bg-charcoal/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <DarkInfoCard title="About the Project" icon={<Layers3 size={18} />}>
          <p className="text-sm leading-7 text-paper/65">{project.about}</p>
        </DarkInfoCard>
        <DarkList title="Project Highlights" items={project.highlights} icon={<Sparkles size={18} />} />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <DarkList title="Key Features" items={project.keyFeatures} icon={<ShieldCheck size={18} />} featureGrid />
        <DarkInfoCard title="Technologies Used" icon={<Code2 size={18} />}>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} tone="dark">{tech}</Badge>
            ))}
          </div>
        </DarkInfoCard>
      </div>
    </motion.div>
  );
}

function DarkInfoCard({ title, icon, children }) {
  return (
    <motion.article
      className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur"
      whileHover={{ y: -4, borderColor: "rgba(215,166,111,0.26)" }}
    >
      <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-paper">
        <span className="text-[#d7a66f]">{icon}</span>
        {title}
      </h4>
      {children}
    </motion.article>
  );
}

function DarkList({ title, items, icon, featureGrid = false }) {
  return (
    <DarkInfoCard title={title} icon={icon}>
      <div className={featureGrid ? "grid gap-3 sm:grid-cols-2" : "space-y-3"}>
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-paper/70">
            <Check size={16} className="mt-1 shrink-0 text-[#d7a66f]" />
            {item}
          </div>
        ))}
      </div>
    </DarkInfoCard>
  );
}
