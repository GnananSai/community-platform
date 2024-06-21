import React from 'react'

const CommunityHero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
              Join Your Community
            </h1>
            <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl ">
              Know all the news around you in a click
            </p>
            <div className="flex gap-5 md:hidden">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
                >
                  Buy an item
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
                >
                  Sell an item
                </a>
            </div>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex m-5 transition ease-in-out hover:scale-105">
            <img
              src="/communityheader.jpg"
              alt="Business"
              className="rounded-lg"
            />
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default CommunityHero