import React from "react";

const TextBanner = () => {
  return (
    <div className=" px-[150px] py-[50px] bg-gray-100 ">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">WEBSTORE</h2>
      <p className="mt-2 text-sm sm:text-base md:text-sm text-gray-700">
        Welcome to WebStore, your ultimate destination for electronics, clothes,
        and jewelry all in one place. At WebStore, we strive to offer the best
        products to meet all your needs, whether you're looking for the latest
        gadgets, trendy fashion, or exquisite jewelry.
        <br />
        <br />
        Our collection of{" "}
        <a href="#" className="text-gray-900 underline hover:text-gray-400">
          electronics
        </a>{" "}
        includes the latest smartphones, laptops, and accessories, ensuring you
        stay ahead in technology. Our{" "}
        <a href="#" className="text-gray-900  underline hover:text-gray-400">
          clothes
        </a>{" "}
        range features stylish and comfortable options for every occasion, from
        casual wear to formal attire. And our{" "}
        <a href="#" className="text-gray-900  underline hover:text-gray-400">
          jewelry
        </a>{" "}
        selection offers timeless pieces that add a touch of elegance to any
        outfit.
        <br />
        <br />
        Discover the best shopping experience at WebStore and elevate your
        lifestyle with our premium products.{" "}
        <a href="#" className="text-gray-900  underline hover:text-gray-400">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default TextBanner;
