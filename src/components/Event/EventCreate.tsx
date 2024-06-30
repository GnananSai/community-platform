import React, { useEffect, useRef, useState } from "react";
import "flatpickr/dist/themes/material_green.css";
import flatpickr from "flatpickr";
import Upload from "../Upload";

interface FormData {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image_url: string;
}

interface ApiResponse {
  success: boolean;
  event?: any;
  message?: string;
  error?: string;
}

const EventCreate: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    image_url: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      flatpickr(dateRef.current, {
        onChange: (selectedDates) => {
          setFormData((prev) => ({
            ...prev,
            date: selectedDates[0].toISOString(),
          }));
        },
      });
    }

    if (timeRef.current) {
      flatpickr(timeRef.current, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        onChange: (selectedTimes) => {
          setFormData((prev) => ({
            ...prev,
            time: selectedTimes[0].toTimeString().substring(0, 5),
          }));
        },
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, image_url: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/event", {
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
          date: "",
          time: "",
          location: "",
          image_url: "",
        });
      } else {
        console.error("Error creating event:", result.message || result.error);
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
            What are you going to host?
          </h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Event Name"
          />
          <h1 className="text-xl font-bold text-gray-800 mb-2">Description</h1>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Give a short description"
          />
          <h1 className="text-lg font-bold text-gray-800 pb-3">Date?</h1>
          <input
            type="text"
            name="date"
            ref={dateRef}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Enter the date"
            value={formData.date.split("T")[0]} // To show the selected date in the input field
            onChange={handleChange}
          />
          <h1 className="text-lg font-bold text-gray-800 pb-3">Time?</h1>
          <input
            type="text"
            name="time"
            ref={timeRef}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Enter the time"
            value={formData.time} // To show the selected time in the input field
            onChange={handleChange}
          />
          <h1 className="text-lg font-bold text-gray-800 pb-3">Location</h1>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Enter the location"
          />
          <div className="mt-4 flex items-center gap-7 ">
            <Upload onUpload={handleUpload} />
            <span className="text-blue-gray-800 font-bold">
              Upload an Image
            </span>
          </div>
          <div>
            <img src={formData.image_url} alt="" />
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              onClick={handleSubmit}
              className=" bg-blue-gray-800 text-white p-3 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900 w-full"
            >
              Create your event
            </button>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <p className="text-xl font-bold mb-4">
              Event Created Successfully!
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

export default EventCreate;
