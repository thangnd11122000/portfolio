import { useEffect, useState } from "react";
import { client } from "../../client";
import { AppWrap } from "../../wrapper";
import "./About.scss";
import Contact from "../../Contact/Contact";

const About = () => {
  const [objectives, setObjectives] = useState([]);
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
          <Contact />
        </div>
        <div className="app__objective">
          <h2>Education</h2>
          <div className="app__objective--item app__education">
            <p>
              FPT Polytechnic <span>(05/2020 - 09/2022)</span>
            </p>
            <p>Major: Web Design</p>
          </div>
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
