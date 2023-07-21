import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";

const Topper = ({ user }) => {
  return (
    <div className="topper">
      <div className="topper-images">
        <img src={top1Frame} className="frame" />
        <img src={user?.avatar} className="avatar" />
      </div>
      <div className="topper-details">
        <p className="name">{user.nickname}</p>
        <div className="reward-images"></div>
      </div>
    </div>
  );
};

export default Topper;
