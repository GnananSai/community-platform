"use client";
import React from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import Upload from "@/components/Upload";
const profileInitialValue = {
  name: "",
  gender: "",
  dob: "",
  city: "",
  state: "",
  country: "",
  image_url: "",
};

const ProfileEdit = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [userDetails, setUserDetails] = React.useState(profileInitialValue);

  const handleUpload = (result: any) => {
    console.log("Upload Result:", result);
    if (result.event === "success" && result.info && result.info.secure_url) {
      const url = result.info.secure_url;
      console.log("Image URL:", url);
      // setUserDetails({ ...userDetails, image_url: url });
    } else {
      console.error("Upload Error:", result.info);
    }
  };

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
    <section className="shadow-xl rounded-lg p-6 md:w-[40%] mx-auto md:m-10 flex flex-col gap-5">
      <h1 className="text-4xl font-bold  text-blue-gray-800 text-center">
        Edit Your Profile
      </h1>
      <article className="flex flex-col gap-3">
        <form onSubmit={handleEdit} className="flex flex-col gap-3">
          <div className="flex flex-col items-center justify-center">
            <div className="relative group w-32 h-32 mb-4">
              <img
                src={user.image_url ? user.image_url : "/profile.webp"}
                className="w-full h-full bg-gray-300 rounded-full object-cover transition duration-300 ease-in-out group-hover:opacity-50 shadow-md shadow-black"
                alt="Profile Pic"
              />
              {/* <Upload /> */}
              <CldUploadWidget
                uploadPreset="ml_default"
                onSuccess={(result) => {
                  handleUpload(result);
                }}
                onError={(error) => {
                  console.error("Upload Error:", error);
                }}
              >
                {({ open }) => (
                  <button
                    onClick={() => open()}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      ></path>
                    </svg>
                  </button>
                )}
              </CldUploadWidget>
            </div>
          </div>
          <table className="w-full">
            <tbody className="space-y-10">
              <tr className="">
                <td className="py-5">
                  <label
                    htmlFor="name"
                    className="text-lg sm:text-2xl text-gray-800 font-semibold"
                  >
                    Your Name:
                  </label>
                </td>
                <td className="">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    placeholder="Enter your name"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="py-2">
                  <label
                    htmlFor="gender"
                    className="text-lg sm:text-2xl text-gray-800 font-semibold"
                  >
                    Your Gender:
                  </label>
                </td>
                <td className="">
                  <fieldset className="flex flex-wrap gap-2">
                    <legend className="sr-only">Gender</legend>
                    <label className="flex items-center text-gray-800 rounded-md px-3 py-2 hover:text-white hover:bg-gray-800 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="mr-2"
                      />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center text-gray-800 rounded-md px-3 py-2 hover:text-white hover:bg-gray-800 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="mr-2"
                      />
                      <span>Female</span>
                    </label>
                    <label className="flex items-center text-gray-800 rounded-md px-3 py-2 hover:text-white hover:bg-gray-800 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        className="mr-2"
                      />
                      <span>Other</span>
                    </label>
                    <label className="flex items-center text-gray-800 rounded-md px-3 py-2 hover:text-white hover:bg-gray-800 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="not_say"
                        className="mr-2"
                      />
                      <span>Rather Not Say</span>
                    </label>
                  </fieldset>
                </td>
              </tr>

              <tr className="">
                <td className="py-5">
                  <label
                    htmlFor="dob"
                    className="text-lg sm:text-2xl text-gray-800 font-semibold"
                  >
                    Enter DOB:
                  </label>
                </td>
                <td className="">
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    placeholder="DD/MM/YYYY"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="py-5">
                  <label
                    htmlFor="city"
                    className="text-lg sm:text-2xl text-gray-800 font-semibold"
                  >
                    Enter City:
                  </label>
                </td>
                <td className="">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    placeholder="City Name"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="py-5">
                  <label
                    htmlFor="state"
                    className="text-lg sm:text-2xl text-gray-800 font-semibold"
                  >
                    Enter State:
                  </label>
                </td>
                <td className="">
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    placeholder="State Name"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="py-5">
                  <label
                    htmlFor="country"
                    className="text-lg sm:text-2xl text-gray-800 font-semibold"
                  >
                    Enter Country:
                  </label>
                </td>
                <td className="">
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    placeholder="Country Name"
                  />
                </td>
              </tr>

              <tr className="">
                <td colSpan={2} className="text-center">
                  <button
                    type="submit"
                    className="m-3 bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900 transition ease-in-out hover:scale-105"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </article>
    </section>
  );
};

export default ProfileEdit;
