/** Ucotron design tokens — shared across dashboard, landing, docs */
export const tokens = {
  colors: {
    background: "#050A14",
    foreground: "#E2E8F0",
    muted: "#0F1C2E",
    mutedForeground: "#94A3B8",
    border: "rgba(0, 240, 255, 0.12)",
    card: "rgba(15, 28, 46, 0.6)",
    cardForeground: "#E2E8F0",
    primary: "#00F0FF",
    primaryForeground: "#050A14",
    accent: "rgba(0, 240, 255, 0.1)",
    accentForeground: "#00F0FF",
    destructive: "#FF2A6D",
    success: "#00FF94",
    warning: "#FFB800",
  },
  fonts: {
    display: '"Chakra Petch", ui-sans-serif, system-ui, sans-serif',
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
} as const;
