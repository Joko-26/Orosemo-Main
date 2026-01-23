"use client";

import { Sun, Moon, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useMemo } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themeIcons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    halloween: <Ghost className="h-5 w-5" />,
  };

  const themes = useMemo(() => {
    const baseThemes = ["light", "dark"];
    const currentDate = new Date();
    if (currentDate.getMonth() === 9) {
      baseThemes.push("halloween");
    }
    return baseThemes;
  }, []);

  function nextTheme() {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  return (
    <Button
      className="cursor-pointer"
      variant="outline"
      size="icon"
      onClick={() => nextTheme()}
    >
      {themeIcons[themes[(themes.indexOf(theme) + 1) % themes.length]] || themeIcons["light"]}
    </Button>
  );
}
