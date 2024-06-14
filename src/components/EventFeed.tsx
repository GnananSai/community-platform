import React from "react";
import { data } from "@/app/constants/data";
import EventCard from "./EventCard";

const EventFeed = () => {
  return (
    <div className="py-20 flex flex-wrap flex-col w-1/3 items-center justify-between gap-10 shadow-blue-gray-800 shadow-lg m-8 rounded-2xl ">
      <h1 className="text-2xl font-bold">Top Events</h1>
      {data.map((event) => (
        <EventCard key={event.id} data={event} />
      ))}
    </div>
  );
};

export default EventFeed;
