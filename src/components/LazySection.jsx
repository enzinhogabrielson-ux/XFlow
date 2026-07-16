import { useState, useEffect, useRef } from "react";

export default function LazySection({ children, height = "100px" }) {
  const [isRendered, setIsRendered] = useState(() => {
    // If there is a hash in the URL on load, bypass lazy load to prevent anchor breaks
    if (typeof window !== "undefined" && window.location.hash) {
      return true;
    }
    return false;
  });
  const ref = useRef(null);

  useEffect(() => {
    if (isRendered) return undefined;

    const forceRender = () => setIsRendered(true);

    // Render immediately if hash changes (user navigates to another section)
    window.addEventListener("hashchange", forceRender);

    // Render immediately if any internal hash link is clicked
    const handleAnchorClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.getAttribute("href")?.startsWith("#")) {
        forceRender();
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // 1. Intersection Observer: render when close to viewport (350px margin)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRendered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // 2. Fallback: render when browser is idle to avoid empty spaces when scrolling extremely fast
    let idleId;
    const loadFallback = () => {
      if (typeof window !== "undefined") {
        if ("requestIdleCallback" in window) {
          idleId = window.requestIdleCallback(() => setIsRendered(true), { timeout: 3000 });
        } else {
          idleId = setTimeout(() => setIsRendered(true), 1500);
        }
      }
    };

    if (document.readyState === "complete") {
      loadFallback();
    } else {
      window.addEventListener("load", loadFallback);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", forceRender);
      document.removeEventListener("click", handleAnchorClick);
      if (idleId) {
        if ("requestIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        } else {
          clearTimeout(idleId);
        }
      }
      window.removeEventListener("load", loadFallback);
    };
  }, [isRendered]);

  return isRendered ? (
    children
  ) : (
    <div ref={ref} style={{ minHeight: height, width: "100%", display: "block" }} />
  );
}
