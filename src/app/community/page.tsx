"use client"

import CommunityCreate from '@/components/CommunityCreate';
import CommunityFeed from '@/components/CommunityFeed'
import CommunityHero from '@/components/CommunityHero'
import CommunitySearch from '@/components/CommunitySearch'
import React, { useRef } from 'react'

const page: React.FC = () => {

  const communityCreateRef = useRef<HTMLDivElement | null>(null);

  const scrollToCommunityCreate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (communityCreateRef.current) {
      communityCreateRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <div className="flex flex-col justify-center items-center w-full gap-5">
        <CommunityHero scrollToCommunityCreate={scrollToCommunityCreate}/>
        <div className="w-4/5 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <CommunityFeed heading="Your Communities"/>
          </div>
          <div className="space-y-4">
          <div ref={communityCreateRef}> 
            <CommunitySearch />
            <CommunityCreate/>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default page