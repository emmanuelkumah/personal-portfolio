import React from "react";
import classes from "./Portfolio.module.css";
import fitLfyImg from "../../assets/fitLyf.png";
import delivryGuy from "../../assets/delivryGuy.png";
import okada from "../../assets/okada.png";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div>
      <section className={classes["portfolio_container"]}>
        <h2>Some Things I have built</h2>
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
              <AiOutlineGithub className={classes["p-icon"]} />
              <AiOutlineLink className={classes["p-icon"]} />
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
              <AiOutlineGithub className={classes["p-icon-2"]} />
              <AiOutlineLink className={classes["p-icon-2"]} />
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
            <h2>Fit Lyf</h2>
            <div className={classes["portfolio-details"]}>
              <p>
                Fit Lyf is a web app that allows busy professionals access tons
                of exercises to help engage in regular physical activities, and
                boost endurance
              </p>
            </div>
            <div className={classes["portfolio-icons"]}>
              <AiOutlineGithub className={classes["p-icon"]} />
              <AiOutlineLink className={classes["p-icon"]} />
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
            <p>Food ordering</p>
            <h2>Tasty Bud</h2>
            <div className={classes["portfolio-details-2"]}>
              <p>
                Okada Ride is a hub to search and book motorbike for your next
                commute.Beat the traffic and enjoy a hustle free and refreshing
                ride
              </p>
            </div>
            <div className={classes["portfolio-icons"]}>
              <AiOutlineGithub className={classes["p-icon-2"]} />
              <AiOutlineLink className={classes["p-icon-2"]} />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
