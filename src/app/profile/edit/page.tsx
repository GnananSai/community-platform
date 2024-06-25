"use client";
import ProfileEdit from "@/components/Profile/ProfileEdit";
import React from "react";
import { withAuth } from "@/utils/withAuth";

const ProfileEditPage: React.FC = () => {
  return (
    <div>
      <ProfileEdit />
    </div>
  );
};

export default withAuth(ProfileEditPage);
