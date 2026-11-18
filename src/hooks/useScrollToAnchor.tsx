import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/** How long to wait for a hash target to appear (lazy sections, animations). */
const HASH_WAIT_MS = 2000;

/**
 * Scroll handling on route changes.
 *
 * - Moving to a new page: start at the top instantly. A smooth scroll from the
 *   bottom of a long page gets interrupted as the new page renders, which left
 *   visitors looking at the footer.
 * - Link with a hash (e.g. /apply/global-city-campus#apply-form): wait until
 *   that element exists, then bring it into view — instantly on a new page,
 *   smoothly for jump links within the same page.
 */
export function useScrollToAnchor() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const pageChanged = previousPath.current !== pathname;
    previousPath.current = pathname;
    const behavior: ScrollBehavior = pageChanged ? ("instant" as ScrollBehavior) : "smooth";

    if (pageChanged) window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    if (!hash) {
      if (!pageChanged) window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const started = Date.now();
    let frame = 0;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ block: "start", behavior });
        return;
      }
      if (Date.now() - started < HASH_WAIT_MS) {
        frame = requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}

/**
 * Component that handles scrolling - place this inside Router
 */
export function ScrollToAnchor() {
  useScrollToAnchor();
  return null;
}
