import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/common/globals.css";
import Head from "next/head";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Limpador Cósmico",
  description: "Limpador Cósmico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Script
        src="https://unpkg.com/kaplay@3000.0.0/dist/kaplay.js"
        strategy="lazyOnload"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
