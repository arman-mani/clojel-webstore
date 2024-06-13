import React from "react";
import aboutUsImage from "../../assets/unsplash_TamMbr4okv4.png";

const TextBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between px-4 sm:px-8 md:px-10 lg:px-10 py-10 bg-gray-100">
      <div className="flex flex-col justify-between md:w-1/2 md:mr-4">
        <div>
          <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold logo">
            CLOJEL
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-sm text-gray-700">
            Our collection of electronics includes the latest smartphones,
            laptops, and accessories, ensuring you stay ahead in technology. Our
            clothes range features stylish and comfortable options for every
            occasion, from casual wear to formal attire. And our jewelry
            selection offers timeless pieces that add a touch of elegance to any
            outfit.
            <br />
            <br />
            Discover the best shopping experience at CLOJEL and elevate your
            lifestyle with our premium products.{" "}
            <a href="#" className="text-gray-900 underline hover:text-gray-400">
              Learn more
            </a>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0 flex">
        <img
          src={aboutUsImage}
          alt="CLOJEL about us image"
          className="object-cover self-center w-full h-48 md:max-h-full"
        />
      </div>
    </div>
  );
};

export default TextBanner;
