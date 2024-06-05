import React, { useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 w-full max-w-screen-lg mx-auto">
        <Link to="/">
          <div className="font-bold text-xl flex-grow logo">CLOJEL</div>
        </Link>
        <nav className="flex items-center">
          {(isTablet || isDesktop) && (
            <div className="flex items-center">
              <ul className="flex space-x-8 mr-16">
                <li>
                  <Link to="/" className="hover:text-gray-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-gray-600">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-gray-600">
                    Shopping Cart
                  </Link>
                </li>
              </ul>
              <div className="flex items-center">
                <div className="relative mr-4">
                  <Link to="/cart">
                    <IoCartOutline className="h-6 w-6 hover:text-gray-600" />
                  </Link>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {totalItems}
                    </span>
                  )}
                </div>
                <IoMdHeartEmpty className="h-6 w-6 mr-4 hover:text-gray-600" />
                <IoPersonOutline className="h-6 w-6 hover:text-gray-600" />
              </div>
            </div>
          )}
          {isMobile && (
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <div className="relative mr-2">
                  <Link to="/cart">
                    <IoCartOutline className="h-6 w-6 hover:text-gray-600" />
                  </Link>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {totalItems}
                    </span>
                  )}
                </div>
                <IoMdHeartEmpty className="h-6 w-6 mr-2 hover:text-gray-600" />
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
                      <Link to="/" className="hover:text-gray-600">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="hover:text-gray-600">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="hover:text-gray-600">
                        Shopping Cart
                      </Link>
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
