import experiences from "../assets/assets";
import SpotlightCard from "../assets/CardAnimation";

const ExperienceTimeline = () => (
  <section id="experience" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Experience
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My journey through various roles and companies, building expertise and
          delivering impactful solutions
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
      </div>
      {experiences.map((exp, index) => (
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div
            key={exp.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 bg-blue-600 text-white px-3 py-1 text-sm font-semibold whitespace-nowrap !rounded-button">
              {exp.year}
            </div>
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
              <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 !rounded-button">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-lg font-semibold text-blue-600 mb-1">
                      {exp.company}
                    </div>
                    <div className="text-gray-500 mb-2">{exp.location}</div>
                    <div className="text-sm text-gray-400 italic">
                      {exp.duration}
                    </div>
                  </div>
                  <div className="text-blue-600 text-2xl">
                    <i className="fas fa-briefcase"></i>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-gray-600"
                      >
                        <i className="fas fa-chevron-right text-blue-600 text-xs mt-1.5"></i>
                        <span className="text-sm leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-gray-600"
                      >
                        <i className="fas fa-star text-yellow-500 text-xs mt-1.5"></i>
                        <span className="text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium whitespace-nowrap !rounded-button"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      ))}
    </div>
  </section>
);

export default ExperienceTimeline;
