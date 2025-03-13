import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="text-center relative flex flex-col max-w-6xl mx-auto items-start mt-8 md:mt-32 gap-y-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Intro */}
      <motion.p
        className="text-green-400 text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Hey there! I'm-
      </motion.p>

      {/* Typewriter Effect for Name */}
      <h1 className="text-6xl md:text-8xl font-bold mt-2 tracking-tight text-white">
        <Typewriter
          words={["Saravana Senguthuvar"]}
          // loop={false}
          // cursor
          // cursorStyle="."
        />
      </h1>

      {/* Typewriter Effect for Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mt-4">
        <Typewriter
          words={[
            "Full-Stack Developer.",
            "Frontend Developer",
            "Backend Developer",
            "Tech Enthusiast.",
            // "Open-Source Contributor.",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Fade-in description */}
      <motion.p
        className="text-gray-400 text-xl md:text-2xl mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Passionate about building scalable applications and exploring new
        technologies.
      </motion.p>

      {/* Additional text animation */}
      <motion.div
        className="mt-6 text-gray-400 text-xl space-y-2 text-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <p>💡 Building scalable and high-performance web applications.</p>
        <p>⚙️ Passionate about solving real-world problems with technology.</p>
        <p>🌍 Exploring Cloud, DevOps, and Microservices architectures.</p>
        <p>
          🔧 Crafting seamless user experiences with modern web technologies.
        </p>
      </motion.div>

      {/* Social links with fade-in animation */}
      <motion.div
        className="mt-6 flex justify-center items-center flex-wrap gap-x-2 gap-y-4  md:space-x-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Link
          to="https://github.com/saravana-devx"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
        >
          <FaGithub className="text-green-400" />
          <span className="text-lg font-semibold">Github</span>
        </Link>
        <Link
          to="/"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
        >
          <FaLinkedin className="text-green-400" />
          <span className="text-lg font-semibold">LinkedIn</span>
        </Link>
        <Link
          to="mailto:saravana8261@gmail.com"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2"
        >
          <FaEnvelope className="text-green-400" />
          <span className="text-lg font-semibold">Email</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
