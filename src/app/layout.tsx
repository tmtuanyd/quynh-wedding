// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import {
  Style_Script,
  Great_Vibes,
  Clicker_Script,
  Lora,
  Hepta_Slab,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
});

const styleScript = Style_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-style-script",
});

const clickerScript = Clicker_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-clicker-script",
});

const playfairDisplay = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const heptaSlab = Hepta_Slab({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hepta-slab",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-cormorant-garamond",
});

/* Font thiệp cưới truyền thống - thanh lịch, dùng nhiều trong thiệp in */
const playfairInvitation = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-playfair-invitation",
});

export const metadata: Metadata = {
  title: "Tạ Như Quỳnh & Chang Shu Yu",
  description: "Chào mừng bạn đến với lễ cưới của chúng tôi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="icon"
          href="/images/favicon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${styleScript.className} ${playfairDisplay.className} ${greatVibes.className} ${clickerScript.className} ${heptaSlab.className} ${cormorantGaramond.className} ${playfairInvitation.className}`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
