import { slugToHash } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function ScrollHashUpdater(): null {
  const observerRef = useRef<IntersectionObserver>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = { threshold: 0.75 };

    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach(({ target: { id } }) => {
          const newHash = slugToHash(id);

          if (window.location.hash !== newHash) {
            history.replaceState(null, "", newHash);
            window.dispatchEvent(new HashChangeEvent("hashchange"));
          }
        });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
}
