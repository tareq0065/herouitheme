"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

type ColorTheme = "violet" | "emerald" | "amber" | "rose" | "sky";
type Mode = "light" | "dark";
type ContentWidth = "compact" | "wide";

export interface ThemeSettings {
  colorTheme: ColorTheme;
  mode: Mode;
  semiDark: boolean;
  contentWidth: ContentWidth;
}

interface ThemeSettingsContextValue {
  settings: ThemeSettings;
  setColorTheme: (theme: ColorTheme) => void;
  setMode: (mode: Mode) => void;
  setSemiDark: (value: boolean) => void;
  setContentWidth: (width: ContentWidth) => void;
  reset: () => void;
}

const DEFAULT_SETTINGS: ThemeSettings = {
  colorTheme: "violet",
  mode: "light",
  semiDark: false,
  contentWidth: "wide",
};

const STORAGE_KEY = "heroadmin-theme-settings";

const ThemeSettingsContext = createContext<ThemeSettingsContextValue | null>(
  null,
);

export function ThemeSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<ThemeSettings>(DEFAULT_SETTINGS);
  const [hydrated, setHydrated] = useState(false);

  const prevThemeClassRef = useRef<string | null>(null);

  // hydrate from localStorage on client
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ThemeSettings;
        setSettings((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, []);

  // persist on change
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings, hydrated]);

  // 🔥 Sync theme to <html> so HeroUI + Tailwind tokens work everywhere
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    const themeClass =
      settings.mode === "dark"
        ? `${settings.colorTheme}-dark`
        : settings.colorTheme;

    // 🔥 Remove only the previously-applied theme class
    if (prevThemeClassRef.current) {
      root.classList.remove(prevThemeClassRef.current);
    }

    root.classList.add(themeClass);
    prevThemeClassRef.current = themeClass;

    // Toggle 'dark' class for Tailwind darkMode: 'class'
    if (settings.mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [settings.mode, settings.colorTheme]);

  const value: ThemeSettingsContextValue = {
    settings,
    setColorTheme: (colorTheme) =>
      setSettings((prev) => ({ ...prev, colorTheme })),
    setMode: (mode) => setSettings((prev) => ({ ...prev, mode })),
    setSemiDark: (semiDark) => setSettings((prev) => ({ ...prev, semiDark })),
    setContentWidth: (contentWidth) =>
      setSettings((prev) => ({ ...prev, contentWidth })),
    reset: () => setSettings(DEFAULT_SETTINGS),
  };

  return (
    <ThemeSettingsContext.Provider value={value}>
      <main
        data-content-width={settings.contentWidth}
        data-semidark={settings.semiDark ? "true" : "false"}
        className={clsx("min-h-screen bg-background text-foreground")}
      >
        {children}
      </main>
    </ThemeSettingsContext.Provider>
  );
}

export function useThemeSettings() {
  const ctx = useContext(ThemeSettingsContext);
  if (!ctx) {
    throw new Error(
      "useThemeSettings must be used within ThemeSettingsProvider",
    );
  }
  return ctx;
}
