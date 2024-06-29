"use client";
import ProfileContents from "@/components/Profile/ProfileContents";
import React from "react";
import { useUser } from "@/context/UserContext";
import { withAuth } from "@/utils/withAuth";

const ProfileContentPage = () => {
  const { user } = useUser();
  console.log(user);
  return <ProfileContents user={user} />;
};

export default ProfileContentPage;
