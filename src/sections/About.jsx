import React from "react";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Rocket, ShieldCheck } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";

const highlights = [
  {
    title: "MERN Stack",
    copy: "End-to-end web apps with React, Node, Express, and MongoDB.",
    Icon: Code2
  },
  {
    title: "Secure Flows",
    copy: "JWT authentication, protected routes, and practical user-role handling.",
    Icon: ShieldCheck
  },
  {
    title: "Deployment Ready",
    copy: "Comfortable with Vercel, Render, GitHub, and API testing workflows.",
    Icon: Rocket
  }
];

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding relative overflow-hidden">
      <div aria-hidden="true" className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-mist/70 blur-3xl" />
      <div className="container-page">
        <SectionHeader
          eyebrow="About"
          title="Student developer focused on useful software."
          copy="I am a Computer Science Engineering student passionate about full-stack development, problem solving, and building practical web applications. I have worked on multiple real-world projects using React, Node.js, Express, MongoDB, JWT authentication, REST APIs, and modern UI design."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            className="soft-card relative overflow-hidden p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-clay/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-charcoal/10 bg-paper text-clay">
                <GraduationCap size={22} />
              </div>
              <h3 className="mt-6 font-serif text-3xl font-semibold text-charcoal">B.Tech CSE, building with product intent.</h3>
              <p className="mt-5 text-sm leading-7 text-stoneText">
                I focus on building practical full-stack systems that solve familiar problems:
                campus workflows, ordering flows, lost-and-found coordination, and learning tools.
                My work combines clean frontend design with API logic, authentication, and deployment.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["React interfaces", "REST API design", "MongoDB models", "Responsive layouts"].map((item) => (
                  <div key={item} className="rounded-2xl border border-charcoal/10 bg-paper/75 px-4 py-3 text-sm font-bold text-charcoal">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4">
            {highlights.map(({ title, copy, Icon }, index) => (
              <motion.article
                key={title}
                className="soft-card group relative overflow-hidden p-6 transition hover:border-clay/35 hover:shadow-[0_22px_65px_rgba(138,96,72,0.14)]"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <div className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-clay/60 transition duration-500 group-hover:scale-y-100" />
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-charcoal/10 bg-paper text-clay">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stoneText">{copy}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
