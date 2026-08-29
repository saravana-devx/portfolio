import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const stats = [
  { label: "Focus", value: "Distributed systems and backend-heavy products" },
  { label: "Stack", value: "Go, React, Redis, RabbitMQ, ClickHouse" },
  { label: "Currently", value: "Building analytics and media workflows at Qoneqt" },
];

const HeroSection = ({ scrollToSection, contactRef }) => {
  return (
    <motion.div
      className="grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <p className="section-label">Open To Strong Engineering Teams</p>
        <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-50 md:text-7xl lg:text-[5.5rem]">
          Systems that hold up
          <br />
          under real load.
        </h1>

        <div className="mt-6 text-lg text-slate-300/80 md:text-2xl">
          <span className="mr-3 text-slate-500">I work as a</span>
          <span className="font-mono text-amber-300">
            <Typewriter
              words={[
                "Full Stack Engineer",
                "Backend Engineer",
                "Go Developer",
                "Distributed Systems Builder",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </span>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300/82 md:text-xl">
          I’m Saravana Senguthuvar, a backend-first engineer building analytics,
          messaging, media, and workflow systems that hold up under production
          load. I care about correctness, clarity, and interfaces that feel as
          good as the infrastructure behind them.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => scrollToSection(contactRef)}
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-amber-200"
          >
            Start a conversation
          </button>
          <a
            href="https://github.com/saravana-devx"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-300/40 hover:text-white"
          >
            See the work
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-slate-300/74">
          <a href="https://github.com/saravana-devx" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/saravana-senguthuvar-548434349/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10">
            <FaLinkedin size={16} />
          </a>
          <a href="https://medium.com/@saravana-devx" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10">
            <FaMedium size={16} />
          </a>
          <a href="mailto:saravana.devx@gmail.com" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10">
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>

      <div className="border-l border-white/10 pl-6 lg:pt-2 lg:pl-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
            Engineering Snapshot
          </p>
          <span className="inline-flex w-fit items-center gap-2 font-mono text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Shipping
          </span>
        </div>

        <div className="space-y-7">
          {stats.map((item) => (
            <div key={item.label} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-base leading-7 text-slate-200">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
