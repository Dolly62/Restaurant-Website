import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotalAmount(
      (prevTotalAmount) => prevTotalAmount + item.price * item.amount
    );
  };

  const removeItemFromCartHandler = (id, price, amount) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalAmount((prevTotalAmount) => prevTotalAmount - price * amount);
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
