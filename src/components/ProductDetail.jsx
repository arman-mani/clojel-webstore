// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/dataFetching'; 
function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
   queryKey: ['product', id],
   queryFn: () => getProductById(id)
 });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details.</div>;

  const { image, title, category, rating, price, description } = data;

  return (
    <div>
      <h1 className="mb-10">Product Detail</h1>
      <div className="bg-gray-100 mb-5 rounded-md p-5">
        <img className="h-40" src={image} alt={`${title}`} />
        <h2 className="font-bold mb-2">{title}</h2>
        <p>Category: {category}</p>
        <p>Rating: {rating.rate} ({rating.count} reviews)</p>
        <p>Price: ${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
