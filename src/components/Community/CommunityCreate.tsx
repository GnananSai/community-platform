import React, { useEffect, useState } from "react";
// import "flatpickr/dist/themes/material_green.css";
import Upload from "../Upload";
import { useUser } from "@/context/UserContext";

interface FormData {
  name: string;
  description: string;
  image_url: string;
  members: string[];
  owner: string;
}

interface ApiResponse {
  success: boolean;
  community?: any;
  message?: string;
  error?: string;
}

const CommunityCreate: React.FC = () => {
  const { user } = useUser();
  const userId = user?._id as string;
  console.log(userId);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    image_url: "",
    members: [],
    owner: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (userId) {
      setFormData((prev) => ({
        ...prev,
        owner: userId,
        members: [userId],
      }));
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, image_url: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();
      if (result.success) {
        setShowSuccessPopup(true);
        setFormData({
          name: "",
          description: "",
          image_url: "",
          members: [userId],
          owner: userId,
        });
      } else {
        console.error(
          "Error creating community:",
          result.message || result.error
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-10 flex flex-col bg-white border border-t-4 border-t-blue-gray-800 shadow-xl rounded-xl items-center justify-center p-5">
        <div className="w-full">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            Create a Community
          </h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Give the name of the community"
            required
          />
          <h1 className="text-xl font-bold text-gray-800 mb-2">Description</h1>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Describe the community"
            required
          />
          <div className="mt-4 flex items-center gap-7 ">
            <Upload onUpload={handleUpload} />
            <span className="text-blue-gray-800 font-bold">
              Upload an Image
            </span>
          </div>
          {formData.image_url && (
            <div className="mt-4">
              <img
                src={formData.image_url}
                alt="Uploaded"
                className="max-w-full h-auto"
              />
            </div>
          )}
          <div className="flex justify-center items-center w-full mt-5">
            <button
              onClick={handleSubmit}
              className=" bg-blue-gray-800 text-white p-3 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900 w-full"
            >
              Create Community
            </button>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <p className="text-xl font-bold mb-4">
              Community Created Successfully!
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityCreate;
