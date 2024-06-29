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
    <div className="flex flex-col  items-center w-full gap-5">
      <HomeHero />
      <div className="max-w-6xl flex lg:flex-row flex-col gap-5 lg:gap-20">
        <EventFeed events={events} home={true} />
        <CommunityFeed communities={communities} home={true} />
      </div>
    </div>
  );
};

export default withAuth(HomePage);
