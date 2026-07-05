import { slugToHash } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

interface SectionNavigation {
  /** Slug of the section currently under the vertical center of the viewport. */
  activeSlug: string;

  /** Mark a section active immediately, then let the browser scroll to it. */
  navigateTo: (slug: string) => void;
}

/**
 * Scroll-spy for full-height page sections.
 *
 * The active section is derived directly from layout geometry on every
 * animation frame — it is the last section whose top has scrolled above the
 * middle of the viewport. Because the scroll position changes monotonically,
 * so does the active section: unlike an `IntersectionObserver`, there are no
 * batched, out-of-order callbacks, so the menu never skips or flickers
 * backwards while scrolling between distant sections.
 *
 * When a section is navigated to explicitly, tracking is paused so the active
 * item jumps straight to the target instead of sweeping through everything the
 * smooth scroll passes over.
 */
export function useSectionNavigation(
  slugs: readonly string[],
): SectionNavigation {
  const [activeSlug, setActiveSlug] = useState(slugs[0] ?? "");

  const lockedRef = useRef(false);
  const frameRef = useRef(0);
  const settleRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const setActive = useCallback((slug: string): void => {
    setActiveSlug(slug);

    const hash = slugToHash(slug);

    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }, []);

  useEffect(() => {
    const update = (): void => {
      frameRef.current = 0;

      if (lockedRef.current) {
        return;
      }

      const marker = window.innerHeight / 2;
      let current = slugs[0] ?? "";

      for (const slug of slugs) {
        const element = document.getElementById(slug);

        if (element && element.getBoundingClientRect().top <= marker) {
          current = slug;
        }
      }

      setActive(current);
    };

    const onScroll = (): void => {
      frameRef.current ||= requestAnimationFrame(update);

      // While navigating, keep pushing the unlock back until the scroll stops.
      if (lockedRef.current) {
        clearTimeout(settleRef.current);
        settleRef.current = setTimeout(() => {
          lockedRef.current = false;
        }, 100);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(settleRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [slugs, setActive]);

  const navigateTo = useCallback(
    (slug: string): void => {
      lockedRef.current = true;
      setActive(slug);
      document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });

      // Safety unlock for when the target is already in view and no scroll
      // events fire; an actual scroll re-arms this via `onScroll`.
      clearTimeout(settleRef.current);
      settleRef.current = setTimeout(() => {
        lockedRef.current = false;
      }, 100);
    },
    [setActive],
  );

  return { activeSlug, navigateTo };
}
