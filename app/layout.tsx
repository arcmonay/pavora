import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { CompareBar } from "@/components/CompareBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import { CompareProvider } from "@/lib/compare-context";
import "./globals.css";

const sans = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pavora — Contractor Surface Machinery",
    template: "%s · Pavora",
  },
  description:
    "Concrete grinding, crack injection, blasting, laser cleaning, pressure washing, lot painting, and commercial caulking equipment for contractors.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} h-full`}>
      <body className="store antialiased">
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
