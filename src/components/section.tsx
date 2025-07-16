import { SectionName } from "@/config";
import React, { useMemo } from "react";
import urlSlug from "url-slug";
import { VantaEffect, VantaEffectProps } from "./vanta";

export interface SectionProps<T extends VantaBaseOptions> {
  children: React.ReactNode;
  name: SectionName;
  vanta: VantaEffectProps<T>;
}

export function Section<T extends VantaBaseOptions>({
  children,
  name,
  vanta,
}: SectionProps<T>): React.ReactElement {
  const slug = useMemo(() => urlSlug(name), [name]);

  return (
    <section className="relative h-screen" id={slug}>
      <VantaEffect {...vanta} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
      <div className="absolute inset-y-0 left-0 flex items-center pl-[20%] text-white">
        {children}
      </div>
    </section>
  );
}
