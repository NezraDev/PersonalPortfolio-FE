import "../index.css";
import Resume from "./../../src/assets/Resume.pdf";
import CV from "./../../src/assets/CV.pdf";
import { useScrollFade } from "../effects/useScrollFade";

function AboutMobile() {
  const { style, sectionRef } = useScrollFade({
    navHeight: 120,
    fadeDistance: 150,
  });

  return (
    <div
      id="hero-section"
      className="flex items-center justify-center w-full mb-16"
      style={style}
      ref={sectionRef}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between w-full mb-6">
            <div className="flex-1 pr-3">
              <div className="anton">
                <h2 className="text-xl font-bold leading-tight text-white mb-2 text-end">
                  Hi, I'm{" "}
                  <span className="text-yellow-500">Arwil Martin Paraiso</span>
                </h2>
                <h2 className="text-xl font-bold leading-tight text-white text-end">
                  — a UI/UX design enthusiast.
                </h2>
              </div>
            </div>

            <div className="flex">
              <img
                src="/image7ss.png"
                alt="Martin"
                className="w-40 object-contain"
              />
            </div>
          </div>

          <div className="anton">
            <h3 className="text-lg font-bold text-white mb-3">Who Am I?</h3>

            <div className="inter gap-3 flex flex-col">
              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                I'm a third-year{" "}
                <span className="text-yellow-500">Computer Science </span>{" "}
                student majoring in{" "}
                <span className="text-yellow-500">Intelligent Systems.</span>
              </p>

              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                I'm an enthusiast in{" "}
                <span className="text-yellow-500">UI/UX </span>design with a
                growing passion for front-end development. I enjoy transforming
                ideas into clean, functional, and visually appealing interfaces.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                Currently, I serve as the{" "}
                <span className="text-yellow-500">
                  President of Legion of Lures Esports
                </span>{" "}
                at Laguna State Polytechnic University – Los Baños Campus and as
                a{" "}
                <span className="text-yellow-500">Moonton Student Leader</span>,
                where I strive to promote collaboration, creativity, and
                leadership.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                I also contributed as a{" "}
                <span className="text-yellow-500">front-end developer</span> for
                the Laguna State Polytechnic University – Los Baños Campus
                <span className="text-yellow-500"> Extension Program </span>
                where I helped design and develop user-centered web solutions.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                If you're interested in learning more about my experience, feel
                free to download my{" "}
                <span className="text-yellow-500">CV and résumé </span>below.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={CV}
                  download="Arwil_Martin_Paraiso_CV.pdf"
                  className="bg-black border-2 border-black hover:bg-yellow-500 text-black hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex-1 text-center"
                >
                  <span className="text-white inter text-sm">Download CV</span>
                </a>
                <a
                  href={Resume}
                  download="Arwil_Martin_Paraiso_Resume.pdf"
                  className="bg-black border-2 border-black hover:bg-yellow-500 text-black hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex-1 text-center"
                >
                  <span className="text-white inter text-sm">
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMobile;
