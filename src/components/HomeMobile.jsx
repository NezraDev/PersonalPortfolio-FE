import "../index.css";
import { useScrollFade } from "../effects/useScrollFade";

function HomeMobile() {
  const { style, sectionRef } = useScrollFade({
    navHeight: 120,
    fadeDistance: 150,
  });

  return (
    <div
      className="w-full flex-col items-center justify-center px-4 py-8 bg-transparent"
      style={style}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto w-full relative top-20 mb-16">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="text-4xl text-white mb-1 anton leading-tight">
              FRONTEND DEVELOPER
            </p>
          </div>

          <div className="flex flex-row items-center justify-between w-full mb-4">
            <div className="w-72 relative bottom-12 left-12 text-left">
              <div className="anton">
                <h2 className="text-end text-2xl font-bold text-white leading-tight">
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
                className="relative bottom-10 left-2 w-40 object-contain"
              />
            </div>

            <div className="relative bottom-12 right-7 text-right w-24">
              <p className="text-start text-xs text-white anton leading-tight">
                Specializing in UX/UI Design and Front-End Web Development.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl relative bottom-8 font-semibold text-white italic anton leading-tight">
              Let's create something{" "}
              <span className="animate-pulse-highlight">amazing</span>{" "}
              <span className="animate-bounce-gentle">together</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMobile;
