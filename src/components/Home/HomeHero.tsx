import React from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
const buttons = [
  {
    title: "What's New?",
    href: "/community",
  },
  {
    title: "Discover Events",
    href: "/events",
  },
  {
    title: "Buy/Sell",
    href: "/business",
  },
  {
    title: "Avail Services",
    href: "/services",
  },
];

const HomeHero = () => {
  const { user } = useUser();
  let name = user.name ? user.name : "Guest";
  name = name.split(" ")[0];
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
            Welcome to CommUnity {name}!
          </h1>
          <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl ">
            Explore Communities and Events in your area. Connect with businesses
            and people in your community.
          </p>
          <div className="flex gap-5 flex-col sm:flex-row">
            {buttons.map((button, idx) => (
              <Link
                key={idx}
                href={button.href}
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex m-5 transition ease-in-out hover:scale-105">
          <img
            src="/Community Hands.webp"
            alt="Community"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
