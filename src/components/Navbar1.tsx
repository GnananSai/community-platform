import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Login", href: "/login" },
  { text: "Register", href: "/register" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="w-full sticky">
      <nav className="bg-gray-800 w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 justify-between">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Link legacyBehavior href="/">
                  <a className="text-white font-bold text-xl">CommUnity</a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 justify-around">
                  {MENU_LIST.slice(0, 3).map((menu, idx) => (
                    <div
                      onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                      }}
                      key={menu.text}
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base"
                    >
                      <Navlink active={activeIdx === idx} {...menu} />
                    </div>
                  ))}
                  {MENU_LIST.slice(3, 5).map((menu, idx) => (
                    <div
                      onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                      }}
                      key={menu.text}
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base"
                    >
                      <Navlink active={activeIdx === idx} {...menu} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setNavActive(!navActive)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
        <div
          className={`${navActive ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {MENU_LIST.slice(0, 3).map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base"
              >
                <Navlink active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
