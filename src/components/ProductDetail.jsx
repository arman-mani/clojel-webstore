import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/dataFetching";
import { CiShoppingCart } from "react-icons/ci";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import TextBanner from "./Banners/TextBanner";
import PaymentBanner from "./Banners/PaymentBanner";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
  const [isFavorite, setIsFavorite] = useState(false);

  const { addItemToCart } = useContext(CartContext);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details.</div>;

  const { image, title, rating, price, description } = data;

  const goBack = () => {
    navigate(-1);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    addItemToCart({
      id,
      image,
      title,
      rating,
      price,
      description,
    });
  };

  return (
    <div>
      <div className="flex flex-wrap p-5">
        <div className="w-full lg:w-1/2 p-5 flex flex-col items-center relative">
          <div className="bg-white w-full max-w-xs h-auto">
            <img
              className="object-contain w-full h-full"
              src={image}
              alt={title}
            />
          </div>
          <button
            onClick={goBack}
            className="absolute left-0 mt-4 bg-black text-white rounded-full p-3 flex items-center justify-center"
          >
            <MdArrowBackIosNew className="text-xl" />
          </button>
          <button
            onClick={toggleFavorite}
            className="absolute top-0 right-0 mt-4 mr-4 bg-transparent text-2xl"
          >
            {isFavorite ? (
              <IoMdHeart className="text-red-500" />
            ) : (
              <IoMdHeartEmpty className="text-gray-400" />
            )}
          </button>
        </div>
        <div className="w-full lg:w-1/2 p-5">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-2xl font-semibold mb-4">{price} $</p>
          <button
            className="bg-black text-white py-3 px-6 flex items-center justify-center text-lg font-semibold w-full mb-4"
            onClick={handleAddToCart}
          >
            ADD TO CART <CiShoppingCart className="ml-2 text-2xl" />
          </button>
          <div className="text-gray-600 text-sm mb-4">
            <p>In stock</p>
            <p>Find in store</p>
          </div>
          <div className="mb-4">
            <button className="bg-transparent border border-black text-black py-2 px-4 font-semibold w-full">
              Size Guide
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-transparent border border-black text-black py-2 px-4 font-semibold w-full">
              Find in store
            </button>
          </div>
          <div className="mb-4">
            <p className="font-semibold">
              Rating: {rating.rate} ({rating.count} reviews)
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Description</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <TextBanner />
      <PaymentBanner />
    </div>
  );
}

export default ProductDetail;
