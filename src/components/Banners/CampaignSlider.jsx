import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "clothes",
    title: "CLOTHES FOR DAYS",
  },
  {
    src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=3776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "jewelery",
    title: "GET ICED OUT",
  },
  {
    src: "https://images.unsplash.com/photo-1541785329306-188b94fac0e1?q=80&w=3861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "electronics",
    title: "TECHY STUFF",
  },
];

const CampaignSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleShopNow = () => {
    if (images[currentIndex].category === "clothes") {
      navigate(`/products?category=clothes`);
    } else {
      navigate(
        `/products?category=${encodeURIComponent(
          images[currentIndex].category
        )}`
      );
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative" style={{ height: "300px" }}>
      <img
        src={images[currentIndex].src}
        alt={`Best Seller ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white opacity-30"></div>
      <div className="absolute bottom-4 left-7 text-white z-10">
        <h2 className="text-2xl font-light mb-3 left-20 bg-black p-2">
          {images[currentIndex].title}
        </h2>
        <button
          onClick={handleShopNow}
          className="border-2 border-solid font-bold border-black text-black px-4 py-2 transition-transform duration-300 transform hover:scale-110"
        >
          SHOP NOW
        </button>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 z-10"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default CampaignSlider;
