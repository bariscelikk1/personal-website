import type { Metadata } from "next";
import { Anton, Orbitron, Chakra_Petch, VT323 } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-disp",
  weight: "400",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-tech",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-term",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barış Çelik · Software Engineer & ML Researcher",
  description:
    "Personal site and portfolio of N. Barış Çelik — Computer Engineering student at Yıldız Teknik Üniversitesi, building ML models and full-stack platforms.",
  metadataBase: new URL("https://personal-website-eta-drab-26.vercel.app"),
  openGraph: {
    title: "Barış Çelik · Software Engineer & ML Researcher",
    description:
      "Deep-learning diagnostics, from-scratch optimizers, and full-stack platforms — plus the communities behind them.",
    url: "https://personal-website-eta-drab-26.vercel.app",
    siteName: "Barış Çelik",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${orbitron.variable} ${chakraPetch.variable} ${vt323.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
