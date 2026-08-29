import AnimatedCursor from "react-animated-cursor";
import { useEffect, useRef, useState } from "react";
import "./App.css";

import About from "./component/About";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Projects from "./component/Projects";
import SkillsSection from "./component/SkillSection";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-shell">
      <div className="app-noise" />
      <div className="app-gradient app-gradient-left" />
      <div className="app-gradient app-gradient-right" />

      <div className="relative z-10 min-h-screen px-5 pb-10 pt-6 text-slate-100 sm:px-6 lg:px-10">
        <Header
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          projectRef={projectRef}
          skillsRef={skillsRef}
          blogsRef={blogsRef}
          contactRef={contactRef}
        />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 pb-16 pt-8 md:gap-32 md:pt-14">
          <HeroSection scrollToSection={scrollToSection} contactRef={contactRef} />
          <About aboutRef={aboutRef} />
          <SkillsSection skillsRef={skillsRef} />
          <Projects projectRef={projectRef} />
          <Blogs blogsRef={blogsRef} />
          <Contact contactRef={contactRef} />
        </main>

        <Footer
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          projectRef={projectRef}
          skillsRef={skillsRef}
          blogsRef={blogsRef}
          contactRef={contactRef}
        />
      </div>

      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={34}
          innerScale={0.9}
          outerScale={1.6}
          outerAlpha={0}
          outerStyle={{
            border: "2px solid var(--cursor-color)",
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
        />
      )}
    </div>
  );
}

export default App;
