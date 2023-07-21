import React from "react";
import "../styles/leaderboard-slider.scss";
import { getRewardsImage } from "../utils/functions";
const LeaderboardSliderItem = ({ desc }) => {
  return (
    <div className="slider-item">
      <img src={getRewardsImage("beanbag")} style={{ width: "4vw" }} />
    </div>
  );
};

export default LeaderboardSliderItem;
