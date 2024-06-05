import React from "react";

const TextBanner = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-10 py-10 bg-gray-100">
      <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold logo">
        CLOJEL
      </h2>
      <p className="mt-2 text-sm sm:text-base md:text-sm text-gray-700">
        Our collection of{" "}
        <a href="#" className="text-gray-900 underline hover:text-gray-400">
          electronics
        </a>{" "}
        includes the latest smartphones, laptops, and accessories, ensuring you
        stay ahead in technology. Our{" "}
        <a href="#" className="text-gray-900 underline hover:text-gray-400">
          clothes
        </a>{" "}
        range features stylish and comfortable options for every occasion, from
        casual wear to formal attire. And our{" "}
        <a href="#" className="text-gray-900 underline hover:text-gray-400">
          jewelry
        </a>{" "}
        selection offers timeless pieces that add a touch of elegance to any
        outfit.
        <br />
        <br />
        Discover the best shopping experience at WebStore and elevate your
        lifestyle with our premium products.{" "}
        <a href="#" className="text-gray-900 underline hover:text-gray-400">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default TextBanner;
