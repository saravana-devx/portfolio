import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";

const highlights = [
  { label: "Experience", value: "9+ months in production systems" },
  { label: "Projects", value: "2 personal Go systems" },
  { label: "Primary stack", value: "Go + React" },
  { label: "Location", value: "Mumbai, India" },
];

const About = ({ aboutRef }) => {
  return (
    <motion.div
      ref={aboutRef}
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <SectionIntro
        eyebrow="About"
        heading="I like systems that stay calm under pressure."
        headingClassName="max-w-2xl"
      />

      <div className="border-t border-white/10 pt-8">
        <div className="max-w-4xl space-y-5 section-copy">
          <p>
            I’m a full-stack engineer with a strong backend center of gravity.
            My best work usually sits where product needs, reliability, and
            messy real-world constraints all meet.
          </p>
          <p>
            At <span className="text-amber-300">Human Quotient Pvt. Ltd.</span>,
            I work on Qoneqt and own critical pieces of the analytics
            infrastructure. That includes ClickHouse on bare metal, Cloudflare
            R2, RabbitMQ-based workflows, and the media upload path with
            pre-signed URLs and multi-quality processing.
          </p>
          <p>
            Outside work, I build Go systems that force me to think about
            concurrency, delivery guarantees, and failure modes. I enjoy the
            kind of engineering where correctness matters just as much as
            speed.
          </p>
          <p>
            I also care about the frontend experience. Good UI should feel
            deliberate, readable, and trustworthy instead of just technically
            functional.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="border-t border-white/10 pt-4"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-medium leading-7 text-slate-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
