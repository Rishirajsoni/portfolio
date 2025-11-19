import { Inter } from "next/font/google";
import "./styles/globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Rishi Raj Soni - Digital Craftsman",
  description: "Developer & Maker, building immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Removed "scroll-smooth"
    <html lang="en">
      <body className={`${inter.variable} bg-[#111111] text-[#EAEAEA] font-inter antialiased`}>
        {/* Lenis smooth scroll provider */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}