import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";

const items = ["home", "about", "project", "skills", "contact"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">NDT</a>
      </div>
      <ul className="app__navbar-links">
        {items.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div
        className="app__navbar-open outer-shadow-1"
        onClick={() => setToggleMenu(true)}
      >
        <HiMenuAlt4 />
      </div>

      <div
        className={`app__navbar-menu ${toggleMenu ? "active" : ""}`}
        ref={ref}
      >
        <HiX onClick={() => setToggleMenu(false)} />
        <ul className="app__navbar-links">
          {items.map((item) => (
            <li key={`${item}`} className="app__flex p-text">
              <a href={`#${item}`} onClick={() => setToggleMenu(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
