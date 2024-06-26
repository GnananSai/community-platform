"use client";
import ProfileEdit from "@/components/Profile/ProfileEdit";
import React from "react";
import { useUser } from "@/context/UserContext";
import { withAuth } from "@/utils/withAuth";
const ProfileEditPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ProfileEdit />
    </div>
  );
};

export default withAuth(ProfileEditPage);
