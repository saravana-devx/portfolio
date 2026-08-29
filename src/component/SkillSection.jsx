import React from "react";
import { motion } from "framer-motion";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoDocker, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiApachekafka,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiGo,
  SiGraphql,
  SiPostgresql,
  SiClickhouse,
  SiRabbitmq,
  SiCloudflare,
  SiPrometheus,
  SiNextdotjs,
} from "react-icons/si";
import TanstackIcon from "../assets/Logos/Tanstack.jsx";
import SectionIntro from "./SectionIntro";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <IoLogoReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "TanStack", icon: <TanstackIcon /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Go", icon: <SiGo /> },
      { name: "Node.js", icon: <IoLogoNodejs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "WebSocket", icon: <SiSocketdotio /> },
      { name: "SSE", icon: <SiSocketdotio /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "ClickHouse", icon: <SiClickhouse /> },
      { name: "MongoDB", icon: <BiLogoMongodb /> },
      { name: "MySQL", icon: <GrMysql /> },
      { name: "Redis", icon: <DiRedis /> },
    ],
  },
  {
    category: "Infra & Cloud",
    skills: [
      { name: "Docker", icon: <IoLogoDocker /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Cloudflare", icon: <SiCloudflare /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Prometheus", icon: <SiPrometheus /> },
    ],
  },
];

export default function SkillsSection({ skillsRef }) {
  return (
    <section ref={skillsRef} className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
      <SectionIntro eyebrow="Skills" heading="Tools I reach for when the work gets serious." />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t border-white/10 pt-6"
          >
            <h3 className="mb-5 font-mono text-sm uppercase tracking-[0.28em] text-amber-300/80">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, j) => (
                <div
                  key={j}
                  className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition-all duration-150 hover:border-emerald-300/40 hover:text-emerald-200"
                >
                  <span className="text-base text-amber-300">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
