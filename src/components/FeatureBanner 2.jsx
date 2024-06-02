import React from "react";
import { FaTruck, FaUndo, FaLock } from "react-icons/fa";

const FeatureBanner = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center">
        <div className="flex items-center p-4">
          <FaTruck className="text-md sm:text-2xl text-yellow-500" />
          <div className="ml-4">
            <h3 className="text-base sm:text-sm font-bold">FREE SHIPPING</h3>
            <p className="text-base sm:text-xs">
              Free shipping on all EU order or order above 2000SEK
            </p>
          </div>
        </div>
        <div className="flex items-center p-4">
          <FaUndo className="text-md sm:text-2xl text-yellow-500" />
          <div className="ml-4">
            <h3 className="text-base sm:text-sm font-bold">30 Days Return</h3>
            <p className="text-base sm:text-xs">
              Simply return it within 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="flex items-center p-4">
          <FaLock className="text-md sm:text-2xl text-yellow-500" />
          <div className="ml-4">
            <h3 className="text-base sm:text-sm font-bold">
              100% Payment Secure
            </h3>
            <p className="text-base sm:text-xs">
              Simply return it within 30 days for an exchange
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
