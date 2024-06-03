// src/components/ProductDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/dataFetching'; 
import CartContext from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
   queryKey: ['product', id],
   queryFn: () => getProductById(id)
 });
 const { addItemToCart } = useContext(CartContext);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details.</div>;

  const { image, title, category, rating, price, description } = data;

  const handleAddToCart = () => {
    addItemToCart({
      id,
      image,
      title,
      category,
      rating,
      price,
      description
    });
  };

  return (
    <div>
      <h1 className="mb-10">Product Detail</h1>
      <div className="bg-gray-100 mb-5 rounded-md p-5">
        <img className="h-40 w-full object-contain mb-4" src={image} alt={`${title}`} />
        <h2 className="font-bold mb-2">{title}</h2>
        <p>Category: {category}</p>
        <p>Rating: {rating.rate} ({rating.count} reviews)</p>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
