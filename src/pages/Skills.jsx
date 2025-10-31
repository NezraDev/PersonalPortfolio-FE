import React, { useState } from "react";
import { useScrollFade } from "../effects/useScrollFade";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Sample skills data
  const skillsData = [
    {
      id: 1,
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      mastery: 40,
      category: "Frontend",
    },
    {
      id: 2,
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      mastery: 20,
      category: "Frontend",
    },
    {
      id: 3,
      name: "Adobe Photoshop",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
      mastery: 20,
      category: "Tools",
    },
    {
      id: 4,
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      mastery: 30,
      category: "Backend",
    },
    {
      id: 5,
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      mastery: 75,
      category: "Frontend",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      mastery: 88,
      category: "Frontend",
    },
    {
      id: 7,
      name: "Figma",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      mastery: 70,
      category: "Tools",
    },
    {
      id: 8,
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      mastery: 50,
      category: "Tools",
    },
  ];

  const { style, sectionRef } = useScrollFade({
    navHeight: 120,
    fadeDistance: 150,
  });

  const handleSkillClick = (id) => {
    setActiveSkill(activeSkill === id ? null : id);
  };

  const handleSkillHover = (id) => {
    setHoveredSkill(id);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  const isSkillActive = (id) => {
    return activeSkill === id || hoveredSkill === id;
  };

  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-8 inter"
      id="skills"
      style={style}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto relative top-34">
        <div className="text-center mb-20 anton">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            My <span className="text-yellow-500">Skills</span>
          </h1>
          <p className="inter max-w-md mx-auto text-base text-white ism:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Curious about my proficiency level? Click or hover to view.
          </p>
        </div>

        <div className="relative bottom-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="skill-card group relative bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer min-h-[280px] flex flex-col border-transparent border-opacity-20"
              onClick={() => handleSkillClick(skill.id)}
              onMouseEnter={() => handleSkillHover(skill.id)}
              onMouseLeave={handleSkillLeave}
            >
              <div className="flex-1 flex flex-col p-6">
                {/* Skill Icon and Name - Always centered */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="logo-container w-20 h-20 flex items-center justify-center mb-4">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-logo w-full h-full object-contain transition-all duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-yellow-500 mb-2">
                    {skill.name}
                  </h3>

                  <span className="inline-block px-3 py-1 text-xs font-semibold text-yellow-500 border border-yellow-500 rounded-full">
                    {skill.category}
                  </span>
                </div>

                {/* Mastery Level - Show only on hover/click */}
                {isSkillActive(skill.id) && (
                  <div className="w-full mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        Mastery
                      </span>
                      <span className="text-sm font-bold text-yellow-400">
                        {skill.mastery}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.mastery}%`,
                          transform: "translateX(-100%)",
                          animation: "slideInRight 0.8s ease-out forwards",
                          animationDelay: "0.1s",
                        }}
                      ></div>
                    </div>

                    {/* Additional Info on Active/Hover */}
                    <div className="p-3 bg-black bg-opacity-50 rounded-xl border border-yellow-500 border-opacity-30 backdrop-blur-sm">
                      <p className="text-yellow-300 text-sm text-center">
                        {skill.mastery >= 80
                          ? "Expert"
                          : skill.mastery >= 60
                          ? "Advanced"
                          : skill.mastery >= 40
                          ? "Intermediate"
                          : "Beginner"}{" "}
                        level
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-yellow-500 to-black opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 via-10% to-transparent opacity-0 group-hover:opacity-20 group-hover:translate-x-full transition-all duration-1000"></div>

              <div className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-yellow-500">
                <svg
                  className="w-4 h-4 text-yellow-500"
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
          ))}
        </div>
      </div>

      {/* Add CSS animations */}
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
        .skill-card {
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: all 0.5s ease-out;
        }

        .skill-card:hover {
          transform: translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(234, 179, 8, 0.4),
            0 0 40px rgba(234, 179, 8, 0.2);
        }

        /* Logo Animation - Removed flip, kept scale and float */
        .skill-logo {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .skill-card:hover .skill-logo {
          transform: scale(1.1);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: scale(1.1) translateY(0px);
          }
          50% {
            transform: scale(1.1) translateY(-6px);
          }
        }

        /* Glow effect */
        .skill-card::before {
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

        .skill-card:hover::before {
          opacity: 1;
        }

        /* Enhanced glow border */
        .skill-card::after {
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

        .skill-card:hover::after {
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
};

export default Skills;
