import React from "react";
import HeroSection from "../components/HeroSection";
import AppBanner from "../components/AppBanner";
import PaymentBanner from "../components/PaymentBanner";
import TextBanner from "../components/TextBanner";

const categories = [
  {
    title: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Clothes",
    imageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Jewelry",
    imageUrl:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const LandingPage = () => {
  return (
    <div className="m-0 p-0">
      <HeroSection />
      <div className="text-center my-8 px-4">
        <h2 className="text-2xl font-bold mb-4">OUR PRODUCTS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-20">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative bg-gray-300 h-48 md:h-64 lg:h-72 bg-cover bg-center group p-4 rounded-md"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-bold">
                {category.title}
              </span>
            </div>
            <div className="absolute inset-0 border-4 border-white rounded-md pointer-events-none"></div>
          </div>
        ))}
      </div>
      <TextBanner />
      <AppBanner />
      <PaymentBanner />
    </div>
  );
};

export default LandingPage;
