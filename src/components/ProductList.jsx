import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/dataFetching';

function ProductList() {
 const {data, isLoading, isError } = useQuery({ queryKey: ['products'], queryFn: getProducts });
 return (
  <div>
   <h1 className="mb-10">Product List</h1>

   {isLoading && <div>Loading...</div>}
   {isError && <div>Error</div>}
   {data &&
      data.map((Products) => {
       return ( 
       <div key={Products.id} className="bg-gray-100 mb-5 rounded-md p-5">
        <img className= " h-40" src={Products.image} alt="product" />
        <h2 className="font-bold mb-2">{Products.title}</h2>
        <p>{Products.category}</p>
        <p>{Products.rating.rate}</p>
        <p>{Products.price}</p>
       </div>
       ); 
      })
     }
  </div>
 );
}

export default ProductList