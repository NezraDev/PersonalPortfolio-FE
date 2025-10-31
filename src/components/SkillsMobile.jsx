import "../index.css";
import { useScrollFade } from "../effects/useScrollFade";
import { useState } from "react";

function SkillsMobile() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const { style, sectionRef } = useScrollFade({
    navHeight: 120,
    fadeDistance: 150,
  });

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
    <div className="py-8 px-2 inter" id="skills" style={style} ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 anton">
          <h1 className="text-3xl font-bold text-white">
            My <span className="text-yellow-500">Skills</span>
          </h1>
          <p className="inter max-w-md mx-auto text-sm text-white mt-2">
            Curious about my proficiency level? Tap to view.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="skill-card group relative bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer min-h-[200px] flex flex-col border border-yellow-500 border-opacity-30"
              onClick={() => handleSkillClick(skill.id)}
              onMouseEnter={() => handleSkillHover(skill.id)}
              onMouseLeave={handleSkillLeave}
            >
              <div className="flex-1 flex flex-col p-4">
                {/* Skill Icon and Name - Always centered */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="logo-container w-12 h-12 flex items-center justify-center mb-3">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-logo w-full h-full object-contain transition-all duration-500"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-yellow-500 mb-1">
                    {skill.name}
                  </h3>

                  <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-500 border border-yellow-500 rounded-full">
                    {skill.category}
                  </span>
                </div>

                {/* Mastery Level - Show only on hover/click */}
                {isSkillActive(skill.id) && (
                  <div className="w-full mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-gray-300">
                        Mastery
                      </span>
                      <span className="text-xs font-bold text-yellow-400">
                        {skill.mastery}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.mastery}%`,
                          transform: "translateX(-100%)",
                          animation: "slideInRight 0.8s ease-out forwards",
                          animationDelay: "0.1s",
                        }}
                      ></div>
                    </div>

                    {/* Additional Info on Active/Hover */}
                    <div className="p-2 bg-black bg-opacity-50 rounded-xl border border-yellow-500 border-opacity-30 backdrop-blur-sm">
                      <p className="text-yellow-300 text-xs text-center">
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

              <div className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-yellow-500">
                <svg
                  className="w-3 h-3 text-yellow-500"
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
    </div>
  );
}

export default SkillsMobile;
