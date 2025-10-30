import { useState, useEffect, useRef } from "react";

export const useScrollFade = (options = {}) => {
  const { fadeStart = 0.5, initialOpacity = 1, threshold = 0 } = options;

  const [opacity, setOpacity] = useState(initialOpacity);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      // Calculate how much of the section is visible
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleRatio = Math.max(threshold, visibleHeight / windowHeight);

      let newOpacity = initialOpacity;

      if (visibleRatio < fadeStart) {
        // Smooth fade as visible ratio decreases
        newOpacity = visibleRatio / fadeStart;
      }

      // Ensure opacity stays between 0 and 1
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize opacity

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fadeStart, initialOpacity, threshold]);

  return { opacity, sectionRef };
};
