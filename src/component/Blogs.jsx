import React from "react";
import { motion } from "framer-motion";
import { FaMedium, FaExternalLinkAlt } from "react-icons/fa";
import SectionIntro from "./SectionIntro";

const blogs = [
  {
    title: "Cutting analytics storage costs with ClickHouse tiered storage and Cloudflare R2",
    description:
      "A deep dive into configuring ClickHouse with Cloudflare R2 as remote object storage and a local NVMe SSD cache layer — cutting storage costs significantly while maintaining query performance.",
    link: "https://medium.com/@saravana-devx/how-we-cut-analytics-storage-costs-with-clickhouse-tiered-storage-and-cloudflare-r2-7be7f4d88582",
    tags: ["ClickHouse", "Cloudflare R2", "Analytics", "Infrastructure"],
  },
  {
    title: "Building a distributed rate limiter in Go with Redis Lua scripts",
    description:
      "How I built a production-grade rate limiting sidecar in Go — three algorithms, atomic Lua scripts, cache-aside pattern, and Prometheus metrics.",
    link: "https://medium.com/@saravana-devx/c40e33458c97",
    tags: ["Go", "Redis", "Rate Limiting", "Distributed Systems"],
  },
  {
    title: "Building a distributed job scheduler in Go with RabbitMQ and SSE",
    description:
      "Building a complete job scheduling system in Go — worker pools, dead-letter queues, JobReconciler cron, and real-time updates via Server-Sent Events.",
    link: "https://medium.com/@saravana-devx/917a6316e0f4",
    tags: ["Go", "RabbitMQ", "SSE", "Backend"],
  },
];

const Blogs = ({ blogsRef }) => {
  return (
    <section ref={blogsRef} className="space-y-8">
      <SectionIntro
        eyebrow="Writing"
        heading="Medium posts that match the work I actually do."
        headingClassName="max-w-2xl"
      />

      <div className="space-y-8">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group block border-t border-white/10 pt-6 transition duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <FaMedium className="text-slate-500 transition-colors group-hover:text-amber-300" size={16} />
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                    Medium
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-amber-200">
                    {blog.title}
                </h3>
                <p className="mb-4 mt-3 text-sm leading-7 text-slate-300/78 md:text-base">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <FaExternalLinkAlt
                size={14}
                className="mt-1 shrink-0 text-slate-600 transition-colors group-hover:text-amber-300"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
