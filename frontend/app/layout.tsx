import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Distronator",
  description: "Generate custom shell scripts to configure your Linux system post-install",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
