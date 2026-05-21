import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-paper/[0.86] backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="font-serif text-xl font-semibold text-charcoal">
          Sathwik Golla
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-1 py-2 text-sm font-semibold text-stoneText transition hover:text-clay"
              onClick={() => setActiveLink(link.href)}
            >
              {activeLink === link.href ? (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-clay"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                />
              ) : null}
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white/60 text-charcoal md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-charcoal/10 bg-paper md:hidden">
          <div className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-3 text-sm font-semibold text-stoneText transition hover:bg-white/[0.65] hover:text-clay"
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
