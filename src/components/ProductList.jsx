// src/components/ProductList.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/dataFetching';

function ProductList() {
  const { data, isLoading, isError } = useQuery({ queryKey: ['products'], queryFn: getProducts });

  return (
    <div>
      <h1 className="mb-10">Product List</h1>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Failed to load products. Please try again later.</div>}
      {data && Array.isArray(data) && data.length > 0 ? (
        data.map(({ id, image, title, category, rating, price }) => (
          <Link to={`/product/${id}`} key={id} className="block bg-gray-100 mb-5 rounded-md p-5">
            <img className="h-40" src={image} alt={`${title}`} />
            <h2 className="font-bold mb-2">{title}</h2>
            <p>Category: {category}</p>
            <p>Rating: {rating.rate} ({rating.count} reviews)</p>
            <p>Price: ${price}</p>
          </Link>
        ))
      ) : (
        !isLoading && <div>No products available.</div>
      )}
    </div>
  );
}

export default ProductList;
