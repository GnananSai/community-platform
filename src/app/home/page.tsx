"use client";
import React from "react";
import EventFeed from "@/components/EventFeed";
import CommunityFeed from "@/components/CommunityFeed";
import HomeHero from "@/components/HomeHero";
import { withAuth } from "@/utils/withAuth"; // Ensure correct path

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <HomeHero />
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        <EventFeed />
        <CommunityFeed heading="Top Communities" />
      </div>
    </div>
  );
};

export default withAuth(HomePage); // Ensure withAuth is correctly applied
