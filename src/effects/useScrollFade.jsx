import { useState, useEffect, useRef, useCallback } from "react";

export const useScrollFade = (options = {}) => {
  const {
    fadeStart = 0.9,
    fadeInStart = 0.9,
    maxOpacity = 1,
    minOpacity = 0,
    direction = "both",
    navHeight = 0,
  } = options;

  const [maskStyle, setMaskStyle] = useState({});
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(true);

  const calculateMask = useCallback(
    (scrollDirection) => {
      if (!sectionRef.current) return {};

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const overlapWithNav = Math.max(0, navHeight - rect.top);

      let gradientStops = "rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)";

      if (overlapWithNav > 0) {
        const fadePercentage = Math.min(1, overlapWithNav / navHeight);

        const fadeDistance = Math.min(100, rect.height * 0.3);

        const fadeStartPx = Math.max(0, overlapWithNav - fadeDistance);
        const fadeEndPx = overlapWithNav;

        gradientStops = `rgba(0, 0, 0, 0) ${fadeStartPx}px, rgba(0, 0, 0, 1) ${fadeEndPx}px`;
      }

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibleRatio = Math.max(0, visibleHeight / windowHeight);

      let additionalOpacity = maxOpacity;

      if (scrollDirection === "down" || direction === "both") {
        if (visibleRatio < fadeStart) {
          additionalOpacity = (visibleRatio / fadeStart) * maxOpacity;
        }
      }

      if (scrollDirection === "up" || direction === "both") {
        if (visibleRatio > fadeInStart) {
          const fadeInProgress =
            (visibleRatio - fadeInStart) / (1 - fadeInStart);
          additionalOpacity = Math.max(
            additionalOpacity,
            fadeInProgress * maxOpacity
          );
        } else {
          additionalOpacity = Math.max(additionalOpacity, minOpacity);
        }
      }

      const finalOpacity = Math.max(
        minOpacity,
        Math.min(maxOpacity, additionalOpacity)
      );

      return {
        WebkitMaskImage: `linear-gradient(to bottom, ${gradientStops})`,
        maskImage: `linear-gradient(to bottom, ${gradientStops})`,
        opacity: finalOpacity,
      };
    },
    [fadeStart, fadeInStart, maxOpacity, minOpacity, direction, navHeight]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingDown.current = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      const newMaskStyle = calculateMask(
        isScrollingDown.current ? "down" : "up"
      );
      setMaskStyle(newMaskStyle);
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
  }, [calculateMask]);

  return {
    style: maskStyle,
    sectionRef,
    isScrollingDown: isScrollingDown.current,
  };
};
