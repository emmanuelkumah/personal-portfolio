import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes["nav_container"]}>
      <nav>
        <section>
          <h2>EFK</h2>
        </section>
      </nav>
      <ul className={classes["nav_lists"]}>
        <li>Home</li>
        <li>About</li>
        <li>Porfolio</li>
      </ul>
    </div>
  );
};

export default Nav;
