import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("default", {
    month: "short",
    year: "numeric",
  });
}

export function slugToHash(slug: string): string {
  return `#${slug}`;
}

export function stripUrl(url: string): string {
  const { hash, host, pathname, search } = new URL(url);
  const result = host + pathname + search + hash;

  return result.replace(/\/$/, "");
}
