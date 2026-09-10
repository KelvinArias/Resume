import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelvin - Full Stack Developer",
  description: "Modern portfolio of a full stack developer building impactful web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-black ">{children}</body>
    </html>
  );
}
