import React from "react";

const items = ["home", "about", "project", "skills", "testimonials", "contact"];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {items.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
