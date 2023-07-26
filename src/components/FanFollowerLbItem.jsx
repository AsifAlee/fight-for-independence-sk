import React from "react";
import "../styles/leaderboard-item.scss";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import bean from "../assets/event-gifting/bean-icon.png";
import followBtn from "../assets/fanfollowers/follow-btn.png";
const FanFollowerLbItem = ({ user, index, isUser }) => {
  return (
    <div className="fan-follower-lb-item">
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
        <img src={followBtn} style={{ width: "5vw" }} />
      </div>

      <div className="middle-div" style={{ visibility: index > 5 && "hidden" }}>
        {isUser === true ? (
          <div className="beans-won">
            Win 40,000 <img src={bean} />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="right-div">
        {isUser ? <span>Cards Send:000</span> : <span>Cards Recieved:000</span>}
      </div>
    </div>
  );
};

export default FanFollowerLbItem;
