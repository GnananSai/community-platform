import BusinessFeed from '@/components/BusinessFeed';
import BusinessHero from '@/components/BusinessHero';
import BusinessSearch from '@/components/BusinessSearch';
import BusinessSell from '@/components/BusinessSell';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <BusinessHero />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <BusinessFeed />
        </div>
        <div className="space-y-4">
          <BusinessSearch />
          <BusinessSell />
        </div>
      </div>
    </div>
  );
};

export default Page;
