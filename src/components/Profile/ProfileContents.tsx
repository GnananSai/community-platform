import React from "react";
import { useRouter } from "next/navigation";
const ProfileContents = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-5">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src="profile.webp"
                    className="w-16 h-16 md:w-32 md:h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">NAME</h1>
                  <p className="text-gray-700">CITY</p>
                  <p className="text-gray-700">STATE</p>
                  <p className="text-gray-700">COUNTRY</p>
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
                <p className="text-gray-800 text-lg">Username: username</p>

                <p className="text-gray-800 text-lg">
                  Email ID: gremrzl@gmail.com
                </p>

                <p className="text-gray-800 text-lg">Password: password</p>

                <p className="text-gray-800 text-lg">Name: name</p>

                <p className="text-gray-800 text-lg">Gender: gender</p>

                <p className="text-gray-800 text-lg">DOB: DD-MM-YYYY</p>

                <p className="text-gray-800 text-lg">Age: age</p>

                <p className="text-gray-800 text-lg">Address: address</p>

                <p className="text-gray-800 text-lg">City: city</p>

                <p className="text-gray-800 text-lg">State: state</p>

                <p className="text-gray-800 text-lg">Country: country</p>

                <p className="text-gray-800 text-lg">
                  Current location: Coordinates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContents;
