"use client";

import React, { useState } from "react";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { Settings2 } from "lucide-react";
import { Button } from "@heroui/button";
import { ScrollShadow } from "@heroui/scroll-shadow";

interface ThemeShellProps {
  children: React.ReactNode;
}

export function ThemeShell({ children }: ThemeShellProps) {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Content width is controlled via data-* on the provider wrapper */}
      <ScrollShadow className="min-h-screen app-shell-inner">
        {children}
      </ScrollShadow>

      {/* floating settings button */}
      <Button
        isIconOnly
        radius="full"
        variant="solid"
        color="primary"
        className="fixed bottom-6 right-6 z-50 shadow-lg"
        onPress={() => setOpen(true)}
      >
        <Settings2 className="h-5 w-5" />
      </Button>

      <ThemeCustomizer isOpen={open} onOpenChange={setOpen} />
    </main>
  );
}
