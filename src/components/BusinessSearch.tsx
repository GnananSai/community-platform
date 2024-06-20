import React from 'react'

const BusinessSearch = () => {
  return (
    <div>
      <div className="xl:w-[40%] lg:w-[60%] md:w-[70%] xs:w-[96%] mx-auto h-full flex items-center justify-center m-5">
        <div
            className="w-full flex flex-col gap-1 p-2 border shadow-lg rounded-xl mx-2 bg-white dark:border-gray-400 dark:bg-gray-800">
            <div className="flex sm:px-4 mt-2 justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800">What do you want to buy?</h1>
                </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
                <img src="profile.webp" alt="User profile" className="w-[3.5rem] h-[3.5rem] rounded-full" />
                <textarea rows={1} className="w-full resize-none truncate border border-gray-400 rounded-full p-[12px] text-left xs:text-sm sm:text-lg  dark:bg-gray-700 dark:text-white dark:border-gray-500" placeholder="Shoes? Cycle?"></textarea>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default BusinessSearch;
