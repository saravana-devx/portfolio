import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import resume from "../utils/saravana-resume.pdf";

const navItems = [
  { label: "About", refKey: "aboutRef" },
  { label: "Projects", refKey: "projectRef" },
  { label: "Skills", refKey: "skillsRef" },
  { label: "Writing", refKey: "blogsRef" },
  { label: "Contact", refKey: "contactRef" },
];

const Header = ({
  scrollToSection,
  aboutRef,
  projectRef,
  skillsRef,
  blogsRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refs = { aboutRef, projectRef, skillsRef, blogsRef, contactRef };

  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "saravana-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-left transition hover:border-amber-300/40 hover:bg-white/10"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 text-lg font-bold text-slate-950">
          S
        </span>
        <span>
          <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-slate-300/70">
            Portfolio
          </span>
          <span className="block text-base font-semibold text-slate-50">
            Saravana Senguthuvar
          </span>
        </span>
      </button>

      <nav className="glass-panel hidden items-center gap-2 px-3 py-3 md:flex">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => scrollToSection(refs[item.refKey])}
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300/82 transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          onClick={onButtonClick}
          className="ml-2 inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
        >
          <Download size={16} />
          Resume
        </button>
      </nav>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel absolute inset-x-5 top-20 z-50 flex flex-col gap-2 p-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="rounded-2xl border border-white/6 bg-white/4 px-4 py-3 text-left text-slate-200 transition hover:bg-white/10"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(refs[item.refKey]);
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-300 px-4 py-3 font-semibold text-slate-950"
              onClick={() => {
                setIsOpen(false);
                onButtonClick();
              }}
            >
              <Download size={18} />
              Download Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
