import "../index.css";
import { useScrollFade } from "../effects/useScrollFade";

function Home() {
  const { opacity, sectionRef } = useScrollFade({
    fadeStart: 0.6, // Start fading out after 60% of section is scrolled
    fadeInStart: 0.2, // Start fading in when 20% of section becomes visible
    maxOpacity: 1, // Fully opaque when visible
    minOpacity: 0.1, // Never completely invisible
    direction: "both", // Apply effects in both scroll directions
  });

  return (
    <div
      ref={sectionRef}
      id="scroll-fade"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-0"
      style={{ opacity }}
    >
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="absolute top-4 lg:top-6 xl:top-8 2xl:-top-10 left-4 lg:left-6 xl:left-8 2xl:-left-40 anton">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white animate-slide-in-left">
            I'm
          </h2>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold text-white mt-2 lg:mt-4">
            <span className="martin-yellow-sequence-large">
              <span>M</span>
              <span>A</span>
              <span>R</span>
              <span>T</span>
              <span>I</span>
              <span>N</span>
            </span>
          </h2>
        </div>

        <div className="absolute bottom-12 lg:bottom-16 xl:bottom-20 2xl:bottom-24 right-4 lg:right-6 xl:right-8 2xl:-right-35 text-right anton">
          <p className="text-xl lg:text-xl xl:text-2xl 2xl:text-4xl text-white max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg animate-slide-in-right leading-tight">
            Specializing in UX/UI Design and
            <br />
            Front-End Web Development.
          </p>
        </div>

        <div className="absolute bottom-24 lg:bottom-28 xl:bottom-32 2xl:bottom-36 left-4 lg:left-6 xl:left-8 2xl:-left-40 anton">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-white animate-slide-in-left animation-delay-300">
            FRONTEND
          </h2>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white animate-slide-in-left animation-delay-500 mt-2 lg:mt-4">
            DEVELOPER
          </h2>
        </div>

        <div className="absolute top-12 lg:top-16 xl:top-20 2xl:top-24 right-4 lg:right-6 xl:right-8 2xl:-right-35 text-right anton">
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white italic animate-typewriter leading-tight">
            Let's create
            <br />
            something
            <br />
            <span className="animate-pulse-highlight">amazing</span>
            <br />
            <span className="animate-bounce-gentle">together.</span>
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/image7ss.png"
            alt="Martin"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
