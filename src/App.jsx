import React, { useState, useEffect } from "react";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Projects,
} from "./container";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Navbar, NavigationDots } from "./components";
import "./App.scss";
const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 20 ? setShow(true) : setShow(false);
    });
    window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className="app">
      <NavigationDots />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
      <a href="#home" className={`app__scroll-top ${show ? "active" : ""}`}>
        <BsFillArrowUpSquareFill />
      </a>
    </div>
  );
};

export default App;
