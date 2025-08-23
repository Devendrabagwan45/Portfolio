import BlurText from "../assets/HeaderAnimation";
import { useState, useEffect } from "react";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HomeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20workspace%20with%20laptop%2C%20coffee%2C%20and%20creative%20elements%20in%20soft%20natural%20lighting%20with%20clean%20minimalist%20aesthetic%20and%20subtle%20blue%20accents%20on%20white%20background&width=1440&height=1024&seq=hero1&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div
                className="space-y-4"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                  opacity: Math.max(0, 1 - scrollY * 0.001),
                }}
              >
                <div className="flex text-5xl lg:text-6xl font-bold leading-tight gap-4">
                  <BlurText
                    text="Full Stack"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-gray-900 inline "
                  />{" "}
                  <BlurText
                    text="Developer"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    className="text-blue-600 inline "
                  />
                </div>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Crafting exceptional digital experiences with modern
                  technologies. Passionate about creating scalable solutions
                  that make a difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
