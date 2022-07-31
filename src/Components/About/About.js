import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <section className={classes["about_container"]} id="about">
        <h2>About Me</h2>
        <div className={classes["title_border"]}>
          <span className={classes["small-border"]}></span>
          <span className={classes["large-border"]}></span>
          <span className={classes["small-border"]}></span>
        </div>
        <p>
          I am a Front End developer with proven experience in building websites
          and web applications leveraging on the React Library. Prior to
          Frontend development, I worked as a Product Developer and Digital
          Strategist, and I have expertise in managing the process of developing
          or enhancing existing products to meet client expectation effectively.
          I love helping businesses leverage on technology to achieve business
          goals whiles impacting the society
        </p>
      </section>
    </div>
  );
};

export default About;
