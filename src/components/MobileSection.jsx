import "../index.css";
import Resume from "./../../src/assets/Resume.pdf";
import CV from "./../../src/assets/CV.pdf";
import { useScrollFade } from "../effects/useScrollFade";

function MobileSection() {
  const { style, sectionRef } = useScrollFade({
    navHeight: 120, // Adjust this to match your fixed navigation height
    fadeDistance: 150, // Adjust this to control how far the fade extends
    // You can keep or remove the other options since they're handled differently now
  });
  return (
    <div
      className="w-full  flex-col items-center  justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-transparent"
      style={style}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto w-full relative top-20 mb-16">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center ">
            <p className="text-4xl sm:text-xl md:text-2xl lg:text-3xl text-white mb-1 sm:mb-2 md:mb-3 anton leading-tight animate-fade-in-up">
              FRONTEND DEVELOPER
            </p>
          </div>

          <div className="flex flex-row items-center justify-between w-full mb-4">
            <div className="w-72 relative bottom-12 left-12 text-left">
              <div className="anton">
                <h2 className="text-end text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight animate-slide-in-left">
                  I'm{" "}
                  <span className="martin-yellow-sequence text-xl">
                    <span>M</span>
                    <span>A</span>
                    <span>R</span>
                    <span>T</span>
                    <span>I</span>
                    <span>N</span>
                  </span>
                </h2>
              </div>
            </div>

            <div className="mx-4">
              <img
                src="/image7.png"
                alt="Martin"
                className="relative bottom-10 left-2 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain"
              />
            </div>

            <div className="relative bottom-12 right-7 text-right w-24">
              <p className="text-start text-xs sm:text-sm md:text-base lg:text-lg text-white anton leading-tight animate-fade-in-up animation-delay-200">
                Specializing in UX/UI Design and Front-End Web Development.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl relative bottom-8 sm:text-sm md:text-base font-semibold text-white italic anton leading-tight animate-fade-in-up animation-delay-400">
              Let's create something{" "}
              <span className="animate-pulse-highlight">amazing</span>{" "}
              <span className="animate-bounce-gentle">together</span>.
            </p>
          </div>
        </div>
      </div>

      <div
        id="hero-section"
        className="flex items-center justify-center w-full"
      >
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 py-4">
          <div className="lg:hidden flex flex-col">
            <div className="flex flex-row items-center justify-between w-full mb-8">
              <div className="flex-1 pr-4">
                <div className="anton">
                  <h2 className="text-2xl font-bold leading-tight text-white mb-2 text-end">
                    Hi, I'm{" "}
                    <span className="text-yellow-500">
                      Arwil Martin Paraiso
                    </span>
                  </h2>
                  <h2 className="text-2xl font-bold leading-tight text-white text-end">
                    — a UI/UX design enthusiast.
                  </h2>
                </div>
              </div>

              <div className="flex">
                <img
                  src="/image7ss.png"
                  alt="Martin"
                  className="w-54 sm:w-48 md:w-56 object-contain"
                />
              </div>
            </div>

            <div className="anton">
              <h3 className="text-xl font-bold text-white mb-4">Who Am I?</h3>

              <div className="inter gap-4 flex flex-col">
                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  I'm a third-year{" "}
                  <span className="text-yellow-500">Computer Science </span>{" "}
                  student majoring in{" "}
                  <span className="text-yellow-500">Intelligent Systems.</span>
                </p>

                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  I'm an enthusiast in{" "}
                  <span className="text-yellow-500">UI/UX </span>design with a
                  growing passion for front-end development. I enjoy
                  transforming ideas into clean, functional, and visually
                  appealing interfaces.
                </p>

                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  Currently, I serve as the{" "}
                  <span className="text-yellow-500">
                    President of Legion of Lures Esports
                  </span>{" "}
                  at Laguna State Polytechnic University – Los Baños Campus and
                  as a{" "}
                  <span className="text-yellow-500">
                    Moonton Student Leader
                  </span>
                  , where I strive to promote collaboration, creativity, and
                  leadership.
                </p>

                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  I also contributed as a{" "}
                  <span className="text-yellow-500">front-end developer</span>{" "}
                  for the Laguna State Polytechnic University – Los Baños Campus
                  <span className="text-yellow-500"> Extension Program </span>
                  where I helped design and develop user-centered web solutions.
                </p>

                <p className="text-sm text-gray-300 leading-relaxed text-justify">
                  If you're interested in learning more about my experience,
                  feel free to download my{" "}
                  <span className="text-yellow-500">CV and résumé </span>below.
                </p>

                <div className="flex flex-col gap-4 mt-6">
                  <a
                    href={CV}
                    download="Arwil_Martin_Paraiso_CV.pdf"
                    className="bg-black border-2 border-black hover:bg-yellow-500 text-black hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex-1 text-center"
                  >
                    <span className="text-white inter">Download CV</span>
                  </a>
                  <a
                    href={Resume}
                    download="Arwil_Martin_Paraiso_Resume.pdf"
                    className="bg-black border-2 border-black hover:bg-yellow-500 text-black hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex-1 text-center"
                  >
                    <span className="text-white inter">Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSection;
