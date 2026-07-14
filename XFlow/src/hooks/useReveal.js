import { useEffect, useRef } from "react";

// Ports the componentDidMount scroll-reveal logic from XFlow Landing.dc.html:
// sections tagged data-reveal start faded/offset and animate in on intersection.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition =
      "opacity 0.75s cubic-bezier(0.2,0.7,0.3,1), transform 0.75s cubic-bezier(0.2,0.7,0.3,1)";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "none";
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return ref;
}
