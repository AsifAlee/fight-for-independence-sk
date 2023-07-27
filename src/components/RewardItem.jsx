import React from "react";
import "../styles/reward-item.scss";
import { getRewardsImage } from "../utils/functions";
const RewardItem = ({ desc, name }) => {
  return (
    <div className="reward-item">
      <div className="images">
        <img className="rew-img" src={getRewardsImage(desc)} />
      </div>
      <p className="rew-name">{name}</p>
    </div>
  );
};

export default RewardItem;
