import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes["footer_container"]}>
        <hr />
        <h2>Built with love</h2>
        <p>
          Made by E.F.K for <span>Humans</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
