import React from "react";
import "../styles/leaderboard-item.scss";
import LeaderBoardSlider from "./LeaderBoardSlider";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import beansIcon from "../assets/event-gifting/bean-icon.png";
import unknowuser from "../assets/unknown-user.png";
import { testData } from "../utils/testData";
import { formatData } from "../utils/functions";
const LeaderboardItem = ({ user, rewards, index, showEst }) => {
  let currentReward = formatData(JSON.parse(user.desc));
  return (
    <div className="leaderboard-item">
      <div className="left-div" style={{ marginLeft: index > 3 && "-6vw" }}>
        {index > 3 && <span className="index">{index}</span>}
        <div className="images">
          <img
            src={user?.portrait ? user?.portrait : unknowuser}
            className="avatar"
          />
          {index <= 3 && (
            <img
              src={index === 2 ? top2 : top3}
              className="frame"
              style={{ visibility: index > 3 ? "gone" : "" }}
            />
          )}
        </div>
        <span className="name">{user?.nickname}</span>
      </div>

      <div className="right-div">
        <LeaderBoardSlider rewards={currentReward} />
      </div>
    </div>
  );
};

export default LeaderboardItem;
