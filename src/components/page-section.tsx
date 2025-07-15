import React from "react";
import { VantaEffect, VantaEffectProps } from "./vanta";

export interface PageSectionProps<T extends VantaBaseOptions> {
  children: React.ReactNode;
  id: string;
  vanta: VantaEffectProps<T>;
}

export function PageSection<T extends VantaBaseOptions>({
  children,
  id,
  vanta,
}: PageSectionProps<T>): React.ReactElement {
  return (
    <section className="relative h-screen" id={id}>
      <VantaEffect {...vanta} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
      <div className="absolute inset-y-0 left-0 flex items-center pl-[20%] text-white">
        {children}
      </div>
    </section>
  );
}
