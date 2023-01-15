import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bagIcon, seachIcon, userIcon } from "../../Icons/MaterialIcons";

export default function Header() {
  const [sideNav, setSideNav] = useState(false);
  const handleSideNav = () => {
    setSideNav(!sideNav);
    console.log("side", sideNav);
  };

  return (
    <>
      <header
        aria-label="Site Header"
        className="border-b border-gray-100 fixed-top bg-white"
      >
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 sm:mr-4 lg:hidden"
              onClick={handleSideNav}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link to="#" className="flex">
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
            </Link>
          </div>
          <div className="pl-10 w-full">
            <input type="text" name="" id="" />
          </div>
          <div className="flex flex-1 items-center justify-end ">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <Link
                to="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                About
              </Link>

              <Link
                to="/news"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                News
              </Link>

              <Link
                to="/products"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Contact
              </Link>
            </nav>
            <div className="ml-8 flex items-center">
              <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <Link
                    to="/cart"
                    className="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    {bagIcon}

                    <span className="sr-only">Cart</span>
                  </Link>
                </span>

                <span>
                  <Link
                    to="/account"
                    className="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    {userIcon}

                    <span className="sr-only"> Account </span>
                  </Link>
                </span>

                <span className="hidden sm:block">
                  <Link
                    to="/search"
                    className="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    {seachIcon}

                    <span className="sr-only"> Search </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`lg:hidden ${
          sideNav ? "w-full h-full p-2" : "w-0 h-0 invisible delay-0"
        }  lg:text-gray-500 bg-white flex flex-col transition-all z-50 delay-100 rounded-t-md absolute -mt-[18%]`}
        onClick={handleSideNav}
      >
        <div className="flex justify-end cursor-pointer ">
          <span className=" px-3 py-1 rounded-md hover:border-2  hover:border-red-700">
            hi
          </span>
        </div>
        <div className=" border-b-4 border-red-200 mb-5 mt-5">
          <h1 className="pt-5 font-extrabold">Ecommarce</h1>
        </div>

        <Link
          to="/about"
          className="  border-b-4 border-transparent mb-3 hover:border-current hover:text-red-700"
        >
          About
        </Link>

        <Link
          to="/news"
          className="  border-b-4 border-transparent mb-3 hover:border-current hover:text-red-700"
        >
          News
        </Link>

        <Link
          to="/products"
          className="  border-b-4 border-transparent mb-3 hover:border-current hover:text-red-700"
        >
          Products
        </Link>

        <Link
          to="/contact"
          className="  border-b-4 border-transparent mb-3 hover:border-current hover:text-red-700"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
