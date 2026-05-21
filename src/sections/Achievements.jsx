import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import CertificationAccordion from "../components/CertificationAccordion.jsx";
import SectionHeader from "../components/SectionHeader";
import { certificationsData } from "../data/certificationsData";

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="section-padding relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="absolute right-16 top-16 h-24 w-24 bg-[radial-gradient(rgba(138,96,72,0.2)_1px,transparent_1px)] [background-size:12px_12px]" />
      <div aria-hidden="true" className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
      <div className="container-page">
        <SectionHeader
          eyebrow="Certifications"
          title="Certifications and recognition"
          copy="A compact view of recent learning milestones, simulations, and competition recognition."
        />
        <CertificationAccordion certifications={certificationsData} />
      </div>
    </AnimatedSection>
  );
}
