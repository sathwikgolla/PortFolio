import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Medal } from "lucide-react";
import Badge from "./Badge.jsx";
import Button from "./Button.jsx";

export default function CertificationAccordion({ certifications }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <div className="space-y-3">
      {certifications.map((certificate, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.article
            key={certificate.title}
            className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white/[0.58] shadow-[0_20px_65px_rgba(39,37,34,0.08)] backdrop-blur"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3, borderColor: "rgba(138,96,72,0.28)" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <button
              type="button"
              className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-clay to-[#c6a178] text-sm font-bold text-paper shadow-[0_10px_24px_rgba(138,96,72,0.25)]">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold text-charcoal">{certificate.title}</span>
                <span className="mt-1 block text-sm font-medium text-stoneText">{certificate.organization}</span>
              </span>
              <Badge tone="gold" className="hidden sm:inline-flex">
                {certificate.date}
              </Badge>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={20} className="text-charcoal" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: "easeInOut" }}
                >
                  <div className="mx-5 mb-5 grid gap-6 rounded-2xl border border-charcoal/10 bg-paper/75 p-5 sm:mx-7 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-5">
                      <InfoBlock title="About" copy={certificate.about} />
                      <div>
                        <h4 className="text-sm font-bold text-charcoal">What I did</h4>
                        <ul className="mt-3 space-y-2">
                          {certificate.whatIDid.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-6 text-stoneText">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <InfoBlock title="Key Takeaway" copy={certificate.keyTakeaway} />
                    </div>

                    <div className="rounded-2xl border border-charcoal/10 bg-white/65 p-4 shadow-soft">
                      <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-xl border border-charcoal/10 bg-linen p-5">
                        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-mist blur-2xl" />
                        <div className="relative">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-clay/15 text-clay">
                            <Medal size={18} />
                          </div>
                          <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-clay">Certificate</p>
                          <h4 className="mt-3 font-serif text-2xl font-semibold text-charcoal">{certificate.title}</h4>
                        </div>
                        <div className="relative rounded-full border border-clay/25 bg-paper px-4 py-2 text-center text-sm font-bold text-clay">
                          {certificate.date}
                        </div>
                      </div>

                      {certificate.certificateUrl ? (
                        <Button href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer" variant="light" className="mt-4 w-full">
                          View Certificate
                          <ExternalLink size={15} />
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}

function InfoBlock({ title, copy }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-charcoal">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-stoneText">{copy}</p>
    </div>
  );
}
