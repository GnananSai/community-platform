import React from "react";
import BusinessCard from "./BusinessCard";
import { IBusiness } from "@/models/Business";

interface IBusinessFeed {
  businesses: IBusiness[];
}
const BusinessFeed: React.FC<IBusinessFeed> = ({ businesses }) => {
  return (
    <section className="flex flex-wrap flex-col items-center justify-center gap-5 md:gap-10 rounded-2xl col-span-1 md:col-span-6 w-full lg:px-8 lg:mb-10">
      <article className="flex justify-between items-center w-full px-5">
        <h1 className="text-2xl font-bold md:text-4xl text-gray-800">
          Latest Posts
        </h1>
      </article>
      <article className="flex flex-col gap-5 sm:w-11/12 h-fit justify-center items-center">
        {businesses.map((business, idx) => (
          <BusinessCard key={idx} data={business} />
        ))}
      </article>
    </section>
  );
};

export default BusinessFeed;
