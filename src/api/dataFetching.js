export const getProducts = async () => {
 try {
   const response = await fetch('https://fakestoreapi.com/products');
   if (!response.ok) {
     throw new Error('Failed to fetch products');
   }
   return await response.json();
 } catch (error) {
   console.error('Error fetching products:', error);
   throw error;
 }
};

export const getProductsCategory = async () => {
 try {
   const response = await fetch('https://fakestoreapi.com/products/categories');
   if (!response.ok) {
     throw new Error('Failed to fetch product categories');
   }
   return await response.json();
 } catch (error) {
   console.error('Error fetching product categories:', error);
   throw error;
 }
};
export const getProductById = async (id) => {
 const response = await fetch(`https://fakestoreapi.com/products/${id}`);
 if (!response.ok) {
   throw new Error('Failed to fetch product details');
 }
 return response.json();
};
