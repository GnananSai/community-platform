"use client";
import React from "react";
import EventFeed from "@/components/Event/EventFeed";
import CommunityFeed from "@/components/Community/CommunityFeed";
import HomeHero from "@/components/Home/HomeHero";
import { withAuth } from "@/utils/withAuth";

const HomePage: React.FC = () => {
  const [events, setEvents] = React.useState([]);
  const [communities, setCommunities] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEvents(data.events);
          setCommunities(data.communities);
        }
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <HomeHero />
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
        <EventFeed events={events} />
        <CommunityFeed communities={communities} />
      </div>
    </div>
  );
};

export default withAuth(HomePage);
