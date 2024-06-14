"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar1";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300 overflow-x-hidden">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
