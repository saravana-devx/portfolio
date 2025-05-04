import React from "react";

import project1Image from "../utils/Images/project1.png";
import project2Image from "../utils/Images/project2.png";

import { MoveRight } from "lucide-react";
import { IoLogoReact } from "react-icons/io5";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { SiJsonwebtokens, SiMicroeditor, SiTypescript } from "react-icons/si";
import { FaStripeS } from "react-icons/fa";

const projects = [
  {
    title: "EduCrew (E-Learning Platform)",
    thumbnail: project1Image,
    tools: [
      {
        icon: <IoLogoReact />,
        name: "MERN",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <IoLogoReact />,
        name: "TanStack",
      },
      // {
      //   icon: <SiJsonwebtokens />,
      //   name: "JWT",
      // },
      {
        icon : <FaStripeS />,
        name : "Stripe"
      }
    ],
    description:
      "A MERN-based E-Learning Platform enabling users to enroll in courses, track progress, and manage learning efficiently. It includes student, instructor, and admin dashboards, along with secure payment integration. Instructors can create, update, and delete courses easily. The backend is secured with Helmet, Morgan, and Rate Limiting to prevent attacks.",
    link: "https://educrew.onrender.com/",
  },

  {
    title: "InkVerse (Blog Website)",
    thumbnail: project2Image,
    tools: [
      {
        icon: <IoLogoReact />,
        name: "MERN",
      },
      {
        icon: <SiJsonwebtokens />,
        name: "JWT",
      },
      {
        icon: <SiMicroeditor />,
        name: "Editor.js",
      },
    ],
    description:
      "A dynamic blogging platform where users can create, edit, and share articles. It includes rich text editing (Editor.js), user authentication, and JWT-based authorization. The site is optimized for SEO and performance, allowing bloggers to reach a wider audience. Built with MERN stack, it supports features like draft saving, comment sections, and category-based filtering",
    link: "https://inkverse-frontend.onrender.com/",
  },
];

const cardVariants = {
  offscreen: (index) => ({
    x: index % 2 === 0 ? -200 : 200, // Left for even, right for odd
    opacity: 0, // Initially invisible
  }),
  onscreen: {
    x: 0, // Move to the original position
    opacity: 1, // Fully visible
    transition: {
      type: "tween", // Smooth transition instead of spring
      ease: "easeIn", // Ease-in effect
      duration: 0.8, // Animation duration
    },
  },
};

const Projects = ({ projectRef }) => {
  return (
    <div className="mt-32 max-w-6xl mx-auto " ref={projectRef}>
      <h2 className="text-4xl font-bold text-green-400 leading-tight">
        All Creative Works
      </h2>

      <p className="text-gray-400 text-lg">
        Here are some of the projects I have worked on.
      </p>

      <p className="flex items-center gap-2 font-semibold mb-4 text-green-400 hover:text-green-300 transition mt-3 text-lg">
        Explore more <MoveRight />
      </p>

      <motion.div className="flex flex-wrap justify-center items-center gap-6">
        {projects.map((project, index) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            // viewport={{ amount: 0.8 }}
            viewport={{ amount: 0.2 }}
            variants={cardVariants}
            custom={index}
            key={index}
          >
            <ProjectCard
              title={project.title}
              thumbnail={project.thumbnail}
              techStack={project.tools}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
