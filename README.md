# Next.js + HeroUI Theme Template

A modern, lightweight starter template featuring **Next.js 15**, **HeroUI v2**, **Tailwind CSS v4**, and a powerful **Theme Customizer**.

This template is designed to be a solid foundation for any web application, offering a pre-configured theme system with dark mode support, multiple color presets, and layout options.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftareq0065%2Fherouitheme)

## 🚀 Features

- **Framework**: Next.js 15 (App Router)
- **UI Library**: HeroUI v2
- **Styling**: Tailwind CSS v4
- **Theme System**:
  - 🌓 Light / Dark mode
  - 🎨 6 Pre-configured color themes (Violet, Emerald, Amber, Rose, Sky, Slate)
  - 📐 Layout width control (Compact / Wide)
  - 🛠 **Pure CSS Theme Customizer Drawer** (No heavy UI library dependencies for the settings panel)
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## 🛠 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tareq0065/herouitheme.git
    cd herouitheme
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Using the Theme Customizer in Your Project

The Theme Customizer is designed to be portable. You can easily drop it into your existing Next.js project.

### 1. Copy Components

Copy the `components/theme` directory to your project:

- `components/theme/ThemeCustomizer.tsx` (The UI)
- `components/theme/ThemeSettingsContext.tsx` (The State)
- `components/theme/ThemeShell.tsx` (The Wrapper & Trigger)

### 2. Copy Styles

Copy `styles/theme-customizer.css` to your styles directory and import it in your root layout.

```tsx
// app/layout.tsx
import "@/styles/theme-customizer.css";
```

### 3. Configure Tailwind

Update your `tailwind.config.js` to include the HeroUI plugin and your custom color themes. See the `tailwind.config.js` in this project for the full configuration.

**Key requirement:** Ensure `darkMode: "class"` is set.

### 4. Wrap Your App

Wrap your application (or specific layouts) with the `ThemeSettingsProvider` and `ThemeShell`.

```tsx
// app/layout.tsx
import { ThemeSettingsProvider } from "@/components/theme/ThemeSettingsContext";
import { ThemeShell } from "@/components/theme/ThemeShell";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeSettingsProvider>
          <ThemeShell>
            {children}
          </ThemeShell>
        </ThemeSettingsProvider>
      </body>
    </html>
  );
}
```

## 📂 Project Structure

```
├── app/                # Next.js App Router pages
├── components/         # React components
│   ├── theme/          # Theme customizer logic & UI
│   └── ...
├── config/             # Site configuration
├── styles/             # Global and component styles
│   ├── globals.css     # Tailwind imports
│   ├── theme.css       # Theme-specific overrides
│   └── theme-customizer.css # Custom drawer styles
└── tailwind.config.js  # Tailwind & HeroUI theme config
```

## 📄 License

Licensed under the [MIT license](LICENSE).
