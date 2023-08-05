import React, { useContext } from "react";
import "../styles/dynamic-card.scss";
import { AppContext } from "../AppContext";
import conq from "../assets/card/conquerers.png";
import champs from "../assets/card/champions.png";
import warrs from "../assets/card/warriors-text.png";
import myTeam from "../assets/Conquer-tab/my-team.gif";
import { testUserId } from "../utils/api";
const DynamicCard = ({
  id,
  soldiers,
  index,
  toggleSelectedRank,
  selectedRank,
  selectedTeamId,
  isToday,
}) => {
  const { info } = useContext(AppContext);
  return (
    <div
      className={`dynamic-card ${
        selectedTeamId === id ? "active-card" : "unactive-card"
      }`}
      onClick={() => toggleSelectedRank(id)}
    >
      <img
        className="title"
        src={id === 1 ? warrs : id === 2 ? conq : champs}
      />

      {info.teamId === id && (
        <img
          src={myTeam}
          style={{
            width: "14vw",
          }}
        />
      )}
      {isToday === true && (
        <p className="soldiers">Soldiers Collected:{soldiers}</p>
      )}
    </div>
  );
};

export default DynamicCard;
