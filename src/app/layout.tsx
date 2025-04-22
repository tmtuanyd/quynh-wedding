// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import {
  Great_Vibes,
  Clicker_Script,
  Playfair_Display,
} from "next/font/google";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
});

const clickerScript = Clicker_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-clicker-script",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Lễ cưới của Mai Huế & Thế Chiến",
  description: "Chào mừng bạn đến với lễ cưới của chúng tôi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${playfairDisplay.className} ${greatVibes.className} ${clickerScript.className}`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
