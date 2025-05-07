import React from "react";

// import profileImage from "../utils/Images/profile.jpeg";

import { motion } from "framer-motion";
import TypingLaptop from "./TypingLaptop";

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

const About = () => {
  return (
    <motion.div
      className="md:flex max-w-6xl mx-auto mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1">
        <p className="text-4xl font-semibold">
          ⚡ <span className="text-green-400">About Me</span>
        </p>
        <motion.p
          className="text-gray-400 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hey! I'm <span className="text-green-400 font-medium">Saravana</span>,
          a passionate self-taught developer who's been fascinated by computers
          and technology from an early age.
        </motion.p>
        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I started by exploring how things work behind the scenes, which led me
          to dive into coding. Over time, I’ve worked with various languages and
          frameworks, focusing on{" "}
          <span className="text-green-400 font-medium">
            full-stack development
          </span>
          . I’m also learning{" "}
          <span className="text-green-400 font-medium">cloud technologies </span>
          like AWS and expanding my knowledge in backend systems.
        </motion.p>
        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          I'm always looking to{" "}
          <span className="text-green-400 font-medium">
            build impactful projects
          </span>
          , improve performance, and automate workflows. Currently, I'm focused
          on{" "}
          <span className="text-green-400 font-medium">
            Web Development, Microservices, and DevOps
          </span>
          .
        </motion.p>
        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          When I'm not coding, you’ll find me{" "}
          <span className="text-green-400 font-medium">playing games</span> or
          &nbsp;
          <span className="text-green-400 font-medium">
            watching tech talks
          </span>
          !
        </motion.p>
      </div>
      <motion.div
        className="flex-1 flex justify-center items-center mt-16 md:mt-0"
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ amount: 0.8 }}
        viewport={{ amount: 0.2 }}
        variants={cardVariants}
        custom={1}
      >
        {/* <img
          src={profileImage}
          className="max-w-72 h-72 object-cover rounded-full shadow-lg border-4 border-gray-700"
          alt="Profile-Picture"
        /> */}
        <TypingLaptop />
      </motion.div>
    </motion.div>
  );
};

export default About;
