import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-400">{`{S}`}</h2>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Saravana. All rights reserved.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-green-400 transition-colors"
          >
            Projects
          </Link>
          <Link to="/skills" className="hover:text-green-400 transition-colors">
            Skills
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://github.com/saravana-devx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-green-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/saravana-senguthuvar-548434349"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-green-400 transition-colors" />
          </a>
          <a href="mailto:saravana8261@gmail.com">
            <FaEnvelope className="hover:text-green-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
