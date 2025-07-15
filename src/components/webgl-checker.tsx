import { useEffect } from "react";
import { useLocalstorageState } from "rooks";
import { isWebGL2Supported, isWebGLSupported } from "webgl-detector";

export function WebGlChecker(): null {
  const [skipWebGlCheck, setSkipWebGlCheck] = useLocalstorageState<boolean>(
    "skipWebGlCheck",
    false,
  );

  useEffect(() => {
    if (!skipWebGlCheck && !isWebGLSupported() && !isWebGL2Supported()) {
      setSkipWebGlCheck(true);
      alert(
        [
          "Your browser does not support WebGL.",
          "WebGL is recommended for the best experience on this site.",
        ].join("\n\n"),
      );
    }
  }, [skipWebGlCheck, setSkipWebGlCheck]);

  return null;
}
