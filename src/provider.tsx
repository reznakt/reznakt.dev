import type { NavigateOptions } from "react-router-dom";

import { HeroUIProvider } from "@heroui/system";
import React from "react";
import { useHref, useNavigate } from "react-router-dom";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
}
