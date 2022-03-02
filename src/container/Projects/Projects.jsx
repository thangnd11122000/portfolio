import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";
import "./Projects.scss";
const items = ["HTML / CSS", "SASS", "Javascript", "React", "All"];
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        <span>Projects</span>
      </h2>
      <div className="app__project-filter">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`app__project-filter-item app__flex p-tex ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filterProjects.map((project, index) => (
          <div className="app__project-item app-flex" key={index}>
            <div className="app__project-img app-flex">
              <img src={urlFor(project.imgUrl)} alt={project.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeIn",
                  staggerChildren: 0.5,
                }}
                className="app__project-hover app__flex"
              >
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__project-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
              <div className="app__project-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Projects, "project");
