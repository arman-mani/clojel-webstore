import React from "react";

const AppBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-300 text-black text-center py-8">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-8">
        <img
          src="https://technicallyteamann.com/wp-content/uploads/2013/12/TT-qr-code.png"
          alt="QR Code"
          className="w-32 h-32 object-contain"
        />
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <h2
            className="text-xl font-bold border border-black px-4 py-2 inline-block logo"
            style={{ backgroundColor: "transparent" }}
          >
            CLOJEL-APP
          </h2>
          <p className="text-lg">Updates on your orders and returns?</p>
          <button className="bg-black text-white py-2 px-6 transition-transform duration-300 transform hover:scale-110">
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
