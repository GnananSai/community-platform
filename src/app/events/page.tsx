"use client";

import EventCreate from "@/components/EventCreate";
import EventFeed from "@/components/EventFeed";
import EventHero from "@/components/EventHero";
import EventSearch from "@/components/EventSearch";
import React, { useRef } from "react";
import { withAuth } from "@/utils/withAuth";
const page: React.FC = () => {
  const eventsCreateRef = useRef<HTMLDivElement | null>(null);

  const scrollToEventsCreate = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (eventsCreateRef.current) {
      eventsCreateRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/event")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEvents(data.events);
        }
      });
  });

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <EventHero scrollToEventCreate={scrollToEventsCreate} />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <EventFeed events={events} />
        </div>
        <div className="space-y-4">
          <div ref={eventsCreateRef}>
            <EventSearch />
            <EventCreate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(page);
