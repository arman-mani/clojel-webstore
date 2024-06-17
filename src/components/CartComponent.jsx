import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartComponent = () => {
  const {
    cartItems,
    removeItemFromCart,
    updateItemQuantity,
    clearCart,
    getTotalAmount,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOrderConfirmation = () => {
    navigate("/order-confirmation", { state: { cartItems } });
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl px-4 text-center">
        You don't have anything in your cart. Visit our products and start
        shopping.
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="mb-10 text-xl font-bold text-center text-black">
        Your Cart
      </h1>
      <div
        className={`grid ${
          cartItems.length === 1
            ? "grid-cols-1 justify-center"
            : "grid-cols-1 sm:grid-cols-2"
        } gap-4`}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white p-5 border rounded-md shadow-md flex flex-col items-center ${
              cartItems.length === 1 ? "mx-auto w-full sm:w-1/2" : "w-full"
            }`}
          >
            <img
              className="h-48 w-32 object-contain mb-4"
              src={item.image}
              alt={item.title}
            />
            <div className="text-black text-center w-full">
              <h2 className="font-bold mb-2">{item.title}</h2>
              <div className="flex flex-col mb-4 text-center md:text-left">
                <p>
                  Rating: {item.rating.rate} ({item.rating.count} reviews)
                </p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
              <div className="flex items-center justify-center mt-2">
                <button
                  className="px-2 py-1 bg-black text-white hover:bg-gray-800"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-black text-white hover:bg-gray-800"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 px-4 py-2 border border-black text-black hover:bg-gray-200"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="font-bold text-black">
          Total Amount: ${getTotalAmount().toFixed(2)}
        </h2>
        <button
          className="mt-4 px-4 py-2 border border-black text-black hover:bg-gray-200"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <button
          className="mt-4 ml-4 px-4 py-2 bg-black text-white hover:bg-gray-800"
          onClick={handleOrderConfirmation}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
