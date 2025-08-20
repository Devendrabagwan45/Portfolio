const experiences = [
  {
    id: 1,
    title: "Mern Stack Developer",
    company: "Proxenix",
    // location: "San Francisco, CA",
    duration: "April - June 2025",
    year: "2025",
    responsibilities: [
      " Designed and implemented a real-time chat application using the MERN stack, leveraging the strengths of each technology to deliver a fast, scalable, and user-friendly solution.",
    ],
    achievements: [
      "Increased application performance by 40% through optimization",
      "Successfully delivered 15+ projects on time and within budget",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "UnizzTexh",
    // location: "New York, NY",
    duration: "November 2024",
    year: "2024",
    responsibilities: [
      "Developed responsive web applications using modern JavaScript frameworks",

      "Optimized web applications for maximum speed and scalability",
      "Integrated third-party APIs and payment gateways",
    ],
    achievements: [
      "Reduced page load times by 50% through performance optimization",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
export default experiences;

export const skills = [
  { name: "React", level: 80, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },

  { name: "Express", level: 82, category: "Backend library" },

  { name: "MongoDB", level: 78, category: "Database" },
  { name: "JS", level: 90, category: "Backend" },
  { name: "DSA", level: 50, category: "Problem solving" },
];

export const projects = [
  {
    id: 1,
    title: "Personal Financial Tracker",
    description:
      "Built a personal financial tracker using MERN stack. Users can add expenses/incomes, track financials, and manage transactions. Features a user-friendly interface with React.js, data management with MongoDB, and backend API with Express.js/Node.js for efficient financial tracking.",

    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/PFT.png",
    link: "https://personal-financial-t.vercel.app/",
  },
  {
    id: 2,
    title: "Real Time Chat Application",
    description:
      "A full-stack web application that allows users to communicate in real-time, featuring user authentication, message history, and a responsive design.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "socket.io",
      "alot of Libraries",
    ],
    image: "/Chat.png",
    link: "https://chat-app-nu-eight-19.vercel.app/login",
  },
  {
    id: 3,
    title: "AI Powered Code Reviewer",
    description:
      "An AI-powered code review tool that analyzes code quality, suggests improvements, and integrates with popular version control systems.",
    technologies: ["React", "Express", "MongoDB", "google-gemini-API"],
    image: "/AI.png",
    link: "https://code-reviewer-kappa-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that provides real-time weather updates, forecasts, and location-based information using a third-party API.",
    technologies: ["HTML", "CSS", "JS", "Weather API"],
    image: "/weather.png",
  },
];
