import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail.jsx";
import { projectFilters, projectsData } from "../data/projectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => {
          if (activeFilter === "MERN") return project.techStack.includes("MongoDB");
          return project.categories?.includes(activeFilter) || project.category === activeFilter;
        });

  return (
    <AnimatedSection id="projects" className="section-padding relative overflow-hidden bg-[#090a0d] text-paper">
      <div aria-hidden="true" className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-clay/20 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-mist/10 blur-3xl" />
      <div className="container-page relative">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectDetail
              key={selectedProject.name}
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <motion.div
              key="project-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d7a66f]">Projects</p>
              <h2 className="font-serif text-3xl font-semibold text-paper sm:text-4xl">Selected practical builds</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-paper/62 sm:text-lg">
                Each project opens into a detailed case-study view with features, stack, deployment context, and product highlights.
              </p>

              <div className="mb-8 mt-8 flex flex-wrap gap-3">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`relative rounded-full border px-4 py-2 text-sm font-bold transition ${
                      activeFilter === filter
                        ? "border-clay/40 text-paper"
                        : "border-white/10 bg-white/[0.04] text-paper/60 hover:border-clay/35 hover:text-[#d7a66f]"
                    }`}
                  >
                    {activeFilter === filter ? (
                      <motion.span
                        layoutId="project-dark-filter"
                        className="absolute inset-0 rounded-full bg-clay"
                        transition={{ type: "spring", stiffness: 310, damping: 26 }}
                      />
                    ) : null}
                    <span className="relative z-10">{filter}</span>
                  </button>
                ))}
              </div>

              <motion.div layout className="grid gap-5 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} onOpen={setSelectedProject} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
