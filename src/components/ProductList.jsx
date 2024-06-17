import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { getProducts, getProductsCategory } from "../api/dataFetching";
import CampaignSlider from "./Banners/CampaignSlider";
import ScrollingBanner from "./Banners/ScrollingBanner";
import AppBanner from "./Banners/AppBanner";
import PaymentBanner from "./Banners/PaymentBanner";

const ITEMS_PER_PAGE = 12;

const ProductList = () => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getProductsCategory,
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      if (category.toLowerCase() === "clothes") {
        setSelectedCategories(["men's clothing", "women's clothing"]);
      } else {
        setSelectedCategories([category.toLowerCase()]);
      }
    } else {
      setSelectedCategories(["All"]);
    }
  }, [location]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favoriteId) => favoriteId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) => {
      const newCategories = prevCategories.includes(category.toLowerCase())
        ? prevCategories.filter((cat) => cat !== category.toLowerCase())
        : [
            ...prevCategories.filter((cat) => cat !== "All"),
            category.toLowerCase(),
          ];

      return newCategories.length === 0 ? ["All"] : newCategories;
    });
  };

  if (productsLoading || categoriesLoading) return <div>Loading...</div>;
  if (productsError || categoriesError)
    return <div>Failed to load data. Please try again later.</div>;

  const filteredProducts = selectedCategories.includes("All")
    ? products
    : products.filter((product) =>
        selectedCategories.includes(product.category.toLowerCase())
      );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    currentPage * ITEMS_PER_PAGE,
    filteredProducts.length
  );

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return (
    <div>
      <ScrollingBanner />
      <CampaignSlider />
      <div className="flex flex-col md:flex-row bg-gray-100">
        <div className="w-full md:w-1/5 p-5">
          <h2 className="font-bold mb-4">Filter by category</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category}
                className={`flex justify-between items-center cursor-pointer p-2 bg-black text-white ${
                  selectedCategories.includes(category.toLowerCase())
                    ? "bg-gray-700"
                    : ""
                }`}
                onClick={() => toggleCategory(category)}
              >
                <span className="uppercase text-sm">{category}</span>
                <span>
                  {selectedCategories.includes(category.toLowerCase()) ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-4/5 p-5">
          <h1 className="mb-10 text-xl font-bold">OUR PRODUCTS</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts
              .slice(startIndex, endIndex)
              .map(({ id, image, title, price }) => (
                <div
                  key={id}
                  className="relative bg-white p-6 pt-2 border rounded-md shadow-md h-58 w-full hover:bg-gray-100"
                >
                  <button
                    className={`absolute top-2 right-2 text-2xl ${
                      favorites.includes(id) ? "text-red-500" : "text-gray-400"
                    } z-10`}
                    onClick={() => toggleFavorite(id)}
                  >
                    {favorites.includes(id) ? (
                      <IoMdHeart />
                    ) : (
                      <IoMdHeartEmpty />
                    )}
                  </button>
                  <Link to={`/product/${id}`} className="block h-full pt-4">
                    <img
                      className="h-32 w-full object-contain mb-2"
                      src={image}
                      alt={title}
                    />
                    <h2 className="font-bold mb-2 text-left text-sm truncate hover:text-gray-500">
                      {title}
                    </h2>
                    <p className="text-lg font-semibold mb-2 text-left">
                      {price} $
                    </p>
                  </Link>
                </div>
              ))}
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="bg-black text-white px-4 py-2 "
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="bg-black text-white px-4 py-2 "
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <AppBanner />
      <PaymentBanner />
    </div>
  );
};
export default ProductList;
