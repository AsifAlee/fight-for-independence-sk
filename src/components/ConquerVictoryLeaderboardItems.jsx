import React from "react";
import "../styles/leaderboard-item.scss";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";
import unknowUser from "../assets/unknown-user.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";
import { getLevelImage, gotoProfile } from "../utils/functions";
const ConquerVictoryLeaderboardItems = ({
  user,
  index,
  isToday,
  calculateEstRewards,
}) => {
  return (
    <div className="conquer-victory-leaderboard-item">
      <div className="left-div" style={{ marginLeft: index > 3 && "-6vw" }}>
        {index > 3 && <span className="index">{index}</span>}
        <div className="images" onClick={() => gotoProfile(user?.userId)}>
          <img
            src={user?.portrait ? user?.portrait : unknowUser}
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
          <img src={getLevelImage(user?.userLevel, false)} />
        </div>
      </div>
      {
        <div
          className="middle-div"
          style={{ visibility: index > 5 && "hidden" }}
        >
          <span>{isToday === false ? "Rewards Won" : " Est Rewards"}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>
              {isToday === false
                ? `${
                    typeof calculateEstRewards === "function"
                      ? calculateEstRewards(index, false)
                      : ""
                  }`
                : `${
                    typeof calculateEstRewards === "function"
                      ? calculateEstRewards(index, true)
                      : ""
                  }`}
            </span>
            <img src={beanIcon} style={{ width: "4vw" }} />
          </div>
        </div>
      }
      <div className="right-div">
        <img className="soldier-icon" src={soldierIcon} />
        <span>{user?.userScore}</span>
      </div>
    </div>
  );
};

export default ConquerVictoryLeaderboardItems;
