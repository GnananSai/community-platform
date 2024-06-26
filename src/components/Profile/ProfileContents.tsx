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
    router.push(`/profile/${user?.id}/edit`);

  const dob = new Date(user?.dob || "").toDateString();
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-5">
              <div className="bg-white shadow rounded-lg p-6">
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
                    onClick={() => router.push("/profile/edit")}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-4 sm:col-span-7">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 uppercase">About You</h2>
                {/* <p className="text-gray-800 text-lg">{user?.username}</p> */}
                <p className="text-gray-800 text-lg">{user?.email}</p>
                <p className="text-gray-800 text-lg">{user?.gender}</p>
                <p className="text-gray-800 text-lg">{dob}</p>
                <p className="text-gray-800 text-lg">{user?.age}</p>
                <p className="text-gray-800 text-lg">{user?.address}</p>
                <p className="text-gray-800 text-lg">{user?.city}</p>
                <p className="text-gray-800 text-lg">{user?.state}</p>
                <p className="text-gray-800 text-lg">{user?.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContents;
