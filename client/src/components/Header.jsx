import React from "react";

const scrollToSection = (sectionId = string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = ({ activeSection }) => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button ${
                    activeSection === item
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden cursor-pointer">
              <i className="fas fa-bars text-xl text-gray-900"></i>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
