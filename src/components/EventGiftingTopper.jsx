import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";
import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";

const EventGiftingTopper = ({ user }) => {
  return (
    <div className="event-gifting-topper">
      <div className="topper-images">
        <img src={top1Frame} className="frame" />
        <img src={user?.avatar} className="avatar" />
      </div>
      <div className="topper-details">
        <p className="name">{user.nickname}</p>
        <div className="est-rews">Est rewards</div>

        <div className="beans-collected">
          <span>000 beans spent</span>

          <img className="soldier-icon" src={beanIcon} />
        </div>
      </div>
    </div>
  );
};

export default EventGiftingTopper;
