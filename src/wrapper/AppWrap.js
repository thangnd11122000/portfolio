import React from "react";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";
const AppWrap = (Component, idName, classNames = "") =>
  function HOC() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">{`${dd} - ${mm} - ${yyyy}`}</p>
            <p className="p-text">Nguyễn Doãn Thắng</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
