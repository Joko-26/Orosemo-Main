import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "@/hooks/useTheme.tsx";

export function SnowOverlay() {
  const { theme } = useTheme();

  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 30 },
      particles: {
        number: { value: 200 },
        color: { value: "#ffffff" },
        opacity: { value: { min: 0.2, max: 0.9 } },
        size: { value: { min: 2, max: 5 } },
        move: {
          enable: true,
          direction: "bottom",
          speed: {value: {min: 0.2, max: 1}},
          outModes: { default: "out" },
        },
      },
    }),
    []
  );

  if (theme !== "christmas") return null;

  return (
    <Particles
      id="snow"
      init={init}
      style={{ pointerEvents: "none" }}
      options={options}
    />
  );
}
