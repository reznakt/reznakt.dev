import { useEffect, useRef } from "react";

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
  const effectInstanceRef = useRef<null | VantaEffect>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const state = { cancelled: false };

    void (async () => {
      const [p5, three] = await Promise.all([import("p5"), import("three")]);

      if (state.cancelled || !vantaRef.current) {
        return;
      }

      effectInstanceRef.current = effect({
        p5: p5.default,
        THREE: three,
        ...DEFAULT_EFFECT_OPTIONS,
        ...(effectOptions as T),
        el: vantaRef.current,
      });
    })();

    return () => {
      state.cancelled = true;

      if (effectInstanceRef.current) {
        effectInstanceRef.current.destroy();
        effectInstanceRef.current = null;
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
