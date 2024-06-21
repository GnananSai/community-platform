import CommunityCreate from '@/components/CommunityCreate';
import CommunityFeed from '@/components/CommunityFeed'
import CommunityHero from '@/components/CommunityHero'
import CommunitySearch from '@/components/CommunitySearch'
import React from 'react'

const page = () => {
    return (
      <div className="flex flex-col justify-center items-center w-full gap-5">
        <CommunityHero />
        <div className="w-4/5 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <CommunityFeed heading="Your Communities"/>
          </div>
          <div className="space-y-4">
            <CommunitySearch />
            <CommunityCreate/>
          </div>
        </div>
      </div>
    );
  };

export default page