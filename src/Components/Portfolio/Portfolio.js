import React from "react";
import classes from "./Portfolio.module.css";
import fitLfyImg from "../../assets/fitLyf.png";
import delivryGuy from "../../assets/delivryGuy.png";
import okada from "../../assets/okada.png";
import tastyPouch from "../../assets/tastyPouch.png";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div>
      <section className={classes["portfolio_container"]} id="portfolio">
        <h2>Cool Stuff I have Built</h2>
        <div className={classes["title_border"]}>
          <span className={classes["small-border"]}></span>
          <span className={classes["large-border"]}></span>
          <span className={classes["small-border"]}></span>
        </div>
      </section>
      <section className={classes["portfolio-row"]}>
        <div className={classes["portfolio-col"]}>
          <div>
            <img
              src={fitLfyImg}
              alt="fitLfy"
              className={classes["portfolio-img"]}
            />
          </div>
        </div>
        <div className={classes["portfolio-col"]}>
          <section className={classes["portfolio-content"]}>
            <p>Exercises</p>
            <h2>Fit Lyf</h2>
            <div className={classes["portfolio-details"]}>
              <p>
                Fit Lyf is a web app that allows busy professionals access tons
                of exercises to help engage in regular physical activities, and
                boost endurance
              </p>
            </div>
            <div className={classes["portfolio-icons"]}>
              <a
                href="https://github.com/emmanuelkumah/fit-lyf"
                target="_blank"
                rel="noreferrer"
                className={classes["p-icon-2"]}
              >
                <AiOutlineGithub className={classes["p-icon"]} />
              </a>
              <a
                href="https://fitlyf.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={classes["p-icon-2"]}
              >
                <AiOutlineLink className={classes["p-icon"]} />
              </a>
            </div>
          </section>
        </div>
      </section>
      <section className={classes["portfolio-row-2"]}>
        <div className={classes["portfolio-col"]}>
          <div>
            <img
              src={okada}
              alt="fitLfy"
              className={classes["portfolio-img"]}
            />
          </div>
        </div>
        <div className={classes["portfolio-col"]}>
          <section className={classes["portfolio-content-2"]}>
            <p>Ride Booking</p>
            <h2>Okada Ride</h2>
            <div className={classes["portfolio-details-2"]}>
              <p>
                Okada Ride is a hub to search and book motorbike for your next
                commute.Beat the traffic and enjoy a hustle free and refreshing
                ride
              </p>
            </div>
            <div className={classes["portfolio-icons"]}>
              <a
                href="https://github.com/emmanuelkumah/okada-ride"
                target="_blank"
                rel="noreferrer"
                className={classes["p-icon-2"]}
              >
                <AiOutlineGithub className={classes["p-icon-2"]} />
              </a>
              <a
                href="https://rideokada.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={classes["p-icon-2"]}
              >
                <AiOutlineLink className={classes["p-icon-2"]} />
              </a>
            </div>
          </section>
        </div>
      </section>
      <section className={classes["portfolio-row"]}>
        <div className={classes["portfolio-col"]}>
          <div>
            <img
              src={delivryGuy}
              alt="dlivery"
              className={classes["portfolio-img"]}
            />
          </div>
        </div>
        <div className={classes["portfolio-col"]}>
          <section className={classes["portfolio-content"]}>
            <p>Delivery</p>
            <h2>Delivry Guy</h2>
            <div className={classes["portfolio-details"]}>
              <p>
                Find the perfect route to delivery multiple items. Search places
                of interest
              </p>
            </div>
            <div className={classes["portfolio-icons"]}>
              <a
                href="https://github.com/emmanuelkumah/delivry-guy"
                target="_blank"
                rel="noreferrer"
                className={classes["p-icon-2"]}
              >
                <AiOutlineGithub className={classes["p-icon"]} />
              </a>

              <a
                href="https://delivryguy.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={classes["p-icon-2"]}
              >
                <AiOutlineLink />
              </a>
            </div>
          </section>
        </div>
      </section>
      <section className={classes["portfolio-row-2"]}>
        <div className={classes["portfolio-col"]}>
          <div>
            <img
              src={tastyPouch}
              alt="Foodordering"
              className={classes["portfolio-img"]}
            />
          </div>
        </div>
        <div className={classes["portfolio-col"]}>
          <section className={classes["portfolio-content-2"]}>
            <p>Food ordering</p>
            <h2>Tasty Pouch</h2>
            <div className={classes["portfolio-details-2"]}>
              <p>
                Tasty Pouch is a food ordering web app that allows users quickly
                order for delicous meals. Meals data is fetched from the
                Firebase backend, completed orders are submitted to the backend
                as well.
              </p>
            </div>
            <div className={classes["portfolio-icons"]}>
              <AiOutlineGithub className={classes["p-icon-2"]} />
              <a
                href="https://tastypouch.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={classes["p-icon-2"]}
              >
                <AiOutlineLink />
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
