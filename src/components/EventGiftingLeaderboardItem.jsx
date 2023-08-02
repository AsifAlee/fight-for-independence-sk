import React from "react";
import "../styles/leaderboard-item.scss";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import beansIcon from "../assets/event-gifting/bean-icon.png";
import "../styles/leaderboard-item.scss";
import unknownUser from "../assets/unknown-user.png";
import gem from "../assets/gems.png";

import { testData } from "../utils/testData";
const EventGiftingLeaderboardItem = ({
  user,
  rewards,
  index,
  showEst,
  isUser,
  calculateEstRewards,
  isTalent,
  isDaily,
}) => {
  return (
    <div className="event-gifiting-leaderboard-item">
      <div className="left-div" style={{ marginLeft: index > 3 && "-6vw" }}>
        {index > 3 && <span className="index">{index}</span>}
        <div className="images">
          <img
            src={user?.portrait ? user?.portrait : unknownUser}
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

      {
        <div
          className="middle-div"
          style={{ visibility: index > 5 || !showEst ? "hidden" : "" }}
        >
          Est Rewards {calculateEstRewards ? calculateEstRewards(index) : ""}
        </div>
      }

      <div className="right-div" style={{ left: "21vw" }}>
        <span>{`${user?.userScore}`}</span>
        <img src={isTalent ? gem : beansIcon} className="bean-icon" />
      </div>
    </div>
  );
};

export default EventGiftingLeaderboardItem;
