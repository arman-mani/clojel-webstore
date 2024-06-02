import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 w-full max-w-screen-lg mx-auto">
        <Link to="/">
          <div className="font-bold text-xl flex-grow">WEBSTORE</div>
        </Link>
        <nav className="flex items-center">
          {(isTablet || isDesktop) && (
            <div className="flex items-center">
              <ul className="flex space-x-8 mr-16">
                <li>
                  <a href="/" className="hover:text-gray-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-600">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/cart" className="hover:text-gray-600">
                    Shopping Cart
                  </a>
                </li>
              </ul>
              <div className="flex items-center">
                <IoCartOutline className="h-6 w-6 mr-4 hover:text-gray-600" />
                <IoMdHeartEmpty className="h-6 w-6 mr-4 hover:text-gray-600" />
                <IoPersonOutline className="h-6 w-6 hover:text-gray-600" />
              </div>
            </div>
          )}
          {isMobile && (
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <IoCartOutline className="h-6 w-6 mr-4 hover:text-gray-600" />
                <IoMdHeartEmpty className="h-6 w-6 mr-4 hover:text-gray-600" />
                <IoPersonOutline className="h-6 w-6 hover:text-gray-600" />
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              {isOpen && (
                <div className="fixed top-0 left-0 w-full h-40 bg-white flex flex-col items-center justify-center z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 absolute top-6 right-6 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <a href="/" className="hover:text-gray-600">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/products" className="hover:text-gray-600">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="/cart" className="hover:text-gray-600">
                        Shopping Cart
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>
      <div className="border-t border-solid border-black w-screen"></div>
    </>
  );
};

export default Header;
