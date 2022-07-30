import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import Portfolio from "../Portfolio/Portfolio";
import Tech from "../Tech/Tech";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <main>
        <About />
        <Portfolio />
        <Tech />
      </main>
    </div>
  );
};

export default Home;
