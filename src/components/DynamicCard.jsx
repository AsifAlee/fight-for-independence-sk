import React, { useContext } from "react";
import "../styles/dynamic-card.scss";
import { AppContext } from "../AppContext";
import conq from "../assets/card/conquerers.png";
import champs from "../assets/card/champions.png";
import warrs from "../assets/card/warriors-text.png";

const DynamicCard = ({ id, soldiers, index }) => {
  const { info } = useContext(AppContext);
  return (
    <div
      className={`dynamic-card ${
        index === 0 ? "active-card" : "unactive-card"
      }`}
      // style={{ backgroundColor: info?.teamId === id ? "red" : "yellow" }}
    >
      {/* <p className="title">
        {id === 1 ? "WARRIORS" : id === 2 ? "CONQUERERS" : "CHAMPIONS"}
      </p> */}

      <img
        className="title"
        src={id === 1 ? warrs : id === 2 ? conq : champs}
      />
      <p className="soldiers">Soldiers Collected:{soldiers}</p>
    </div>
  );
};

export default DynamicCard;
