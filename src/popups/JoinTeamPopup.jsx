import React from "react";
import bg from "../assets/event-gifting/rewards-bg.png";
import PopUp from "../components/PopUp";
import successfullyJoined from "../assets/popup/successfully-joined.png";
import oops from "../assets/popup/oops.png";
const JoinTeamPopup = ({ popUpHandler, teamId, errorCode, msg, teamName }) => {
  console.log("team pop up:", teamId);
  return (
    <PopUp
      popUpHandler={popUpHandler}
      bg={bg}
      title={teamId === 0 ? oops : successfullyJoined}
      isCollSold={true}
    >
      {teamId === 0 ? (
        <p
          className="join-team-popup"
          //   style={{ fontSize: "2.5vw", textAlign: "center" }}
        >
          Please select one of the teams first and then click on JOIN button.
        </p>
      ) : errorCode === 0 ? (
        <div className="join-team-popup">
          You are now a part of HERO'S JOURNEY, after joining {teamName}. Help
          your team win by gathering maximum soldiers daily.
        </div>
      ) : (
        <div className="join-team-popup">{msg}</div>
      )}
    </PopUp>
  );
};

export default JoinTeamPopup;
