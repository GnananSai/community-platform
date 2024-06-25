"use client";

import BusinessFeed from "@/components/Business/BusinessFeed";
import BusinessHero from "@/components/Business/BusinessHero";
import BusinessSearch from "@/components/Business/BusinessSearch";
import BusinessSell from "@/components/Business/BusinessSell";
import React, { useRef } from "react";
import { withAuth } from "@/utils/withAuth";

const Page: React.FC = () => {
  const businessSellRef = useRef<HTMLDivElement | null>(null);

  const scrollToBusinessSell = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (businessSellRef.current) {
      businessSellRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [businesses, setBusinesses] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/business")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBusinesses(data.businesses);
        }
      });
  });

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <BusinessHero scrollToBusinessSell={scrollToBusinessSell} />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <BusinessFeed businesses={businesses} />
        </div>
        <div className="space-y-4">
          <div ref={businessSellRef}>
            <BusinessSearch />
            <BusinessSell />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
