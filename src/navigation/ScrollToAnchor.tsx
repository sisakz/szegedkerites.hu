import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          const yOffset = -64;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
