"use client";

import Image from "next/image";
import Navbar1 from "../components/Navbar1";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar1 />
      <Footer/>
    </main>
  );
}
