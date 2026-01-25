"use client";

import { Sun, Moon, Ghost, CandyCane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme.tsx";
import { useMemo } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themeIcons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    halloween: <Ghost className="h-5 w-5" />,
    christmas: <CandyCane className="h-5 w-5" />
  };

  const themes = useMemo(() => {
    const baseThemes = ["light", "dark"];
    const currentDate = new Date();
    if (currentDate.getMonth() === 9) {
      baseThemes.push("halloween");
    } else if (currentDate.getMonth() === 11 || currentDate.getMonth() === 10) {
      baseThemes.push("christmas");
    }
    return baseThemes;
  }, []);

  function nextTheme() {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex] as "light" | "dark" | "halloween");
  }

  return (
    <Button
      className="cursor-pointer"
      variant="outline"
      size="icon"
      onClick={() => nextTheme()}
    >
      {themeIcons[themes[(themes.indexOf(theme) + 1) % themes.length] as keyof typeof themeIcons] || themeIcons["light"]}
    </Button>
  );
}
