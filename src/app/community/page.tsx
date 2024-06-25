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
  });

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <CommunityHero scrollToCommunityCreate={scrollToCommunityCreate} />
      <div className="w-4/5 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <CommunityFeed communities={communities} />
        </div>
        <div className="space-y-4">
          <div ref={communityCreateRef}>
            <CommunitySearch />
            <CommunityCreate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(page);
