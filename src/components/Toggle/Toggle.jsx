import React, { useContext } from "react";
import images from "../../constants/images";
import { ThemeContext } from "../../context";
import "./Toggle.scss";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="app__toggle" onClick={handleClick}>
      <img src={images.sun} alt="" />
      <img src={images.moon} alt="" />
      <div style={{ top: theme.state.darkMode ? 2 : 25 }}></div>
    </div>
  );
};

export default Toggle;
