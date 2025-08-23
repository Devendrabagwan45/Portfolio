import Magnet from "../assets/MagnetAnimation";
import SplitText from "../assets/NavAnimation";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = ({ activeSection }) => {
  const navigationItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <div>
      <div className="cursor"></div>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button ${
                    activeSection === item
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Magnet padding={50} disabled={false} magnetStrength={50}>
                    <SplitText
                      text={item}
                      splitType="chars"
                      delay={30}
                      duration={0.4}
                      from={{ opacity: 0, y: 15 }}
                      to={{ opacity: 1, y: 0 }}
                      ease="power2.out"
                      triggerOnLoad={true}
                      className="text-sm font-medium"
                    />
                  </Magnet>
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
