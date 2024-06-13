import React from "react";

const paymentOptions = [
  {
    name: "Mastercard",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png",
  },
  {
    name: "Visa",
    imageUrl:
      "https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png",
  },
  { name: "PayPal", imageUrl: "https://pngimg.com/d/paypal_PNG25.png" },
  {
    name: "Klarna",
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/07/Klarna-Emblem.png",
  },
  {
    name: "Apple Pay",
    imageUrl:
      "https://wayne.bank/wp-content/uploads/2023/02/Apple-Pay-Card-Image.png",
  },
];

const PaymentBanner = () => {
  return (
    <div className="bg-black py-4">
      <div className="flex justify-center items-center space-x-4">
        {paymentOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-full p-2">
            <img
              src={option.imageUrl}
              alt={option.name}
              className="h-6 w-10 sm:h-6 sm:w-10 md:h-7 md:w-10 lg:h-6 lg:w-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentBanner;
