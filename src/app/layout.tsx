"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/utils/auth";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isAuth = useAuth();
  useEffect(() => {
    isAuth = useAuth();
  }, []);

  return (
    <html lang="en">
      <body className="bg-slate-300 overflow-x-hidden">
        <Navbar isAuth={isAuth} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
