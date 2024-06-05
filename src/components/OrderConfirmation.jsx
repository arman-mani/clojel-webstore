import React from "react";
import confirmedImage from "../assets/orderconfirmed2.png";

const OrderConfirmation = () => {
  return (
    <div className="p-4">
      <h1 className="mb-10 text-xl font-bold text-center">
        Order Confirmation
      </h1>
      <img
        src={confirmedImage}
        alt="Order Confirmed"
        className="mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      />
    </div>
  );
};

export default OrderConfirmation;
