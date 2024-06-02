import React from "react";

const AppBanner = () => {
  return (
    <div className="bg-gradient-to-r from-lime-300 to-green-300 text-black text-center py-8">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-bold border border-black px-4 py-2 inline-block">
          WEBSTORE-APP
        </h2>
        <p className="text-lg">Updates on your orders and returns?</p>
        <button className="bg-black text-white py-2 px-6 transition-transform duration-300 transform hover:scale-110">
          DOWNLOAD NOW
        </button>
      </div>
    </div>
  );
};

export default AppBanner;
