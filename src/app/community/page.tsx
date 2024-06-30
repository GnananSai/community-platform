"use client";

import CommunityCreate from "@/components/Community/CommunityCreate";
import CommunityFeed from "@/components/Community/CommunityFeed";
import CommunityHero from "@/components/Community/CommunityHero";
import CommunitySearch from "@/components/Community/CommunitySearch";
import React, { useEffect, useRef } from "react";
import { withAuth } from "@/utils/withAuth";

const page: React.FC = () => {
  const communityCreateRef = useRef<HTMLDivElement | null>(null);

  const scrollToCommunityCreate = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (communityCreateRef.current) {
      communityCreateRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [communities, setCommunities] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/community")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCommunities(data.communities);
        }
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-5">
      <CommunityHero scrollToCommunityCreate={scrollToCommunityCreate} />
      <div className="max-w-6xl flex lg:flex-row flex-col gap-5 lg:gap-20 w-full p-5 justify-between">
        <CommunityFeed communities={communities} home={false} />
        <div ref={communityCreateRef} className="flex flex-col gap-2 lg:w-full">
          <CommunitySearch />
          <CommunityCreate />
        </div>
      </div>
    </div>
  );
};

export default withAuth(page);
