import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:space-x-8 mb-4 gap-4">
            <div className="w-full  lg:w-1/4 mb- lg:mb-0 px-4 lg:px-2">
              <h3 className="font-semibold mb-2">About Us</h3>
              <p className="text-black max-w-sm">
                The freshest clothes, the iciest jewelry and the newest
                electronics on the web.
              </p>
            </div>
            <div className="w-full lg:w-1/4 mb- lg:mb-0 px-4 lg:px-2">
              <h3 className="font-semibold mb-2">Products</h3>
              <ul>
                <li className="mb-2 cursor-pointer">Clothes</li>
                <li className="mb-2 cursor-pointer">Jewelry</li>
                <li className="mb-2 cursor-pointer">Electronics</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/4 mb- lg:mb-0 px-4 lg:px-2">
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul>
                <li className="mb-2">Phone: (+46) 768 281 344</li>
                <li className="mb-2">
                  Address: Storgatan 67, Stockholm, Sweden
                </li>
                <li className="mb-2">Email: CLOJEL@gmail.com</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/4 mb- lg:mb-0 px-4 lg:px-2">
              <h3 className="font-semibold mb-2">Help</h3>
              <ul>
                <li className="mb-2 cursor-pointer">Shipping & Returns</li>
                <li className="mb-2 cursor-pointer">Privacy Policy</li>
                <li className="mb-2 cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/4 px-4 mt-4 lg:mt-0 lg:px-2 max-w-sm lg:self-start">
              <h3 className="font-semibold mb-2">Subscribe for Offers</h3>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Enter email here"
                  className="border border-black border-solid p-2 flex-grow"
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                />
                <button
                  className="bg-black text-white px-4 py-2 border border-black"
                  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                  Subscribe
                </button>
              </div>
              <div className="flex justify-center space-x-4">
                <FaFacebookF className="text-xl cursor-pointer" />
                <FaInstagram className="text-xl cursor-pointer" />
                <FaTwitter className="text-xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
