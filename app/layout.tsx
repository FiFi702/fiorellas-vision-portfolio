import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Fiorella’s Vision — Graphic Designer & Photographer",
    template: "%s — Fiorella’s Vision",
  },
  description:
    "Intentional graphic design, photography and visual storytelling by Fiorella, based in Malta.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/fiorellas-vision-portfolio/favicon.png",
    shortcut: "/fiorellas-vision-portfolio/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
