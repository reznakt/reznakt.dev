import { useEffect, useState } from "react";

interface UseHashOptions {
  allowedHashes?: string[];
  defaultHash: string;
}

export function useHash({
  allowedHashes = [],
  defaultHash,
}: UseHashOptions): string {
  const [hash, setHash] = useState(() => {
    const currentHash = window.location.hash;
    return allowedHashes.includes(currentHash) ? currentHash : defaultHash;
  });

  useEffect(() => {
    const onHashChange = (): void => {
      const newHash = window.location.hash;

      if (allowedHashes.includes(newHash)) {
        setHash(newHash);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [allowedHashes, defaultHash]);

  return hash;
}
