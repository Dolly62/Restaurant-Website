import React from 'react'
import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
     <header className={classes.head}>
        <div>ReactMeals</div>
        <button>Your Cart<span>0</span></button>
        </header> 
    </>
  )
}

export default Header
