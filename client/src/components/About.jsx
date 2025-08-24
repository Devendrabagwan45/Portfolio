import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I am a passionate Full Stack Developer with over 2 years of
                  experience in creating innovative web applications. My journey
                  in technology started with a curiosity about how things work,
                  which evolved into a deep love for coding and problem-solving.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I specialize in modern JavaScript frameworks, cloud
                  technologies, and building scalable applications that deliver
                  exceptional user experiences. When I am not coding, you can
                  find me exploring new technologies, contributing to
                  open-source projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                    <span className="text-blue-600 font-bold text-2xl">
                      Devendra Bagwan
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <i className="fas fa-envelope text-blue-600"></i>
                    <span className="font-bold ">Final Year Student</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative ">
                <div className="w-80 h-80 rounded-full overflow-hidden gradient-border shadow-2xl">
                  <img
                    src="/devendra.PNG"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
