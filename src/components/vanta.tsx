import { useRef, useState } from "react";
import { useAsyncEffect } from "rooks";

export interface VantaEffectProps<T extends VantaBaseOptions> {
  /** Additional class names for the background container */
  className?: string;

  /** The Vanta effect to use */
  effect: (options: T) => VantaEffect;

  /** Additional options for the Vanta effect */
  effectOptions: WithoutEl<T>;
}

type WithoutEl<T> = Omit<T, "el">;

const DEFAULT_EFFECT_OPTIONS: WithoutEl<VantaBaseOptions> = {
  gyroControls: true,
  mouseControls: true,
  scale: 1,
  scaleMobile: 2,
  touchControls: true,
};

export function VantaEffect<T extends VantaBaseOptions>({
  className = "",
  effect,
  effectOptions,
}: Readonly<VantaEffectProps<T>>): React.ReactElement {
  const [vantaEffect, setVantaEffect] = useState<null | VantaEffect>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useAsyncEffect(async () => {
    if (!vantaEffect) {
      const [p5, three] = await Promise.all([import("p5"), import("three")]);

      setVantaEffect(
        effect({
          p5: p5.default,
          THREE: three,
          ...DEFAULT_EFFECT_OPTIONS,
          ...(effectOptions as T),
          el: vantaRef.current,
        }),
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
      className={`relative w-full h-full min-h-[200px] ${className}`}
      ref={vantaRef}
    />
  );
}
