import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook that handles smooth scrolling for anchor links and scroll-to-top on route changes
 */
export function useScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);
}

/**
 * Component that handles scrolling - place this inside Router
 */
export function ScrollToAnchor() {
  useScrollToAnchor();
  return null;
}
