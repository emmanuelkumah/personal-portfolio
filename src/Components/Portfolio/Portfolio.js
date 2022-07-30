import React from "react";
import blobImg from "../../assets/blob.svg";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div>
      <section className={classes["portfolio_container"]}>
        <img className={classes["blob_img"]} src={blobImg} alt="blobing" />
        <h2>Portfolio</h2>
        <div></div>
      </section>
    </div>
  );
};

export default Portfolio;
