import { useState, useEffect } from "react";

export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleTopEdge = () => {
      if (window.scrollY < 120) {
        setActive(ids[0]);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        if (window.scrollY < 120) {
          setActive(ids[0]);
          return;
        }

       
        const mostVisible = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        );
        setActive(mostVisible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", handleTopEdge, { passive: true });
    handleTopEdge();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopEdge);
    };
  }, [ids]);

  return active;
}