import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { CompareBar } from "@/components/CompareBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import { CompareProvider } from "@/lib/compare-context";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Pavora — Contractor Surface Machinery",
    template: "%s · Pavora",
  },
  description:
    "Commercial equipment for concrete grinding, crack injection, asphalt crack sealing, blasting, laser cleaning, pressure washing, lot painting, and caulking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}>
      <body className="yard antialiased">
        <CartProvider>
          <CompareProvider>
            <Header />
            <main>{children}</main>
            <CompareBar />
            <Footer />
          </CompareProvider>
        </CartProvider>
      </body>
    </html>
  );
}
