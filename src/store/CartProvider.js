import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].amount += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }

    setTotalAmount(
      (prevTotalAmount) => prevTotalAmount + item.price * item.amount
    );
  };

  const removeItemFromCartHandler = (itemId) => {
    const itemToRemove = cartItems.find((item) => item.id === itemId);

    if (itemToRemove.amount === 1) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
      setTotalAmount(
        (prevTotalAmount) =>
          prevTotalAmount - itemToRemove.price * itemToRemove.amount
      );
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, amount: item.amount - 1 } : item
        )
      );
    }
  };

  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
