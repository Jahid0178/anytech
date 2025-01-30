import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "swiper/css";
import "./globals.css";

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "AnyTech",
    template: "%s | AnyTech",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
