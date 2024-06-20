import React from 'react';

const BusinessSell = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className=" mb-10 flex flex-col bg-white border border-t-4 border-t-blue-gray-800 shadow-xl rounded-xl items-center justify-center p-5">
        <div className="w-full">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            What are you selling?
          </h1>
          <input
            type="text"
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Give a short description"
          />
          <h1 className="text-lg font-bold text-gray-800 pb-3">For how much?</h1>
          <input
            type="text"
            className="block w-full mb-3 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
            placeholder="Enter your asking price"
          />
          <h1 className="text-lg font-bold text-gray-800 pb-3">Upload an Image/Video</h1>
          <input
            className="mb-3 block w-full text-sm text-gray-800 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
            id="file_input"
            type="file"
          />
          <div className="flex justify-center items-center">
            <button className="m-3 bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-gray-900">
              List your item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSell;