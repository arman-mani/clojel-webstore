import React from "react";

const DiscountBanner = () => {
  return (
    <div className="absolute top-0 w-full bg-black text-white text-center py-2 z-20">
      <span className="text-sm sm:text-base md:text-lg lg:text-sm">
        <span className="font-medium">ARE YOU NEW HERE?</span>
        <span className="font-bold"> Get 10% discount!</span>
        <span className="font-medium"> With code: </span>
        <span className="font-bold">HELLO!</span>
      </span>
    </div>
  );
};

export default DiscountBanner;
