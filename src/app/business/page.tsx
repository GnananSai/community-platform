"use client"

import BusinessFeed from '@/components/BusinessFeed';
import BusinessHero from '@/components/BusinessHero';
import BusinessSearch from '@/components/BusinessSearch';
import BusinessSell from '@/components/BusinessSell';
import React, { useRef } from 'react';

const Page: React.FC = () => {

  const businessSellRef = useRef<HTMLDivElement | null>(null);

  const scrollToBusinessSell = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (businessSellRef.current) {
      businessSellRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <BusinessHero scrollToBusinessSell={scrollToBusinessSell}/>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <BusinessFeed />
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

export default Page;
