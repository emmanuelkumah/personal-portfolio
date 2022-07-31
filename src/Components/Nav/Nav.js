import React, { useState } from "react";
import classes from "./Nav.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuIconClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={classes["nav_container"]}>
      <nav>
        <section>
          <h2>E.F.K.</h2>
        </section>
      </nav>
      <div className={classes["navMenu--icon"]} onClick={handleMenuIconClick}>
        {isMenuClicked ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={`${
          isMenuClicked ? classes["nav_lists_mobile"] : classes["nav_lists"]
        }`}
      >
        <Link to="#home" smooth className={classes["nav_item"]}>
          <li>Home</li>
        </Link>
        <Link to="#about" smooth className={classes["nav_item"]}>
          <li>About</li>
        </Link>
        <Link to="#portfolio" smooth className={classes["nav_item"]}>
          <li>Portfolio</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
