import React from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Simpleprocess from "./components/Simpleprocess.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Calltoaction from "./components/Calltoaction.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Simpleprocess />
      <Testimonials />
      <Calltoaction />
      <Footer />

    </div>
  );
};

export default App;
