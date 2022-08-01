import React, { useEffect, useRef } from "react";
import classes from "./Hero.module.css";
import selfImg from "../../assets/imageSelf.png";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { HashLink as Link } from "react-router-hash-link";
import { gsap } from "gsap";

const Hero = () => {
  const heroContent = useRef(null);
  const heroImg = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      [heroContent.current, heroImg.current],
      { autoAlpha: 0, y: -10 },
      { autoAlpha: 1, duration: 1, y: 10, stagger: 1.5, delay: 1 }
    );
  }, []);

  return (
    <div>
      <header className={classes["hero_container"]} id="home">
        <div className={classes["hero_col"]}>
          <section className={classes["hero_content"]} ref={heroContent}>
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
              <Link to="#portfolio" className={classes["btn-portfolio"]}>
                <button>View portfolio</button>
              </Link>
              <button>Download CV</button>
            </div>
          </section>
        </div>
        <div className={classes["hero_col"]}>
          <div className={classes["blob_img"]}></div>
          <div>
            <img
              src={selfImg}
              alt="emma"
              className={classes["hero_img"]}
              ref={heroImg}
            />
          </div>
          <section className={classes["profiles"]}>
            <div className={classes["profiles_container"]}>
              <a
                href="https://www.linkedin.com/in/emmanuelfkumah/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/emmanuelkumah"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://twitter.com/emmanuelfkumah"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                href="https://efkumah.hashnode.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <SiHashnode />
              </a>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
};

export default Hero;
