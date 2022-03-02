import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const circles = [images.html, images.react, images.sass];

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            className="badge-cmp app__flex"
          >
            <motion.span
              animate={{ rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              👋
            </motion.span>
            <div style={{ marginLeft: 10 }}>
              <p className="p-text">Hello, I am</p>
              <h3>Nguyễn Doãn Thắng</h3>
            </div>
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            className="tag-cmp app__flex"
          >
            <p className="p-text">Frontend Developer</p>
            <p className="p-text">Intern / Fresher</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.avatar} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        ></motion.img>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {circles.map((circle, index) => (
          <div key={`circle-${index}`} className="circle-cmp app__flex">
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
