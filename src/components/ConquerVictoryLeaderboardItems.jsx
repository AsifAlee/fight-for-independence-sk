import React from "react";
import "../styles/leaderboard-item.scss";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";
const ConquerVictoryLeaderboardItems = ({ user, index, isToday }) => {
  return (
    <div className="conquer-victory-leaderboard-item">
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
          {isToday === false ? "Rewards Won" : "Est Rewards"}
        </div>
      }
      <div className="right-div">
        <img className="soldier-icon" src={soldierIcon} />
        <span>000</span>
      </div>
    </div>
  );
};

export default ConquerVictoryLeaderboardItems;