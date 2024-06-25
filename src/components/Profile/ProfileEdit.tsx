"use client";
import React from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const ProfileEdit = () => {
  const { setUser } = useUser();
  const router = useRouter();
  const [userDetails, setUserDetails] = React.useState({});
  const handleEdit = async () => {
    fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
          router.replace("/home");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <section className="shadow-xl rounded-lg p-6 md:w-[40%] mx-auto items-center md:m-10 ">
      <h1 className="text-4xl font-bold uppercase text-blue-gray-800 mb-6">
        Edit Your Profile
      </h1>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl pb-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Upload profile picture</u>
        </h2>
        <img
          src="/profile.webp"
          className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          alt="Profile"
        />
        <input
          className="mb-3 block text-sm text-gray-800 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
          id="file_input"
          type="file"
        />

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Enter Name</u>
        </h2>
        <input
          type="text"
          className="w-[50%] block mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
          placeholder="Enter your name"
        />

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Select Gender</u>
        </h2>
        <div className="mb-3">
          <label className="flex text-gray-800 rounded-md px-3 pb-1 mb-1 hover:text-white hover:bg-gray-800 cursor-pointer">
            <input type="radio" name="gender" value="male" />
            <p className="pl-2">Male</p>
          </label>

          <label className="flex text-gray-800 rounded-md px-3 py-1 my-1 hover:text-white hover:bg-gray-800 cursor-pointer">
            <input type="radio" name="gender" value="female" />
            <p className="pl-2">Female</p>
          </label>

          <label className="flex text-gray-800 rounded-md px-3 py-1 my-1 hover:text-white hover:bg-gray-800 cursor-pointer">
            <input type="radio" name="gender" value="other" />
            <p className="pl-2">Other</p>
          </label>

          <label className="flex text-gray-800 rounded-md px-3 py-1 my-1 hover:text-white hover:bg-gray-800 cursor-pointer">
            <input type="radio" name="gender" value="not_say" />
            <p className="pl-2">Rather Not Say</p>
          </label>
        </div>

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Enter DOB</u>
        </h2>
        <input
          type="text"
          className="w-[70%] block mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
          placeholder="DD/MM/YYYY"
        />

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Enter Age</u>
        </h2>
        <input
          type="text"
          className="w-[70%] block mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
          placeholder="In years"
        />

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Enter Address</u>
        </h2>
        <input
          type="text"
          className="w-[70%] block mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
          placeholder="Flat No., Street, Locality"
        />

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Enter City</u>
        </h2>
        <input
          type="text"
          className="w-[70%] block mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
          placeholder="City Name"
        />

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Enter State</u>
        </h2>
        <input
          type="text"
          className="w-[70%] block mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
          placeholder="State Name"
        />

        <h2 className="text-2xl pb-3 pt-3 uppercase text-gray-800 font-semibold">
          {" "}
          <u>Enter Country</u>
        </h2>
        <input
          type="text"
          className="w-[70%] block mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
          placeholder="Country Name"
        />

        <div className="flex justify-center items-center w-full">
          <button
            className="m-3 bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900 transition ease-in-out hover:scale-105"
            onClick={() => handleEdit()}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileEdit;
