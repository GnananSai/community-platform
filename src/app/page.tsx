"use client";

import LandingHero from "@/components/Landing/LandingHero";
import LandingContents from "@/components/Landing/LandingContents";
import LandingCarousel from "@/components/Landing/LandingCarousel";

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
