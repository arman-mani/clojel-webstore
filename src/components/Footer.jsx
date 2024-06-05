import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="border-t border-solid border-black w-screen"></div>
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-8">
            <Link to="/">
              <h1 className="font-bold text-2xl logo">CLOJEL</h1>
            </Link>
          </div>
          <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:flex lg:justify-between lg:space-x-8 mb-4 gap-4">
            <div className="w-full lg:w-1/5 mb- lg:mb-0 px-4">
              <h3 className="font-semibold mb-2">About Us</h3>
              <p className="text-black max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
            <div className="w-full lg:w-1/5 mb-2 lg:mb-0 px-4">
              <h3 className="font-semibold mb-2">Products</h3>
              <ul>
                <li className="mb-2">Clothes</li>
                <li className="mb-2">Jewelry</li>
                <li className="mb-2">Electronics</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/5 mb-2 lg:mb-0 px-4">
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul>
                <li className="mb-2">Phone: (+46) 768281344</li>
                <li className="mb-2">
                  Address: Storgatan 67, Stockholm, Sweden
                </li>
                <li className="mb-2">Email: Webstore@gmail.com</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/5 mb-2 lg:mb-0 px-4">
              <h3 className="font-semibold mb-2">Help</h3>
              <ul>
                <li className="mb-2">Shipping & Returns</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Terms & Conditions</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/5 px-4 mt-4 lg:mt-0">
              <h3 className="font-semibold mb-2">Subscribe for Offers</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email here"
                  className="border border-black border-solid rounded-l-md p-2 flex-grow"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
