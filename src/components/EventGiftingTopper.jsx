import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";
import gem from "../assets/gems.png";
import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";
import { getLevelImage, gotoProfile } from "../utils/functions";

const EventGiftingTopper = ({
  user,
  showEst,
  calculateEstRewards,
  isTalent,
}) => {
  return (
    <div className="event-gifting-topper">
      <div className="topper-images" onClick={() => gotoProfile(user?.userId)}>
        <img src={top1Frame} className="frame" />
        <img
          src={user?.portrait ? user?.portrait : unknownUser}
          className="avatar"
        />
      </div>
      <div className="topper-details">
        <div className="nameLevel">
          <p className="name">{user?.nickname}</p>
          <img
            src={getLevelImage(
              isTalent ? user?.actorLevel : user?.userLevel,
              isTalent
            )}
          />
        </div>

        {/* <p className="name">{user.nickname}</p> */}
        {showEst === true && (
          <div className="est-rews">
            Est rewards
            <div className="d-flex j-center al-center">
              <span>{calculateEstRewards ? calculateEstRewards(1) : ""}</span>
              <img src={beanIcon} style={{ width: "4vw" }} />
            </div>
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
