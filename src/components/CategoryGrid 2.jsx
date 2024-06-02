import React from "react";

const categories = [
  {
    title: "ELECTRONICS",
    imageUrl:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "CLOTHES",
    imageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "JEWERLY",
    imageUrl:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2 md:px-4 lg:px-6 mb-10 max-w-screen-2xl mx-auto">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative  h-48 md:h-64 lg:h-72 bg-cover bg-center group"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-bold">
              {category.title}
            </span>
          </div>
          <div className="absolute inset-0  pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
