import React from "react";
import SocialMedia from "../components/SocialMedia";
const AppWrap = (Component, idName, classNames = "") =>
  function HOC() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <SocialMedia />
            <div className="copyright__info">
              <p className="p-text">{`${dd} - ${mm} - ${yyyy}`}</p>
              <p className="p-text">Nguyễn Doãn Thắng</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AppWrap;
