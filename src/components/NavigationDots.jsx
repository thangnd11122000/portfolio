import React, { useState } from "react";

const items = ["home", "about", "project", "skills", "testimonials", "contact"];

const NavigationDots = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="app__navigation">
      {items.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          onClick={() => setActive(item)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
