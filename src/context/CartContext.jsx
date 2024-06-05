import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex >= 0) {
        return prevItems.map((cartItem, index) =>
          index === itemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
