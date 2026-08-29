import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

const footerLinks = [
  { label: "About", refKey: "aboutRef" },
  { label: "Projects", refKey: "projectRef" },
  { label: "Skills", refKey: "skillsRef" },
  { label: "Writing", refKey: "blogsRef" },
  { label: "Contact", refKey: "contactRef" },
];

export default function Footer({
  scrollToSection,
  aboutRef,
  projectRef,
  skillsRef,
  blogsRef,
  contactRef,
}) {
  const refs = { aboutRef, projectRef, skillsRef, blogsRef, contactRef };

  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 pt-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-mono text-lg uppercase tracking-[0.28em] text-amber-300">
            Saravana
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            © {new Date().getFullYear()} Saravana. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          {footerLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/20 hover:bg-white/5"
              onClick={() => scrollToSection(refs[item.refKey])}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex space-x-4 text-xl text-slate-300">
          <a
            href="https://github.com/saravana-devx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-amber-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/saravana-senguthuvar-548434349"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-amber-300"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:saravana.devx@gmail.com" className="transition-colors hover:text-amber-300">
            <FaEnvelope />
          </a>
          <a
            href="https://medium.com/@saravana-devx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-amber-300"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </footer>
  );
}
