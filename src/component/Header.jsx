import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import resume from "../utils/saravana-resume.pdf";

const Header = ({ scrollToSection, projectRef, skillsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "saravana-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="text-4xl font-bold">
        <span className="opacity-50">&#123;</span>
        <span className="font-bold">S</span>
        <span className="opacity-50">&#125;</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-x-8 font-bold">
        <Link to="/" className="hover:text-green-400">
          Home
        </Link>
        <Link
          to="/projects"
          onClick={() => scrollToSection(projectRef)}
          className="hover:text-green-400"
        >
          Projects
        </Link>
        <Link
          to="/skills"
          onClick={() => scrollToSection(skillsRef)}
          className="hover:text-green-400"
        >
          Skills
        </Link>
        <Link
          to="/contact"
          onClick={() => scrollToSection(contactRef)}
          className="hover:text-green-400"
        >
          Contact
        </Link>
        <Link
          onClick={onButtonClick}
          className="border-[0.5px] rounded-lg py-2 px-4 hover:text-green-400 bg-green-400 hover:bg-white"
        >
          Download CV
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col space-y-6 py-6 text-center md:hidden z-50"
          >
            <Link
              to="//portfolio/"
              className="hover:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portfolio/projects"
              className="hover:text-green-400"
              onClick={() => {
                setIsOpen(false);
                scrollToSection(projectRef);
              }}
            >
              Projects
            </Link>
            <Link
              to="/portfolio/skills"
              className="hover:text-green-400"
              onClick={() => {
                setIsOpen(false);
                scrollToSection(skillsRef);
              }}
            >
              Skills
            </Link>
            <Link
              to="/portfolio/contact"
              className="hover:text-green-400"
              onClick={() => {
                setIsOpen(false);
                scrollToSection(contactRef);
              }}
            >
              Contact
            </Link>
            <Link
              to="/"
              className="border-[0.5px] rounded-lg py-2 px-4 hover:text-green-400 bg-green-400 hover:bg-white mx-12"
              onClick={() => {
                setIsOpen(false);
                onButtonClick();
              }}
            >
              Download CV
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
