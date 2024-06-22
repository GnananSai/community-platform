"use client"

import React from "react";
interface ServicesHeroProps {
  scrollToServicesAvail: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({scrollToServicesAvail}) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
              Get the Services you need, from local services around you
            </h1>
            <div className="text-center md:hidden">
              <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl ">
                Create a service to serve in your community or avail a service based on need
              </p>
            </div>
            <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl md:block hidden">
              Create a service to serve in your community or avail a service based on need
            </p>
            <div className="flex gap-5 md:hidden justify-center items-center">
                <a
                  onClick={scrollToServicesAvail}
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
                >
                  Create a service
                </a>
                <a
                  onClick={scrollToServicesAvail}
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
                >
                  Avail a service
                </a>
            </div>
            

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex m-5 transition ease-in-out hover:scale-105">
            <img
              src="/Service Cleaning.jpg"
              alt="Services"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHero;
