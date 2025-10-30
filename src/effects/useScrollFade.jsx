import { useState, useEffect, useRef, useCallback } from "react";

export const useScrollFade = (options = {}) => {
  const {
    fadeStart = 0.9,
    fadeInStart = 0.9,
    maxOpacity = 2,
    minOpacity = 0,
    direction = "both",
  } = options;

  const [opacity, setOpacity] = useState(maxOpacity);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(true);

  const calculateOpacity = useCallback(
    (scrollDirection) => {
      if (!sectionRef.current) return maxOpacity;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleRatio = Math.max(0, visibleHeight / windowHeight);

      let newOpacity = maxOpacity;

      if (scrollDirection === "down" || direction === "both") {
        if (visibleRatio < fadeStart) {
          newOpacity = (visibleRatio / fadeStart) * maxOpacity;
        }
      }

      if (scrollDirection === "up" || direction === "both") {
        if (visibleRatio > fadeInStart) {
          const fadeInProgress =
            (visibleRatio - fadeInStart) / (1 - fadeInStart);
          newOpacity = Math.max(newOpacity, fadeInProgress * maxOpacity);
        } else {
          newOpacity = Math.max(newOpacity, 0);
        }
      }

      newOpacity = Math.max(minOpacity, Math.min(maxOpacity, newOpacity));

      return newOpacity;
    },
    [fadeStart, fadeInStart, maxOpacity, minOpacity, direction]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      isScrollingDown.current = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const newOpacity = calculateOpacity(
        isScrollingDown.current ? "down" : "up"
      );
      setOpacity(newOpacity);
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", optimizedScroll);
    };
  }, [calculateOpacity]);

  return { opacity, sectionRef, isScrollingDown: isScrollingDown.current };
};
