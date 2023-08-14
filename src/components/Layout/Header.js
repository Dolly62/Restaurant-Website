import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.head}>
        <div>ReactMeals</div>
        <HeaderCartButton />
      </header>
      <div className={classes.mainImg}></div>
    </>
  );
};

export default Header;
