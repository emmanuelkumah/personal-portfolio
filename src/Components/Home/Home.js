import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
};

export default Home;
