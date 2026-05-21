import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { profile } from "../data/profile";

const footerLinks = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail }
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-linen/70 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-stoneText">&copy; 2026 Sathwik Golla. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {footerLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${label} link`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white/60 text-stoneText transition hover:-translate-y-0.5 hover:text-clay"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
