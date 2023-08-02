import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";

import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";

const ConquerTabTopper = ({ user, isToday, calculateEstRewards }) => {
  return (
    <div className="conquertab-topper">
      <div className="topper-images">
        <img src={top1Frame} className="frame" />
        <img
          src={user?.portrait ? user?.portrait : unknownUser}
          className="avatar"
        />
      </div>
      <div className="topper-details">
        <p className="name">{user.nickname}</p>
        <div className="est-rews">
          {isToday === false
            ? `Rewards Won ${
                calculateEstRewards && calculateEstRewards(1, false)
              }`
            : `Est Rewards ${
                calculateEstRewards && calculateEstRewards(1, true)
              }`}
        </div>

        <div className="soldier-collected">
          <img className="soldier-icon" src={soldierIcon} />
          <span>{user?.userScore}</span>
        </div>
      </div>
    </div>
  );
};

export default ConquerTabTopper;
