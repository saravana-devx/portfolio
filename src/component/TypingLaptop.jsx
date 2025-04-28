import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";

const TypingLaptop = () => {
  const [text, setText] = useState("");
  const textRef = useRef(""); // Ref to hold current text without triggering re-renders
  const fullText = [
    "Started with curiosity 💡",
    "Still learning new frameworks 📚",
    "Learned through challenges 🛠️",
    "Building for the future 🚀",
    "Every line of code builds the future.",
  ];

  const typingSpeed = 100; // Speed per character in ms
  const pauseBetweenLines = 800; // Pause between lines (in ms)

  useEffect(() => {
    let currentIndex = 0;
    let interval;
    let timeout;

    const typeLine = (line, index) => {
      let charIndex = 0;

      interval = setInterval(() => {
        textRef.current += line[charIndex];
        setText(textRef.current); // Trigger a re-render to display the text
        charIndex++;

        if (charIndex === line.length) {
          clearInterval(interval);

          if (index < fullText.length - 1) {
            timeout = setTimeout(() => {
              currentIndex++;
              typingSequence();
            }, pauseBetweenLines);
          }
        }
      }, typingSpeed);
    };

    const typingSequence = () => {
      if (currentIndex < fullText.length) {
        textRef.current = "";
        setText("");
        typeLine(fullText[currentIndex], currentIndex);
      }
    };

    typingSequence();

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-80 h-52 bg-gray-800 rounded-lg shadow-lg relative overflow-hidden flex flex-col items-center p-4">
      {/* Laptop Screen */}
      <div className="w-full h-36 bg-black rounded-md p-4 text-green-400 font-mono text-sm overflow-hidden">
        {text}
        <span className="inline-block w-1 h-4 bg-green-400 ml-1"></span>
      </div>

      {/* Laptop Base */}
      <div className="w-32 h-2 bg-gray-700 rounded-b-full mt-4"></div>
    </div>
  );
};

export default TypingLaptop;
