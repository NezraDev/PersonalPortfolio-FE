import "../index.css";
import { useScrollFade } from "../effects/useScrollFade";
import { useState, useEffect } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const { style, sectionRef } = useScrollFade({
    navHeight: 120,
    fadeDistance: 150,
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);
  const projects = [
    {
      id: 1,
      title: "BJMP ( Cashless Payment System )",
      techStack: ["PHP", "Laravel", "React.js"],
      description:
        "Contributed as the front-end developer in revising a web application focused on enabling cashless payments for Persons Deprived of Liberty (PDL). Utilized PHP (Laravel) and React.js to enhance the store interface, including features for ordering products, checking account balances via QR code, and completing purchases through a QR-based payment system. This project was part of the LSPU–Los Baños Extension Program.",
      image: "./1.jfif",
      date: "May 2025",
      githubLink: "https://github.com/yourusername/bjmp-payment-system",
    },
    {
      id: 2,
      title: "Batong Malake GAD ( Information Management System )",
      techStack: ["Django", "Javascript", "React.js", "Tailwindcss"],
      description:
        "Contributed as a front-end developer and implemented back-end functionality for login and signup features to a web-based Information Management System (IMS) for Gender and Development data using, Flask Python, Django, JavaScript, Tailwind CSS, Java, and SQL to streamline data procedures. This project was part of the LSPU–Los Baños Extension Program",
      image: "./2.png",
      date: "May 2025",
      githubLink: "",
    },
    {
      id: 3,
      title: "I-Consult ( Symptom Based Disease Prediction System )",
      techStack: ["Flask", "Scikit-learn"],
      description:
        "Contributed as the lead developer for a web application focused on symptom-based disease prediction, utilizing Flask and Scikit-learn for machine learning integration (Multinomial Naive Bayes). Initially developed for a previous GenAI Hackathon in collaboration with Mr. Christian Ortiz and Raymond Jay Dollesin, and later revised as the final project for the Introduction to Intelligent Systems course",
      image: "./5.png",
      date: "May 2025",
      githubLink: "https://github.com/yourusername/i-consult",
    },
    {
      id: 4,
      title: "Fitness GO ( Fitness App )",
      techStack: ["Figma"],
      description:
        "Contributed as a lead designer to a mobile fitness application prototype in Figma as part of an Introduction to Graphics and Visual Computing course. Designed wireframes, high-fidelity mockups, and interactive components to illustrate user flows for workout tracking and fitness-related features",
      image: "./4.png",
      date: "May 2025",
      figmaLink: "https://figma.com/your-prototype-link",
    },
    {
      id: 5,
      title: "Kakampster ( Disaster Preparedness App )",
      techStack: ["React Native"],
      description:
        "Contributed as a front-end lead developer for a disaster preparedness mobile application built with React Native. The app was submitted to AppCon 2024 and qualified in the top 90 out of 178 schools. Designed to keep Filipinos informed and connected during emergencies, it offers real-time alerts, emergency contacts, community forums, disaster updates, incident reporting, donation and volunteer options, and an SOS feature—promoting the Bayanihan spirit through technology.",
      image: "./3.png",
      date: "April 2025",
      githubLink: "https://github.com/yourusername/kakampster",
    },
    {
      id: 6,
      title: "TechVentury ( CRUD Gadget Inventory System )",
      techStack: ["Java", "Springboot", "Tailwindcss"],
      description:
        "Contributed as a full-stack developer to a full-stack gadget inventory management system using Spring Boot, enabling users to track, manage, and access device records. Created as a final project for an Object-Oriented Programming course.",
      image: "./6.png",
      date: "May 2024",
      githubLink: "https://github.com/yourusername/techventory",
    },
    {
      id: 7,
      title: "ELibramo (Library management App)",
      techStack: ["Flask"],
      description:
        "Contributed as a front-end developer to a full-stack library management web application built with Flask, integrating custom sorting algorithms to optimize data processing and book organization. Developed as a research-based final project for the Data Structures and Algorithms course.",
      image: "./7.png",
      date: "December 2024",
    },
    {
      id: 8,
      title: "I-Consult ( Medical Check-up System )",
      techStack: ["Amazon Bedrock", "Amazon Titan"],
      description:
        "Contributed as a project member to a web application focused on patient medical checkups, utilizing Flask and AWS services, including Amazon Bedrock and Amazon Titan. Represented Laguna State Polytechnic University – Los Baños Campus as part of a team in the 'Generative AI Hackathon for Students,' a GenAI Spark competition organized by Pointwest and AWS.",
      image: "./8.png",
      date: "May 2024",
      githubLink: "https://github.com/yourusername/i-consult-medical",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setActiveTooltip(null);
  };

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleGitHubClick = (githubLink) => {
    if (githubLink) {
      window.open(githubLink, "_blank");
    }
  };

  const handleFigmaClick = (figmaLink) => {
    if (figmaLink) {
      window.open(figmaLink, "_blank");
    }
  };

  const showTooltipFor = (type) => {
    setActiveTooltip(type);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div
      className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 flex-1"
      id="projects"
      ref={sectionRef}
      style={style}
    >
      <div className="max-w-7xl mx-auto">
        <div className=" relative top-8 text-center mb-16 anton">
          <h1 className="text-6xl font-bold text-yellow-500 mb-6 drop-shadow-lg">
            <span className="text-white">Here are some of my</span>{" "}
            Collaborative Projects
          </h1>
          <p className="text-2xl text-yellow-500 drop-shadow">
            <span className="text-white">- that I've created as a </span> UI /
            UX Designer <span className="text-white"> and </span> Frontend
            Developer
          </p>
        </div>

        <div
          className={`inter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-300 ${
            isModalOpen ? "blur-sm" : ""
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer min-h-[380px] flex flex-col border-transparent"
              onClick={() => openModal(project)}
            >
              <div className="h-40 bg-gradient-to-br from-yellow-500 to-black relative overflow-hidden flex-shrink-0">
                {!imageErrors[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(project.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-black">
                    <div className="text-yellow-500 text-center p-4">
                      <svg
                        className="w-12 h-12 mx-auto mb-2 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-sm text-yellow-500">Project Image</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-yellow-500 text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-md font-semibold mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-yellow-400 text-sm">
                      Click to view details
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between p-6 text-yellow-500">
                <div className="min-h-[72px] flex flex-col justify-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black bg-opacity-70 backdrop-blur-sm rounded-full text-sm font-medium border border-yellow-500 border-opacity-50 text-yellow-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-black bg-opacity-70 backdrop-blur-sm rounded-full text-sm font-medium border border-yellow-500 border-opacity-50 text-yellow-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 mb-4">
                  <p className="text-yellow-300 text-opacity-90 text-justify text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-yellow-500 border-opacity-30">
                  <div className="text-yellow-500 font-semibold text-sm drop-shadow">
                    <div className="text-yellow-400">{project.date}</div>
                  </div>
                  <div className="w-10 h-10 bg-black bg-opacity-70 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border border-yellow-500">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-yellow-500 to-black opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 via-10% to-transparent opacity-0 group-hover:opacity-20 transform group-hover:translate-x-full transition-all duration-1000"></div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div
              className="absolute inset-0 bg-opacity-50 backdrop-blur-sm transition-all duration-300"
              onClick={closeModal}
              aria-hidden="true"
            />

            <div className="relative z-10 bg-black bg-opacity-90 backdrop-blur-lg rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-yellow-600 border-opacity-50 transform transition-all duration-300 scale-95 hover:scale-100">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-yellow-400 text-lg font-semibold">
                    {selectedProject.date}
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 bg-black bg-opacity-70 rounded-full p-2 backdrop-blur-sm border border-yellow-600 border-opacity-50 hover:scale-110 transform transition-transform"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <h2 className="text-xl font-bold text-yellow-300 mb-4 drop-shadow-lg text-center">
                  {selectedProject.title}
                </h2>

                <div className="h-48 bg-gradient-to-br from-yellow-500 to-black rounded-xl mb-4 relative overflow-hidden">
                  {!imageErrors[selectedProject.id] ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(selectedProject.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-700 to-black">
                      <div className="text-yellow-500 text-center p-4">
                        <svg
                          className="w-12 h-12 mx-auto mb-2 text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <p className="text-yellow-400">Project Image</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3 drop-shadow">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black bg-opacity-70 backdrop-blur-sm rounded-full text-sm font-medium border border-yellow-500 border-opacity-50 text-yellow-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3 drop-shadow">
                    Description
                  </h3>
                  <p className="text-yellow-300 text-justify leading-relaxed text-sm bg-black bg-opacity-50 p-4 rounded-xl border border-yellow-600 border-opacity-50 backdrop-blur-sm">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-yellow-600 border-opacity-50">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <div
                        onClick={() =>
                          handleGitHubClick(selectedProject.githubLink)
                        }
                        disabled={!selectedProject.githubLink}
                        className={`cursor-pointer w-full px-3 py-3 rounded-full text-sm font-medium border ${
                          selectedProject.githubLink
                            ? "bg-yellow-500 border-yellow-500 text-black hover:bg-yellow-600 hover:border-yellow-600 transition-colors"
                            : "bg-gray-500 border-gray-500 text-gray-300 cursor-not-allowed"
                        }`}
                        onMouseEnter={() =>
                          !selectedProject.githubLink &&
                          showTooltipFor("github")
                        }
                        onMouseLeave={hideTooltip}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub Repository
                        </div>
                      </div>

                      {activeTooltip === "github" &&
                        !selectedProject.githubLink && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg shadow-lg z-20">
                            GitHub repo is unavailable
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                          </div>
                        )}
                    </div>

                    {selectedProject.figmaLink && (
                      <div className="relative">
                        <div
                          onClick={() =>
                            handleFigmaClick(selectedProject.figmaLink)
                          }
                          className="cursor-pointer w-full px-3 py-3 rounded-full text-sm font-medium border bg-yellow-500 border-black hover:bg-yellow-600 transition-colors"
                        >
                          <div className="flex items-center justify-center gap-2 text-black">
                            <svg
                              className="w-5 h-5"
                              fill="black"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15.712 12.777H8.288c-.295 0-.533.238-.533.533v7.378c0 .295.238.533.533.533h7.424c.295 0 .533-.238.533-.533v-7.378c0-.295-.238-.533-.533-.533zM12.777 1.5H8.288c-.295 0-.533.238-.533.533v7.378c0 .295.238.533.533.533h4.489c.295 0 .533-.238.533-.533V2.033c0-.295-.238-.533-.533-.533zM5.344 6.344H2.033c-.295 0-.533.238-.533.533v7.378c0 .295.238.533.533.533h3.311c.295 0 .533-.238.533-.533V6.877c0-.295-.238-.533-.533-.533zM22.967 6.344h-3.311c-.295 0-.533.238-.533.533v7.378c0 .295.238.533.533.533h3.311c.295 0 .533-.238.533-.533V6.877c0-.295-.238-.533-.533-.533z" />
                            </svg>
                            Figma Prototype
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }

        /* 3D Card Animations */
        .project-card {
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: all 0.5s ease-out;
        }

        .project-card:hover {
          transform: translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(234, 179, 8, 0.4),
            0 0 40px rgba(234, 179, 8, 0.2);
        }

        /* Glow effect */
        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(234, 179, 8, 0.1) 0%,
            transparent 50%,
            rgba(234, 179, 8, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          border-radius: 1rem;
          z-index: 1;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        /* Enhanced glow border */
        .project-card::after {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            45deg,
            #fbbf24,
            #f59e0b,
            #d97706,
            #f59e0b,
            #fbbf24
          );
          border-radius: 1.1rem;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
          filter: blur(8px);
        }

        .project-card:hover::after {
          opacity: 0.6;
          animation: glow 2s linear infinite;
        }

        @keyframes glow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
