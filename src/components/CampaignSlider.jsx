import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=3850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=3776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541785329306-188b94fac0e1?q=80&w=3861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CampaignSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleNext = () => {
    setShowLeftArrow(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex === images.length - 1) {
        setShowRightArrow(false);
      }
      return newIndex < images.length ? newIndex : prevIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setShowRightArrow(true);
      if (newIndex <= 0) {
        setShowLeftArrow(false);
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <div className="relative text-center" style={{ height: "300px" }}>
      <img
        src={images[currentIndex]}
        alt={`Best Seller ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 text-black ">
        <h2 className="text-2xl font-bold mb-2 ml-10">BEST SELLERS</h2>
        <button className="bg-black text-white px-4 py-2 transition-transform duration-300 transform hover:scale-110">
          SHOP NOW
        </button>
      </div>
      {showLeftArrow && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2"
        >
          &lt;
        </button>
      )}
      {(showRightArrow || currentIndex < images.length - 1) && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default CampaignSlider;
