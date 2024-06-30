import React, { useState } from "react";
import Upload from "../Upload";
import { useUser } from "@/context/UserContext";
import { useParams } from "next/navigation";
interface PostData {
  title: string;
  description: string;
  img_url: string;
  userId: string;
  communityId: string;
  type: string;
  createdAt: Date;
  likes: any[];
}

interface ApiResponse {
  success: boolean;
  post?: any;
  message?: string;
  error?: string;
}

const PostCreate: React.FC = () => {
  const { user } = useUser();
  const { id } = useParams();

  const userId = user?._id || "";
  const communityId = id || "";

  const [formData, setFormData] = useState<PostData>({
    title: "",
    description: "",
    img_url: "",
    userId: userId || "",
    communityId: communityId || "",
    type: "post",
    createdAt: new Date(),
    likes: [],
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, img_url: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/post", {
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
          title: "",
          description: "",
          img_url: "",
          userId: "",
          communityId: "",
          type: "post",
          createdAt: new Date(),
          likes: [],
        });
      } else {
        console.error("Error creating post:", result.message || result.error);
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
            Create a new post
          </h1>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e)}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Post Title"
            required
          />
          <h1 className="text-xl font-bold text-gray-800 mb-2">Description</h1>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Give a short description"
            required
          />
          <h1 className="text-xl font-bold text-gray-800 mb-2">Type</h1>
          <select
            name="type"
            id="type"
            onChange={(e) => handleChange(e)}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray- bg-white"
          >
            <option value="post">Post</option>
            <option value="report">Report</option>
          </select>
          <div className="mt-4 flex items-center gap-7 ">
            <Upload onUpload={handleUpload} />
            <span className="font-bold text-blue-gray-800">
              Upload an Image
            </span>
          </div>
          {formData.img_url && (
            <div className="mt-4">
              <img
                src={formData.img_url}
                alt="Uploaded"
                className="max-w-full h-auto"
              />
            </div>
          )}
          <div className="flex justify-center items-center">
            <button
              onClick={(e) => handleSubmit(e)}
              className=" bg-blue-gray-800 text-white p-3 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900 w-full mt-5"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <p className="text-xl font-bold mb-4">Post Created Successfully!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900 "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreate;
