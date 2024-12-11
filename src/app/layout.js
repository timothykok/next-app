import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'
import Nav from './Nav/page'
import Gallery from "./gallery/page";

 



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Nav />
        
        <main>{children}</main>
      </body>
    </html>
  );
}
