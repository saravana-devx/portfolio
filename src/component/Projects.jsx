import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiGo, SiPostgresql, SiRabbitmq, SiPrometheus } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { IoLogoDocker } from "react-icons/io5";
import SectionIntro from "./SectionIntro";

const projects = [
  {
    title: "Distributed Rate Limiter",
    period: "Jul 2026 – Aug 2026",
    description:
      "Production-grade rate limiting sidecar in Go. Implements fixed window, sliding window log, and token bucket algorithms as atomic Redis Lua scripts — eliminating race conditions under concurrent load. Cache-aside pattern keeps the hot-path to two Redis calls with no DB query on cached requests. API key auth middleware, Prometheus metrics, and Retry-After headers on 429 responses.",
    tags: ["Go", "Redis", "PostgreSQL", "Docker", "Prometheus", "Lua"],
    icons: [
      <SiGo key="go" />,
      <DiRedis key="redis" />,
      <SiPostgresql key="postgresql" />,
      <IoLogoDocker key="docker" />,
      <SiPrometheus key="prometheus" />,
    ],
    github: "https://github.com/saravana-devx/Distributed-rate-limiter",
    highlights: [
      "3 algorithms as atomic Lua scripts",
      "Cache-aside — 2 Redis calls per request",
      "Prometheus metrics + Retry-After header",
    ],
  },
  {
    title: "JobFlow — Distributed Job Scheduler",
    period: "May 2026 – Jun 2026",
    description:
      "Complete background job scheduling service in Go with RabbitMQ as the message broker. Worker pool, priority queuing, per-job retry limits, and dead-letter queue for failed jobs. JobReconciler cron closes the dual-write gap between DB commit and queue publish. Real-time SSE updates via Redis pub/sub. JWT auth with JTI store for token revocation.",
    tags: ["Go", "RabbitMQ", "Redis", "PostgreSQL", "Docker", "SSE"],
    icons: [
      <SiGo key="go" />,
      <SiRabbitmq key="rabbitmq" />,
      <DiRedis key="redis" />,
      <SiPostgresql key="postgresql" />,
      <IoLogoDocker key="docker" />,
    ],
    github: "https://github.com/saravana-devx/Jobflow",
    highlights: [
      "JobReconciler closes dual-write gap",
      "Real-time SSE via Redis pub/sub",
      "JWT + JTI store for token revocation",
    ],
  },
];

const Projects = ({ projectRef }) => {
  return (
    <section ref={projectRef} className="space-y-10">
      <SectionIntro
        eyebrow="Projects"
        heading="Systems built to survive real operational edge cases."
        headingClassName="max-w-2xl"
      />

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 font-mono text-sm text-slate-500">{project.period}</p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono text-sm text-slate-300 transition-all duration-200 hover:border-amber-300/40 hover:text-amber-200"
              >
                <FaGithub size={14} /> View on GitHub
              </a>
            </div>

            <p className="mb-6 text-base leading-8 text-slate-300/82">{project.description}</p>

            <div className="flex flex-col gap-5 border-t border-white/8 pt-5">
              <ul className="space-y-1">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-sm text-slate-400">
                    <span className="text-amber-300">→</span> {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 text-xl text-slate-400">
                {project.icons.map((icon, i) => (
                  <span key={i} className="rounded-full border border-white/8 p-3">
                    {icon}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
