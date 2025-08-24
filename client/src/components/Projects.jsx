import { projects } from "../assets/assets";
import { FaCode } from "react-icons/fa";
import ImageTrail from "../assets/ImageAnimation";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and the innovative solutions I have
              built
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 rounded"
              >
                <div className="h-48 overflow-hidden bg-blue-50">
                  <ImageTrail
                    items={
                      project.images
                        ? project.images
                        : project.image
                        ? [project.image]
                        : ["/vite.svg"] // Fallback if no images are defined
                    }
                    variant={1}
                  />
                  <img
                    src={project.image || project.images?.[0] || "/vite.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300 rounded"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 text-sm whitespace-nowrap rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer whitespace-nowrap rounded"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      Live Demo
                      <i className="fas fa-external-link-alt ml-2"></i>
                    </a>

                    <button
                      className="text-gray-600 flex hover:text-gray-800 font-semibold cursor-pointer whitespace-nowrap rounded"
                      aria-label={`View code for ${project.title}`}
                    >
                      <FaCode className="mr-2 mt-1.5" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
