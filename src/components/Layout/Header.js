import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.head}>
        <div>ReactMeals</div>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes.mainImg}></div>
    </>
  );
};

export default Header;
