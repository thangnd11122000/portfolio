import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { AiFillGithub } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <h5>Welcome to my portfolio</h5>
        <h2 className="head-text">
          Hello, I'm <br />
          <span>Nguyễn Doãn Thắng</span>
        </h2>
        <p className="p-text">
          I am a final year student of FPT Polytechnic College. I have completed
          many projects on the online course and I have completed four website
          projects for myself. I am always learning and updating new technology
          every day.
        </p>
        <div className="app__social">
          <a href="https://github.com/thangnd11122000" className="p-text outer-shadow-1">
            <AiFillGithub /> <span>View Github</span>
          </a>
          <a
            href="https://www.topcv.vn/xem-cv/BAgDUVQDUgYHBgsFUF5TUV1QUQEKBVBWB1wFVgd153"
            className="p-text outer-shadow-1"
          >
            <ImProfile /> <span>View CV</span>
          </a>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.avatar} alt="profile_bg" />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_rectangle inner-shadow"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
