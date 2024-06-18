"use client";

import Image from "next/image";
import Navbar1 from "../components/Navbar";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import LandingCarousel from "@/components/LandingCarousel";
import LandingHero from "@/components/LandingHero";


export default function Home() {
  return (
    <main>
      <div className="h-4/5">
      <LandingHero/>
      <LandingCarousel/>
      </div>
    </main>
  );
}
