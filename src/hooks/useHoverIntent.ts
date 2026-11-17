import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type Point = { x: number; y: number };

/** How long after the last scroll event hover is ignored. */
const SCROLL_QUIET_MS = 200;

/**
 * Hover-intent for navigation dropdowns.
 *
 * Menus open only when a real mouse pointer is moved onto a trigger. When the
 * page scrolls under a resting cursor, browsers fire enter events as the
 * (sticky) header slides beneath it — those are ignored until the pointer has
 * genuinely moved, and any open menu closes as soon as scrolling starts.
 * Touch and keyboard users open menus with a tap/click via `toggle`.
 */
export function useHoverIntent(
  activeKey: string | null,
  setActiveKey: (key: string | null) => void,
  { openDelay = 120, closeDelay = 150 }: { openDelay?: number; closeDelay?: number } = {},
) {
  const openTimer = useRef<ReturnType<typeof setTimeout>>();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const pendingKey = useRef<string | null>(null);
  const lastScrollAt = useRef(0);
  const needsMove = useRef(false);
  const anchor = useRef<Point | null>(null);
  const lastPointer = useRef<Point | null>(null);
  const lastPointerType = useRef<string>("mouse");

  const activeRef = useRef(activeKey);
  activeRef.current = activeKey;
  const setRef = useRef(setActiveKey);
  setRef.current = setActiveKey;

  const clearTimers = useCallback(() => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    pendingKey.current = null;
  }, []);

  /** Returns true once the pointer has really moved since the last scroll. */
  const registerMove = useCallback((p: Point) => {
    if (!needsMove.current) return true;
    if (!anchor.current) {
      anchor.current = p;
      return false;
    }
    if (Math.abs(p.x - anchor.current.x) + Math.abs(p.y - anchor.current.y) > 2) {
      needsMove.current = false;
      anchor.current = null;
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const p = { x: e.clientX, y: e.clientY };
      lastPointer.current = p;
      registerMove(p);
    };
    const onScroll = () => {
      lastScrollAt.current = Date.now();
      needsMove.current = true;
      anchor.current = lastPointer.current;
      clearTimers();
      if (activeRef.current !== null) setRef.current(null);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      clearTimers();
    };
  }, [clearTimers, registerMove]);

  const requestOpen = useCallback(
    (key: string, e: ReactPointerEvent) => {
      lastPointerType.current = e.pointerType;
      if (e.pointerType !== "mouse") return;
      clearTimeout(closeTimer.current);
      if (Date.now() - lastScrollAt.current < SCROLL_QUIET_MS) return;
      if (!registerMove({ x: e.clientX, y: e.clientY })) return;
      if (activeRef.current === key || pendingKey.current === key) return;
      clearTimeout(openTimer.current);
      pendingKey.current = key;
      // Switching between already-open menus is instant; a fresh open waits briefly.
      const delay = activeRef.current !== null ? 0 : openDelay;
      openTimer.current = setTimeout(() => {
        pendingKey.current = null;
        setRef.current(key);
      }, delay);
    },
    [openDelay, registerMove],
  );

  const requestClose = useCallback(
    (e?: ReactPointerEvent) => {
      if (e && e.pointerType !== "mouse") return;
      clearTimeout(openTimer.current);
      pendingKey.current = null;
      clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(() => setRef.current(null), closeDelay);
    },
    [closeDelay],
  );

  const keepOpen = useCallback((e?: ReactPointerEvent) => {
    if (e && e.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
  }, []);

  /** Click / tap on a trigger: touch and keyboard toggle; mouse just ensures it is open. */
  const toggle = useCallback(
    (key: string) => {
      clearTimers();
      if (lastPointerType.current === "mouse" && activeRef.current === key) return;
      setRef.current(activeRef.current === key ? null : key);
    },
    [clearTimers],
  );

  const close = useCallback(() => {
    clearTimers();
    setRef.current(null);
  }, [clearTimers]);

  const triggerProps = useCallback(
    (key: string) => ({
      onPointerDown: (e: ReactPointerEvent) => {
        lastPointerType.current = e.pointerType;
      },
      onPointerEnter: (e: ReactPointerEvent) => requestOpen(key, e),
      onPointerMove: (e: ReactPointerEvent) => requestOpen(key, e),
      onPointerLeave: (e: ReactPointerEvent) => requestClose(e),
    }),
    [requestOpen, requestClose],
  );

  const panelProps = useCallback(
    () => ({
      onPointerEnter: (e: ReactPointerEvent) => keepOpen(e),
      onPointerLeave: (e: ReactPointerEvent) => requestClose(e),
    }),
    [keepOpen, requestClose],
  );

  return { triggerProps, panelProps, toggle, close, keepOpen, requestClose };
}
