import { useRef, useState } from "react";
import { useAsyncEffect } from "rooks";

export interface VantaEffectProps<T extends VantaBaseOptions> {
  /** Additional class names for the background container */
  className?: string;

  /** The Vanta effect to use */
  effect: (options: T) => VantaEffect;

  /** Additional options for the Vanta effect */
  effectOptions: Omit<T, "el">;
}

export function VantaEffect<T extends VantaBaseOptions>({
  className = "",
  effect,
  effectOptions,
}: Readonly<VantaEffectProps<T>>): React.ReactElement {
  const [vantaEffect, setVantaEffect] = useState<null | VantaEffect>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useAsyncEffect(async () => {
    if (!vantaEffect) {
      const [p5, THREE] = await Promise.all([import("p5"), import("three")]);

      setVantaEffect(
        effect({ p5, THREE, ...(effectOptions as T), el: vantaRef.current }),
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [effect, effectOptions]);

  return (
    <div
      className={`relative h-full min-h-[200px] w-full ${className}`}
      ref={vantaRef}
    />
  );
}
