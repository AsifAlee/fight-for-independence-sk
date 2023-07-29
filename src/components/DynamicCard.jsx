import React, { useContext } from "react";
import "../styles/dynamic-card.scss";
import { AppContext } from "../AppContext";
const DynamicCard = ({ id, soldiers }) => {
  const { info } = useContext(AppContext);
  return (
    <div
      className="dynamic-card"
      style={{ backgroundColor: info?.teamId === id ? "red" : "yellow" }}
    >
      <p className="title">
        {id === 1 ? "WARRIORS" : id === 2 ? "CONQUERERS" : "CHAMPIONS"}
      </p>
      <p className="soldiers">Soldiers Collected:{soldiers}</p>
    </div>
  );
};

export default DynamicCard;
