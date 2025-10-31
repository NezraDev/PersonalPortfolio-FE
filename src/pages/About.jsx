import "../index.css";
import Resume from "./../../src/assets/Resume.pdf";
import CV from "./../../src/assets/CV.pdf";
import { useScrollFade } from "../effects/useScrollFade";

const About = () => {
  const { style, sectionRef } = useScrollFade({
    navHeight: 120,
    fadeDistance: 150,
  });
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      ref={sectionRef}
      style={style}
    >
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full">
            <div className="">
              <div className="anton absolute bottom-160 left-40">
                <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-4">
                  Hi, I'm{" "}
                  <span className="text-yellow-500">Arwil Martin Paraiso</span>
                </h2>
                <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-8">
                  — a UI/UX design enthusiast.
                </h2>
              </div>
              <div className="anton absolute bottom-13 left-40">
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                  Who Am I?
                </h3>

                <div className="inter gap-6 flex flex-col">
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed text-justify">
                    I'm a third-year{" "}
                    <span className="text-yellow-500">Computer Science</span>{" "}
                    student majoring in{" "}
                    <span className="text-yellow-500">Intelligent Systems</span>
                    .
                  </p>

                  <p className="text-base lg:text-xl w-250 text-gray-300 leading-relaxed text-justify">
                    I'm an enthusiast in{" "}
                    <span className="text-yellow-500">UI/UX </span> design with
                    a growing passion for front-end development. I enjoy
                    transforming ideas into clean, functional, and visually
                    appealing interfaces.
                  </p>

                  <p className="text-base lg:text-xl w-250 text-gray-300 leading-relaxed text-justify">
                    Currently, I serve as the{" "}
                    <span className="text-yellow-500">
                      President of Legion of Lures Esports
                    </span>{" "}
                    at Laguna State Polytechnic University – Los Baños Campus
                    and as a{" "}
                    <span className="text-yellow-500">
                      Moonton Student Leader
                    </span>
                    , where I strive to promote collaboration, creativity, and
                    leadership.
                  </p>

                  <p className="text-base lg:text-xl w-250 text-gray-300 leading-relaxed text-justify">
                    I also contributed as a{" "}
                    <span className="text-yellow-500">
                      front-end developer{" "}
                    </span>
                    for the Laguna State Polytechnic University – Los Baños
                    Campus{" "}
                    <span className="text-yellow-500">Extension Program</span>,
                    where I helped design and develop user-centered web
                    solutions.
                  </p>

                  <p className="text-base lg:text-xl w-250 text-gray-300 leading-relaxed text-justify ">
                    If you're interested in learning more about my experience,
                    feel free to download my{" "}
                    <span className="text-yellow-500">CV and résumé</span>{" "}
                    below.
                  </p>
                  <div className="flex flex-row gap-4">
                    <div className="flex  gap-4 mt-6">
                      <a
                        href={CV}
                        download="Arwil_Martin_Paraiso_CV.pdf"
                        className="bg-black hover:bg-yellow-500 text-black hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <span className="text-white inter">Download CV</span>
                      </a>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <a
                        href={Resume}
                        download="Arwil_Martin_Paraiso_Resume.pdf"
                        className="bg-black  hover:bg-yellow-500 text-black hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        <span className="text-white inter">
                          Download Resume
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 bottom-4 w-1/2 max-w-2xl ">
        <img
          src="/image7ss.png"
          alt="Martin"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default About;
