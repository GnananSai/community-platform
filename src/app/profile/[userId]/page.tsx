"use client";
import ProfileContents from "@/components/Profile/ProfileContents";
import React from "react";
import { useUser } from "@/context/UserContext";
import { withAuth } from "@/utils/withAuth";

const ProfileEditPage = () => {
  const { user } = useUser();
  return <ProfileContents user={user} />;
};

export default withAuth(ProfileEditPage);
