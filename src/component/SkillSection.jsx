import { Database, Cloud, Cpu, Layout } from "lucide-react";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io";
import { motion } from "framer-motion";
import { IoLogoDocker, IoLogoGitlab, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiApachekafka,
  SiExpress,
  SiNginx,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

const cardVariants = {
  offscreen: (index) => ({
    x: index % 2 === 0 ? -200 : 200,
    opacity: 0,
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

const skills = [
  {
    category: "Frontend",
    icon: <Layout size={28} className="text-green-400" />,
    skills: [
      { name: "HTML", image: <IoLogoHtml5 /> },
      { name: "CSS", image: <IoLogoCss3 /> },
      { name: "TailwindCSS", image: <RiTailwindCssFill /> },
      { name: "JavaScript", image: <IoLogoJavascript /> },
      { name: "TypeScript", image: <BiLogoTypescript /> },
      { name: "React.js", image: <IoLogoReact /> },
      { name: "Redux", image: <SiRedux /> },
    ],
  },
  {
    category: "Backend & APIs",
    icon: <Cpu size={28} className="text-green-400" />,
    skills: [
      { name: "Node.js", image: <IoLogoNodejs /> },
      { name: "Express.js", image: <SiExpress /> },
      { name: "WebSockets", image: <SiSocketdotio /> },
      { name: "Redis", image: <DiRedis /> },
      { name: "Kafka", image: <SiApachekafka /> },
    ],
  },
  {
    category: "Databases & ORM",
    icon: <Database size={28} className="text-green-400" />,
    skills: [
      { name: "MongoDB", image: <BiLogoMongodb /> },
      { name: "MySQL", image: <GrMysql /> },
      { name: "Prisma", image: <SiPrisma /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: <Cloud size={28} className="text-green-400" />,
    skills: [
      { name: "Docker", image: <IoLogoDocker /> },
      { name: "AWS", image: <FaAws /> },
      { name: "GitLab", image: <IoLogoGitlab /> },
      { name: "Nginx", image: <SiNginx /> },
    ],
  },
];

export default function SkillsSection({ skillsRef }) {
  return (
    <div ref={skillsRef} className="mt-32 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-green-400 mb-6">🚀 Skills</h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
        {skills.map((skill, index) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            // viewport={{ amount: 0.2, once: true }}
            viewport={{ amount: window.innerWidth < 768 ? 0.2 : 0.5 }}
            variants={cardVariants}
            custom={index}
            key={index}
            className="bg-gray-800 p-6 md:w-[540px] rounded-xl shadow-lg flex flex-col items-center"
          >
            <span className="w-12 h-8">{skill.icon}</span>
            <h3 className="text-xl font-medium text-green-400">
              {skill.category}
            </h3>
            <div className="flex flex-wrap justify-center items-center mt-3 gap-3">
              {skill.skills.map((s, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex flex-col justify-center items-center mr-4">
                    <span className="text-green-400 text-2xl">{s.image}</span>
                    <p className="text-lg mt-1">{s.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
