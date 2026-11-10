import type { Theme } from "../types";
import { PiSun, PiMoon } from "react-icons/pi";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__thumb">
        {isDark ? <PiMoon size={18} /> : <PiSun size={18} />}
      </span>
    </button>
  );
}