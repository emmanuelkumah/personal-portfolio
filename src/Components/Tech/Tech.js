import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaJoomla } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { SiAdobephotoshop } from "react-icons/si";
import classes from "./Tech.module.css";

const Tech = () => {
  return (
    <div>
      <section>
        <div className={classes["tech-title"]}>
          <h2>Technologies I use</h2>
          <div className={classes["title_border"]}>
            <span className={classes["small-border"]}></span>
            <span className={classes["large-border"]}></span>
            <span className={classes["small-border"]}></span>
          </div>
        </div>

        <div className={classes["tech-container"]}>
          <IoLogoJavascript />
          <FaReact />
          <FaWordpressSimple />
          <FaJoomla />
          <SiAdobephotoshop />
          <BiGitBranch />
        </div>
      </section>
    </div>
  );
};

export default Tech;
