import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import { useRef } from "react";

import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import About from "./component/About";
import SkillsSection from "./component/SkillSection";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden w-screen bg-black text-white min-h-screen px-6 select-none">
      <Header
        scrollToSection={scrollToSection}
        projectRef={projectRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <hr />

      <HeroSection />

      <About />

      <SkillsSection skillsRef={skillsRef} />

      <Projects projectRef={projectRef} />

      <Contact contactRef={contactRef} />

      <Footer />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
      />
    </div>
  );
}

export default App;
