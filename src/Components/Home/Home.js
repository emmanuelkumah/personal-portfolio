import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
