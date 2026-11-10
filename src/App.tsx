import { useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { ThemeToggle } from "./components/ThemeToggle";
import { LinkList } from "./components/LinkList";
import { SocialLinks } from "./components/SocialLinks";
import { Footer } from "./components/Footer";
import type { Theme } from "./types";
import "./App.css";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("devlinks-theme");
  if (stored === "dark" || stored === "light") return stored;
  return "dark";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    window.localStorage.setItem("devlinks-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <main className="container">
        <Profile avatarSrc={theme === "dark" ? "/avatar.jpg" : "/avatar-light.jpg"} />
        <ThemeToggle
          theme={theme}
          onToggle={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        />
        <LinkList />
        <SocialLinks />
        <Footer />
      </main>
    </div>
  );
}