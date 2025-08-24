import React, { useState, useEffect } from "react";
import "./App.css";
import ExperienceTimeline from "./components/ExperienceTimeLine";
import About from "./components/About";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import { Route, Router } from "react-router-dom";
import ClickSpark from "./assets/ClickAnimation";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ClickSpark
        sparkColor="#111"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header activeSection={activeSection} />

        <HomeSection />

        <About />

        <Skills />

        <ExperienceTimeline />

        <Projects />

        <Contact />
      </ClickSpark>

      <style>{`
        .!rounded-button {
          border-radius: 12px;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          min-height: 1024px;
        }
      `}</style>
    </div>
  );
};

export default App;
