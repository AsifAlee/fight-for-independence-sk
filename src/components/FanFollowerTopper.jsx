import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";
import bean from "../assets/event-gifting/bean-icon.png";

import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";
import followBtn from "../assets/fanfollowers/follow-btn.png";

const FanFollwerTopper = ({ user, isUser }) => {
  return (
    <div className="fan-follower-topper">
      <div className="topper-images">
        <img src={top1Frame} className="frame" />
        <img
          src={user?.portrait ? user?.portrait : unknownUser}
          className="avatar"
        />
      </div>
      <div className="topper-details">
        <p className="name">{user.nickname}</p>
        {isUser === false && (
          <img
            src={followBtn}
            style={{ width: "5vw", position: "relative", left: "-5vw" }}
          />
        )}

        {isUser === true ? (
          <div className="beans-won">
            Win 40,000 <img src={bean} />
          </div>
        ) : (
          ""
        )}

        <div className="soldier-collected">
          {isUser ? (
            <span> Cards Sent:{user?.userScore}</span>
          ) : (
            <span>Card Receieved:{user?.userScore}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FanFollwerTopper;
