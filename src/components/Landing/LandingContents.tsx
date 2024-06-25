import React from "react";
import { useLayoutEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdConnectWithoutContact, MdOutlineFestival } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingContents = () => {
  useLayoutEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div
          className="col-span-2 mb-8"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <p className="text-lg font-medium text-gray-700">
            USED ACROSS THE WORLD
          </p>
          <h2 className="mt-3 mb-4 text-3xl tracking-tight font-bold md:text-3xl">
            Trusted by over a million users
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Events, businesses, and your locality. Stay informed, get involved.
            Join us at CommUnity.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-xl font-medium text-gray-800 gap-2"
              >
                Sign Up
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <div>
            <MdOutlineFestival className="text-5xl" />
            <h3 className="mb-2 text-2xl font-bold">Explore local events</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Stay up to date with what is happening around you
            </p>
          </div>
          <div>
            <IoPeopleSharp className="text-5xl" />
            <h3 className="mb-2 text-2xl font-bold">1M+ Users</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              We have no doubt your community will be on board
            </p>
          </div>
          <div>
            <TbBusinessplan className="text-5xl" />
            <h3 className="mb-2 text-2xl font-bold">
              Platform for new beginnings
            </h3>
            <p className="font-light text-gray-500">
              Buy, sell, find what you want to do and make some money
            </p>
          </div>
          <div>
            <MdConnectWithoutContact className="text-5xl" />
            <h3 className="mb-2 text-2xl font-bold">Make new friendships</h3>
            <p className="font-light text-gray-500">
              Level up your social life. Start with your neighbors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContents;
