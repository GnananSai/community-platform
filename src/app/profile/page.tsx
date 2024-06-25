"use client";
import ProfileContents from "@/components/Profile/ProfileContents";
import React from "react";
import { withAuth } from "@/utils/withAuth";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <ProfileContents />
    </div>
  );
};

export default withAuth(ProfilePage);
