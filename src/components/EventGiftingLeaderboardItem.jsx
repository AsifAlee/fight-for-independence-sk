import React from "react";
import "../styles/leaderboard-item.scss";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import beansIcon from "../assets/event-gifting/bean-icon.png";
import "../styles/leaderboard-item.scss";
import unknownUser from "../assets/unknown-user.png";
import gem from "../assets/gems.png";

import { testData } from "../utils/testData";
import { getLevelImage, gotoProfile } from "../utils/functions";
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
        <div className="images" onClick={() => gotoProfile(user?.userId)}>
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
        <div className="nameNLevel">
          <span className="name">{user?.nickname}</span>
          <img
            src={getLevelImage(
              isTalent ? user?.actorLevel : user?.userLevel,
              isTalent
            )}
            style={{ width: isTalent ? "6vw" : "12vw" }}
          />
        </div>
      </div>

      {
        <div
          className="middle-div"
          style={{ visibility: index > 5 || !showEst ? "hidden" : "" }}
        >
          <span>Est Rewards</span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>{calculateEstRewards ? calculateEstRewards(index) : ""}</span>
            <img src={beansIcon} style={{ width: "4vw" }} />
          </div>
        </div>
      }

      <div className="right-div" style={{ left: "19vw" }}>
        <span>{`${user?.userScore}`}</span>
        <img src={isTalent ? gem : beansIcon} className="bean-icon" />
      </div>
    </div>
  );
};

export default EventGiftingLeaderboardItem;
