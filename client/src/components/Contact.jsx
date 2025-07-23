import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let us discuss how we can work
              together to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center !rounded-button">
                      <i className="fas fa-envelope text-white">
                        {" "}
                        <SiGmail />
                      </i>
                    </div>

                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">
                        devendrabagwan78@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center !rounded-button">
                      <i className="fas fa-phone text-white">
                        <FaPhoneAlt />
                      </i>
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-300">7049062114</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center !rounded-button">
                      <i className="fas fa-map-marker-alt text-white">
                        <CiLocationOn />
                      </i>
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-gray-300">Mukata, near Sanver</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/Devendrabagwan45">
                    <button className="w-12 h-12 bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 cursor-pointer !rounded-button">
                      <i className="fab fa-github text-white">
                        <FaGithub />
                      </i>
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/devendra-bagwan-0216b2318">
                    <button className="w-12 h-12 bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 cursor-pointer !rounded-button">
                      <i className="fab fa-linkedin text-white">
                        <CiLinkedin />
                      </i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors duration-300 !rounded-button"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors duration-300 !rounded-button"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors duration-300 !rounded-button"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors duration-300 !rounded-button"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-colors duration-300 resize-none !rounded-button"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
