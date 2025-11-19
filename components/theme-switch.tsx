"use client";

import { FC } from "react";
import { useIsSSR } from "@react-aria/ssr";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { useThemeSettings } from "@/components/theme/ThemeSettingsContext";
import { Button } from "@heroui/react";

export const ThemeSwitch: FC = () => {
  const { settings, setMode } = useThemeSettings();
  const isDark = settings.mode === "dark";
  const isSSR = useIsSSR();

  return (
    <>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        onPress={() => setMode(settings.mode === "dark" ? "light" : "dark")}
      >
        {isDark ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
      </Button>
    </>
  );
};
