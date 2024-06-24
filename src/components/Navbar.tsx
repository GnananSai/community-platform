"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navlink from "./Navlink";
import { useAuth } from "@/context/AuthContext";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Login", href: "/login" },
  { text: "Register", href: "/register" },
];

const LOGGED_IN_MENU_LIST = [
  { text: "Home", href: "/home" },
  { text: "Community", href: "/community" },
  { text: "Events", href: "/events" },
  { text: "Business", href: "/business" },
  { text: "Services", href: "/services" },
];

interface NavbarProps {
  isAuth: boolean;
}

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const { isAuth, logout } = useAuth();

  return (
    <header className="w-full">
      <nav className="bg-blue-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center h-16 justify-between">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0">
                <Link legacyBehavior href="/">
                  <a className="text-white font-bold text-xl">CommUnity</a>
                </Link>
              </div>
              <div className="hidden md:flex justify-between w-full">
                {isAuth ? (
                  <div className="ml-10 flex items-baseline space-x-4">
                    {LOGGED_IN_MENU_LIST.slice(0, 5).map((menu, idx) => (
                      <div
                        onClick={() => {
                          setActiveIdx(idx);
                          setNavActive(false);
                        }}
                        key={menu.text}
                        className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                      >
                        <Navlink active={activeIdx === idx} {...menu} />
                      </div>
                    ))}
                    <div
                      onClick={() => {
                        setActiveIdx(5);
                        setNavActive(false);
                        logout();
                      }}
                      key={"Logout"}
                      className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                    >
                      <Navlink
                        active={activeIdx === 5}
                        text="Logout"
                        href="/"
                      />
                    </div>
                    <div className="relative flex w-full gap-2 md:w-max items-center justify-between ">
                      <input
                        type="search"
                        placeholder="Type Something..."
                        className="pr-20 min-w-[288px] px-4 py-2 rounded-3xl"
                      />
                      <button className="!absolute right-1 px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="25"
                          height="25"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="ml-10 flex items-baseline space-x-4">
                    {MENU_LIST.slice(0, 3).map((menu, idx) => (
                      <div
                        onClick={() => {
                          setActiveIdx(idx);
                          setNavActive(false);
                        }}
                        key={menu.text}
                        className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                      >
                        <Navlink active={activeIdx === idx} {...menu} />
                      </div>
                    ))}
                  </div>
                )}
                {isAuth ? (
                  <div className="ml-10 flex items-basline space-x-4">
                    {LOGGED_IN_MENU_LIST.slice(5, 6).map((menu, idx) => (
                      <div
                        onClick={() => {
                          setActiveIdx(idx);
                          setNavActive(false);
                        }}
                        key={menu.text}
                        className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                      >
                        <Navlink active={activeIdx === idx} {...menu} />
                      </div>
                    ))}
                    {/* <div
                      onClick={() => {
                        setActiveIdx(5);
                        setNavActive(false);
                        logout();
                      }}
                      key={"Logout"}
                      className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                    >
                      <Navlink
                        active={activeIdx === 5}
                        text="Logout"
                        href="/"
                      />
                    </div> */}
                    <img
                      src="profile.webp"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-black cursor-pointer"
                    />
                  </div>
                ) : (
                  <div className="ml-10 flex items-baseline space-x-4">
                    {MENU_LIST.slice(3, 5).map((menu, idx) => (
                      <div
                        onClick={() => {
                          setActiveIdx(idx);
                          setNavActive(false);
                        }}
                        key={menu.text}
                        className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                      >
                        <Navlink active={activeIdx === idx} {...menu} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex md:hidden gap-5 w-full justify-end">
              {isAuth ? (
                <img
                  src="profile.webp"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-black cursor-pointer"
                />
              ) : (
                <></>
              )}
              <button
                onClick={() => setNavActive(!navActive)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!navActive ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${navActive ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          {isAuth ? (
            <div className="px-2 pb-3 space-y-1 sm:px-3">
              {LOGGED_IN_MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                  className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                >
                  <Navlink active={activeIdx === idx} {...menu} />
                </div>
              ))}
              <div
                onClick={() => {
                  setActiveIdx(5);
                  setNavActive(false);
                  logout();
                }}
                key={"Logout"}
                className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
              >
                <Navlink active={activeIdx === 5} text="Logout" href="/" />
              </div>
            </div>
          ) : (
            <div className="px-2 pb-3 space-y-1 sm:px-3">
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                  className="text-white hover:bg-blue-gray-700 px-3 py-2 rounded-md text-base"
                >
                  <Navlink active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
