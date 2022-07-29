import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <header className={classes["hero_container"]}>
        <div className={classes["hero_col"]}>
          <section>
            <p>Hello I am </p>
            <h1>Emmanuel Fordjour Kumah</h1>
            <p>I help businesses increase customer engagement and retention</p>
            <p>
              by combinnng technology and design to create inviting, easy-to-use
              web applications
            </p>
            <div>
              <button>View portfolio</button>
              <button>Download CV</button>
            </div>
          </section>
        </div>
        <div className={classes["hero_col"]}>Col 2</div>
      </header>
    </div>
  );
};

export default Hero;
