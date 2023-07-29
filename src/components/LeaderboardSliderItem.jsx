import React from "react";
import "../styles/leaderboard-slider.scss";
import { getRewardsImage } from "../utils/functions";
const LeaderboardSliderItem = ({ item }) => {
  return (
    <div className="slider-item">
      <img src={getRewardsImage(item?.desc)} style={{ width: "4vw" }} />
    </div>
  );
};

export default LeaderboardSliderItem;
