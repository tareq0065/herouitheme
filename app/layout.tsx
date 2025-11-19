import "@/styles/globals.css";
import "@/styles/theme.css";
import "@/styles/theme-customizer.css";
import { ThemeSettingsProvider } from "@/components/theme/ThemeSettingsContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeShell } from "@/components/theme/ThemeShell";
import type { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    url: siteConfig.url, // make sure siteConfig.url exists; otherwise replace with a string
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Custom Open Graph meta tags */}
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:url" content={siteConfig.url} />
      </head>
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <ThemeSettingsProvider>
            <ThemeShell>
              <div className="relative flex flex-col min-h-screen">
                <Navbar />
                <div className="app-shell-inner flex-grow pt-16 px-6">{children}</div>
                <Footer />
              </div>
            </ThemeShell>
          </ThemeSettingsProvider>
        </Providers>
      </body>
    </html>
  );
}
