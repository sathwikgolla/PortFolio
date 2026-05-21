import { Download } from "lucide-react";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import MagneticButton from "../components/MagneticButton.jsx";
import { profile } from "../data/profile";

export default function Resume() {
  return (
    <AnimatedSection id="resume" className="section-padding bg-charcoal text-paper">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-mist">Resume</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Download my latest resume</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-paper/[0.72]">
              A concise resume covering education, technical skills, projects, certifications, and
              relevant experience for recruiter review.
            </p>
          </div>
          {/* Replace the file at public/Sathwik_Golla_Resume.pdf with the latest resume. */}
          <MagneticButton
            href={profile.resumePath}
            download
            variant="secondary"
            className="bg-paper text-charcoal hover:bg-mist"
          >
            <Download size={17} />
            Download Resume
          </MagneticButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
