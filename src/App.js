import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartItemShown, setCartItemShown] = useState(false);

  const showCartItemHandler = () => {
    setCartItemShown(true);
  };

  const hideCartItemHandler = () => {
    setCartItemShown(false);
  };

  return (
    <CartProvider>
      {cartItemShown && <Cart onHideCart={hideCartItemHandler} />}
      <Header onShowCart={showCartItemHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
