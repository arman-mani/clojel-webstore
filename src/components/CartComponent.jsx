
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const CartComponent = () => {
 const { cartItems, removeItemFromCart, updateItemQuantity, clearCart, getTotalAmount } = useContext(CartContext);
 const navigate = useNavigate();


 const handleOrderConfirmation = () => {
  clearCart();
  navigate('/order-confirmation');
};

  if (cartItems.length === 0) {
   return <div>Your cart is empty</div>;
 }

 return (
  <div className="p-4">
    <h1 className="mb-10 text-xl font-bold text-center">Your Cart</h1>
    <div className="grid grid-cols-1 gap-4">
      {cartItems.map((item) => (
        <div key={item.id} className="bg-gray-100 rounded-md p-5">
          <img className="h-40 w-full object-contain mb-4" src={item.image} alt={item.title} />
          <h2 className="font-bold mb-2">{item.title}</h2>
          <p>Category: {item.category}</p>
          <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
          <p>Price: ${item.price}</p>
          <div className="flex items-center mt-2">
            <button 
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button 
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button 
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => removeItemFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center">
      <h2 className="font-bold">Total Amount: ${getTotalAmount().toFixed(2)}</h2>
      <button 
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={clearCart}
      >
        Clear Cart
      </button>
      <button 
        className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        onClick={handleOrderConfirmation}
      >
        Confirm Order
      </button>
    </div>
  </div>
);
}



export default CartComponent;
