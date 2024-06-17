import React from "react";
import { FaTruck, FaUndo, FaLock } from "react-icons/fa";

const FeatureBanner = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center">
        <div className="flex items-center p-4">
          <FaTruck className="text-md sm:text-2xl text-white" />
          <div className="ml-4">
            <h3 className="text-base sm:text-sm font-bold text-white">
              FREE SHIPPING
            </h3>
            <p className="text-base sm:text-xs text-white">
              Free shipping on all orders above $200 at no extra cost.
            </p>
          </div>
        </div>
        <div className="flex items-center p-4">
          <FaUndo className="text-md sm:text-2xl text-white" />
          <div className="ml-4">
            <h3 className="text-base sm:text-sm font-bold text-white">
              30 Days Return
            </h3>
            <p className="text-base sm:text-xs text-white">
              Simply return it within 30 days for an exchange, no questions
              asked.
            </p>
          </div>
        </div>
        <div className="flex items-center p-4">
          <FaLock className="text-md sm:text-2xl text-white" />
          <div className="ml-4">
            <h3 className="text-base sm:text-sm font-bold text-white">
              100% Payment Secure
            </h3>
            <p className="text-base sm:text-xs text-white">
              Your transactions are always 100% secure with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
