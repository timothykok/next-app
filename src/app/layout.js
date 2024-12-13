"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Nav from "./nav/page";
import { ThemeProvider } from "./hooks/useTheme";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`antialiased`}>
          <Nav />

          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
