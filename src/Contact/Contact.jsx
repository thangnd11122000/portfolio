import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import "./Contact.scss";

const Contact = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const query = '*[_type == "information"]';
    client.fetch(query).then((data) => {
      setInfos(data);
    });
  }, []);

  return (
    <div className="app__cards">
      {infos.map((info, index) => (
        <div className="app__card" key={index}>
          <img src={urlFor(info.icon)} alt={info.title} />
          <p className="p-text">{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
