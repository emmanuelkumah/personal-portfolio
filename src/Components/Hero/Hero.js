import React from "react";
import classes from "./Hero.module.css";
import selfImg from "../../assets/imageSelf.png";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

const Hero = () => {
  return (
    <div>
      <header className={classes["hero_container"]}>
        <div className={classes["hero_col"]}>
          <section className={classes["hero_content"]}>
            <div className={classes["hero_top"]}>
              <span>Frontend Developer</span>
              <span>Technical Writer</span>
            </div>
            <h1 className={classes["hero_title"]}> Emmanuel F. Kumah.</h1>
            <h2 className={classes["hero_subTitle"]}>
              I build things for the web.
            </h2>
            <p className={classes["hero_caption"]}>
              I help businesses increase customer engagement and retention by
              combining technology and design to create inviting, easy-to-use
              web applications
            </p>

            <div className={classes["btn_container"]}>
              <button>View portfolio</button>
              <button>Download CV</button>
            </div>
          </section>
        </div>
        <div className={classes["hero_col"]}>
          <div className={classes["blob_img"]}></div>
          <div>
            <img src={selfImg} alt="emma" className={classes["hero_img"]} />
          </div>
          <section className={classes["profiles"]}>
            <div className={classes["profiles_container"]}>
              <FaLinkedinIn />
              <AiFillGithub />
              <FaTwitter />
              <SiHashnode />
            </div>
          </section>
        </div>
      </header>
    </div>
  );
};

export default Hero;
