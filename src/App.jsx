import React from "react";
import About from "./sections/About.jsx";
import Achievements from "./sections/Achievements.jsx";
import Contact from "./sections/Contact.jsx";
import Education from "./sections/Education.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import MouseGlow from "./components/MouseGlow.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./sections/Projects.jsx";
import Resume from "./sections/Resume.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Skills from "./sections/Skills.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-charcoal">
      <ScrollProgress />
      <MouseGlow />
      <div aria-hidden="true" className="background-grid pointer-events-none absolute inset-x-0 top-0 z-0 h-[720px]" />
      <div aria-hidden="true" className="quiet-pulse pointer-events-none absolute right-[-10rem] top-28 z-0 h-72 w-72 rounded-full bg-mist blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-9rem] top-[38rem] z-0 h-80 w-80 rounded-full bg-clay/10 blur-3xl" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
