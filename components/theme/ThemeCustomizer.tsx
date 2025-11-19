"use client";

import { useEffect } from "react";
import { Button, Switch, Divider } from "@heroui/react";
import { X, Palette, LayoutTemplate, Moon, SunMedium } from "lucide-react";
import { useThemeSettings } from "./ThemeSettingsContext";

type ThemeCustomizerProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const COLOR_THEMES = [
  { id: "violet", label: "Violet", dotClass: "bg-violet-500" },
  { id: "emerald", label: "Emerald", dotClass: "bg-emerald-500" },
  { id: "amber", label: "Amber", dotClass: "bg-amber-500" },
  { id: "rose", label: "Rose", dotClass: "bg-rose-500" },
  { id: "sky", label: "Sky", dotClass: "bg-sky-500" },
  { id: "slate", label: "Slate", dotClass: "bg-slate-500" },
] as const;

export function ThemeCustomizer({
  isOpen,
  onOpenChange,
}: ThemeCustomizerProps) {
  const {
    settings,
    setColorTheme,
    setMode,
    setSemiDark,
    setContentWidth,
    reset,
  } = useThemeSettings();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => onOpenChange(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`tc-backdrop ${isOpen ? "open" : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`tc-drawer ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="tc-header">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold leading-none">
                Theme settings
              </p>
              <p className="mt-0.5 text-xs text-default-500">
                Customize the look &amp; feel.
              </p>
            </div>
          </div>
          <Button
            isIconOnly
            variant="light"
            size="sm"
            radius="full"
            onPress={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Body */}
        <div className="tc-body space-y-6">
          {/* Mode */}
          <section className="space-y-3">
            <p className="text-xs font-medium text-default-500">Mode</p>
            <div className="inline-flex gap-2 rounded-xl bg-default-100 p-1 w-full">
              <Button
                size="sm"
                variant={settings.mode === "light" ? "solid" : "light"}
                color="primary"
                className="flex-1 gap-1"
                onPress={() => setMode("light")}
              >
                <SunMedium className="h-3.5 w-3.5" />
                <span className="text-xs">Light</span>
              </Button>
              <Button
                size="sm"
                variant={settings.mode === "dark" ? "solid" : "light"}
                color="primary"
                className="flex-1 gap-1"
                onPress={() => setMode("dark")}
              >
                <Moon className="h-3.5 w-3.5" />
                <span className="text-xs">Dark</span>
              </Button>
            </div>
          </section>

          <Divider className="my-2" />

          {/* Primary color */}
          <section className="space-y-3">
            <p className="text-xs font-medium text-default-500">
              Primary color
            </p>
            <div className="tc-grid-3">
              {COLOR_THEMES.map((item) => {
                const active = settings.colorTheme === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setColorTheme(item.id as any)}
                    className={`tc-color-btn ${active ? "active" : ""}`}
                  >
                    <span className={`tc-dot ${item.dotClass}`} />
                    <span className="text-xs font-medium">{item.label}</span>
                    <span className="text-[10px] text-default-500">
                      {item.id}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <Divider className="my-2" />

          {/* Layout width */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <LayoutTemplate className="h-3.5 w-3.5 text-default-500" />
              <p className="text-xs font-medium text-default-500">
                Layout width
              </p>
            </div>
            <div className="inline-flex gap-2 rounded-xl bg-default-100 p-1 w-full">
              <Button
                size="sm"
                variant={
                  settings.contentWidth === "compact" ? "solid" : "light"
                }
                color="primary"
                className="flex-1 text-xs"
                onPress={() => setContentWidth("compact")}
              >
                Compact
              </Button>
              <Button
                size="sm"
                variant={settings.contentWidth === "wide" ? "solid" : "light"}
                color="primary"
                className="flex-1 text-xs"
                onPress={() => setContentWidth("wide")}
              >
                Wide
              </Button>
            </div>
            <p className="text-[11px] text-default-500">
              Compact centers content and limits width; wide fills the viewport.
            </p>
          </section>

          <Divider className="my-2" />

          {/* Semi-dark sidebar */}
          <section className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-default-500">
                  Semi dark sidebar
                </p>
                <p className="text-[11px] text-default-500">
                  Applies a darker gradient to the admin sidebar.
                </p>
              </div>
              <Switch
                size="sm"
                color="primary"
                isSelected={settings.semiDark}
                onValueChange={setSemiDark}
              />
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="tc-footer">
          <Button
            variant="light"
            size="sm"
            className="text-xs"
            onPress={reset}
          >
            Reset defaults
          </Button>
          <Button
            color="primary"
            size="sm"
            className="text-xs"
            onPress={handleClose}
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
}

export default ThemeCustomizer;
