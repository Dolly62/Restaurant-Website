import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItemShown, setCartItemShown] = useState(false);

  const showCartItemHandler = () => {
    setCartItemShown(true);
  };

  const hideCartItemHandler = () => {
    setCartItemShown(false);
  };

  return (
    <Fragment>
      {cartItemShown && <Cart onHideCart={hideCartItemHandler} />}
      <Header onShowCart={showCartItemHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
