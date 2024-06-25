import React from 'react';

const CommunitySearch = () => {
  return (
    <div className="w-full max-w-md mx-auto mb-10"> 
      <div className="flex items-center justify-center">
        <div className="w-full flex flex-col gap-1 p-2 border shadow-lg rounded-xl bg-white border-t-4 border-t-blue-gray-800">
          <div className="flex sm:px-4 mt-2 justify-between">
            <h1 className="text-xl font-semibold text-gray-800">Join a Community</h1>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <img src="profile.webp" alt="User profile" className="w-[3.5rem] h-[3.5rem] rounded-full" />
            <input
              type="text"
              className="block w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
              placeholder="Manipal, Sai Gardens, ..."
            />
            <button
              type="button"
              className="bg-blue-gray-800 text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border hover:border-blue-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-900 transition ease-in-out hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySearch;
