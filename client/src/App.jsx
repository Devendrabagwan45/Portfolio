import React, { useState, useEffect } from "react";

import ExperienceTimeline from "./components/ExperienceTimeLine";
import About from "./components/About";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import { Route, Router } from "react-router-dom";

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
      <Header activeSection={activeSection} />

      <HomeSection />

      <About />

      <Skills />

      <ExperienceTimeline />

      <Projects />

      <Contact />

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
