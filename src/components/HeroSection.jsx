import React from "react";
import DiscountBanner from "./DiscountBanner";

const HeroSection = () => {
  return (
    <div className="relative h-64 md:h-96 lg:h-[30rem] flex items-center justify-center overflow-hidden group">
      <DiscountBanner />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1660224319989-c99874388a6d?q=80&w=3731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-lg sm:text-xl md:text-4xl lg:text-xxl font-bold mb-2 mt-12">
          Discover Your Perfect Style at WebStore!
        </h1>
        <p className="text-white text-xs sm:text-sm md:text-lg lg:text-sm mb-6 mx-auto sm:max-w-xs md:max-w-md lg:max-w-lg font-semibold">
          Shop now and transform your lifestyle with our exclusive collections!
        </p>
        <button className="text-white font-bold py-2 sm:py-3 px-4 sm:px-6 border border-white border-2 rounded-xl transition-transform duration-300 transform group-hover:scale-110">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
