import React, { useState, useContext } from "react";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 w-full max-w-screen-lg mx-auto">
        <Link to="/" onClick={closeMenu}>
          <div className="font-bold text-xl flex-grow logo">CLOJEL</div>
        </Link>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-16">
            <li>
              <Link
                to="/"
                className=" font-poppins hover:border-b hover:border-black pb-1"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className=" font-poppins hover:border-b hover:border-black pb-1"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className=" font-poppins hover:border-b hover:border-black pb-1"
                onClick={closeMenu}
              >
                Shopping Cart
              </Link>
            </li>
          </ul>
          <div className="flex items-center mr-4">
            <div className="relative mr-4">
              <Link to="/cart" onClick={closeMenu}>
                <IoCartOutline className="h-6 w-6 hover:text-gray-600" />
              </Link>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </div>
            <IoMdHeartEmpty className="h-6 w-6 mr-4 hover:text-gray-600" />
            <IoPersonOutline className="h-6 w-6 hover:text-gray-600" />
          </div>
        </nav>
        <div className="flex items-center md:hidden">
          <div className="flex items-center mr-4">
            <div className="relative mr-4">
              <Link to="/cart" onClick={closeMenu}>
                <IoCartOutline className="h-6 w-6 hover:text-gray-600" />
              </Link>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </div>
            <IoMdHeartEmpty className="h-6 w-6 mr-4 hover:text-gray-600" />
            <IoPersonOutline className="h-6 w-6 hover:text-gray-600" />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
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
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-40 bg-white flex flex-col items-center justify-center z-50 md:hidden border-b border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 absolute top-6 right-6 cursor-pointer"
              onClick={toggleMenu}
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
                <Link to="/" onClick={closeMenu} className="font-poppins">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={closeMenu}
                  className="font-poppins"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={closeMenu} className="font-poppins">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      <div className="border-t border-solid border-black w-screen"></div>
    </>
  );
};

export default Header;
