"use client";

import Image from "next/image";
import Navbar1 from "../components/Navbar";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import LandingHero from "@/components/LandingHero";
import LandingContents from "@/components/LandingContents";
import LandingCarousel from "@/components/LandingCarousel";

export default function Home() {
  return (
    <main>
      <div className="h-4/5 flex flex-col justify-center items-center">
        <LandingHero />
        <LandingCarousel />
        <LandingContents />
      </div>
    </main>
  );
}
