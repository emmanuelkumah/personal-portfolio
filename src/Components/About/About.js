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
          and web applications leveraging on the React Library. I have
          demonstrated proficiency in Product Development and Digital Strategy.
          I love helping businesses leverage on technology to achieve business
          goals whiles impacting the society
        </p>
      </section>
      <section>
        <h3>Technology Stack</h3>
      </section>
    </div>
  );
};

export default About;
