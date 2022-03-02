import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [infos, setInfos] = useState([]);
  const [objectives, setObjectives] = useState([]);
  useEffect(() => {
    const query = '*[_type == "information"]';
    client.fetch(query).then((data) => {
      setInfos(data);
    });
  }, []);
  useEffect(() => {
    const query = '*[_type == "objective"]';
    client.fetch(query).then((data) => {
      setObjectives(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        <span>About</span>
        <br />
      </h2>

      <div className="app__profiles">
        <div className="app__information">
          {infos?.reverse()?.map((info, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={info.title + index}
              className="app__information--item"
            >
              <img src={urlFor(info.icon)} alt={info.title} />
              <div>
                <h2 className="bold-text">{info.title}</h2>
                <p className="p-text">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="app__objective">
          <h2>Objective</h2>
          {objectives?.reverse()?.map((objective, index) => (
            <div key={index} className="app__objective--item">
              <span>( {objective.period} )</span>
              <p>{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(About, "about");
