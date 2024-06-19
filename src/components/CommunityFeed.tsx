import React from "react";
import { communities } from "@/app/constants/data";
import CommunityCard from "./CommunityCard";

const CommunityFeed = () => {
  return (
    <section className="flex flex-wrap flex-col items-center justify-center gap-5 md:gap-10 rounded-2xl col-span-1 md:col-span-6 w-full p-8">
      <article className="flex justify-between items-center w-full ">
        <h1 className="text-2xl font-bold md:text-4xl ">Top Communities</h1>
        <a
          href="#"
          className="flex items-center justify-center rounded-lg bg-primary-700 bg-blue-gray-800 text-white hover:bg-blue-gray-100 hover:text-black w-fit p-3 text-xs md:text-lg"
        >
          More Communities
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </article>
      <article className="flex flex-col gap-5 sm:w-11/12 h-fit justify-center items-center">
        {communities.map((community) => (
          <CommunityCard key={community.id} data={community} />
        ))}
      </article>
    </section>
  );
};

export default CommunityFeed;
