import React, { useState } from "react";
import Upload from "../Upload";

interface FormData {
  name: string;
  description: string;
  image_url: string;
}

interface ApiResponse {
  success: boolean;
  service?: any;
  message?: string;
  error?: string;
}

const ServicesCreate: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    image_url: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, image_url: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/service", {
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
        });
      } else {
        console.error(
          "Error creating service:",
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
            What service will you provide?
          </h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Service Name"
            required
          />
          <h1 className="text-xl font-bold text-gray-800 mb-2">Description</h1>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Give a short description"
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
          <div className=" mt-5 flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-gray-800 text-white p-3 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900 w-full"
            >
              Create your service
            </button>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <p className="text-xl font-bold mb-4">
              Service Created Successfully!
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

export default ServicesCreate;
