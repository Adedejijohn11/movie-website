"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "../components/navbar/conditionalNavbar";
import { TMDBProvider } from "../contexts/TMDBContext";
// import { metadata } from "./layoutmetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalNavbar />
        <TMDBProvider>{children}</TMDBProvider>
      </body>
    </html>
  );
}
