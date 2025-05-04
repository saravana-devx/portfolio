import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, thumbnail, techStack, description, link }) => {
  console.log(link);
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 w-[350px] md:w-[480px] shadow-lg">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-56 object-cover rounded-md"
      />

      {/* Title & Link */}
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ExternalLink
            size={20}
            className="text-gray-400 hover:text-green-400"
          />
        </a>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap  gap-2 mt-3">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-800 text-xs px-3 py-1 rounded-full text-green-300"
          >
            <div className="flex justify-center items-center gap-x-2">
              {tech.icon}
              {tech.name}
            </div>
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-3 font-semibold">{description}</p>
    </div>
  );
};

export default ProjectCard;
