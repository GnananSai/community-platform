"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IUser } from "@/models/User";

interface IProfileContents {
  user: IUser | null;
}

// type INullableProfileContents = IProfileContents | null;

const ProfileContents: React.FC<IProfileContents> = ({ user }) => {
  const router = useRouter();
  if (user?.completedProfile === false)
    router.push(`/profile/${user?._id}/edit`);

  const dob = new Date(user?.dob || "").toDateString();
  return (
    <div className="bg-gray-100 min-h-[75vh] p-10 flex flex-col md:flex-row justify-between h-full gap-10">
      <div className="bg-white shadow rounded-lg p-6 h-full md:w-1/3">
        <div className="flex flex-col items-center">
          <img
            src={user?.image_url || "/profile.webp"}
            className="w-16 h-16 md:w-32 md:h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          ></img>
          <h1 className="text-xl font-bold">{user?.name}</h1>
          <p className="text-gray-700">{user?.city}</p>
          <p className="text-gray-700">{user?.state}</p>
          <p className="text-gray-700">{user?.country}</p>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className=" flex justify-center items-center">
          <button
            className="bg-blue-gray-800 text-white hover:border hover:border-blue-gray-800 hover:bg-white hover:text-blue-gray-800 p-4 rounded-lg transition ease-in-out hover:scale-105"
            onClick={() => router.push(`/profile/${user?._id}/edit`)}
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 h-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4 uppercase">Your Profile</h2>
        <p className="text-gray-800 text-lg">Name: {user?.name}</p>
        <p className="text-gray-800 text-lg">Email: {user?.email}</p>
        <p className="text-gray-800 text-lg">Gender: {user?.gender}</p>
        <p className="text-gray-800 text-lg">Date of Birth: {dob}</p>
        <p className="text-gray-800 text-lg">City: {user?.city}</p>
        <p className="text-gray-800 text-lg">State: {user?.state}</p>
        <p className="text-gray-800 text-lg">Country: {user?.country}</p>
      </div>
    </div>
  );
};

export default ProfileContents;
