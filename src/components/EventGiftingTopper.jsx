import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";
import gem from "../assets/gems.png";
import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";

const EventGiftingTopper = ({
  user,
  showEst,
  calculateEstRewards,
  isTalent,
}) => {
  return (
    <div className="event-gifting-topper">
      <div className="topper-images">
        <img src={top1Frame} className="frame" />
        <img
          src={user?.portrait ? user?.portrait : unknownUser}
          className="avatar"
        />
      </div>
      <div className="topper-details">
        <p className="name">{user.nickname}</p>
        {showEst === true && (
          <div className="est-rews">
            Est rewards {calculateEstRewards ? calculateEstRewards(1) : ""}
          </div>
        )}

        <div className="beans-collected">
          <span>{`${user?.userScore} `}</span>

          <img className="soldier-icon" src={isTalent ? gem : beanIcon} />
        </div>
      </div>
    </div>
  );
};

export default EventGiftingTopper;
