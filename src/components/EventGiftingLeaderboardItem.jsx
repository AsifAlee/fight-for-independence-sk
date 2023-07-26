import React from "react";
import "../styles/leaderboard-item.scss";
import LeaderBoardSlider from "./LeaderBoardSlider";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import beansIcon from "../assets/event-gifting/bean-icon.png";
import "../styles/leaderboard-item.scss";
import { testData } from "../utils/testData";
const EventGiftingLeaderboardItem = ({
  user,
  rewards,
  index,
  showEst,
  isUser,
}) => {
  return (
    <div className="event-gifiting-leaderboard-item">
      <div className="left-div" style={{ marginLeft: index > 3 && "-6vw" }}>
        {index > 3 && <span className="index">{index}</span>}
        <div className="images">
          <img src={user?.avatar} className="avatar" />
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
      {
        <div
          className="middle-div"
          style={{ visibility: index > 5 && "hidden" }}
        >
          Est Rewards
        </div>
      }
      <div className="right-div">
        <span>{`1234566 beans spent `}</span>
        <img src={beansIcon} className="bean-icon" />
      </div>
    </div>
  );
};

export default EventGiftingLeaderboardItem;
