import React from "react";

const TabButton = ({ src, handleClick, name, isActive }) => {
  return (
    <button
      className={`tab-button ${isActive === false && "unactive"}`}
      style={{ backgroundImage: `url(${src})` }}
      onClick={() => handleClick(name)}
    ></button>
  );
};

export default TabButton;
