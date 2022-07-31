import React from "react";
import classes from "./Nav.module.css";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  return (
    <div className={classes["nav_container"]}>
      <nav>
        <section>
          <h2>EFK</h2>
        </section>
      </nav>
      <ul className={classes["nav_lists"]}>
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
