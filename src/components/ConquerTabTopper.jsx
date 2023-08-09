import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import soldierIcon from "../assets/Conquer-tab/soldiers-icon.png";

import unknownUser from "../assets/unknown-user.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";

import "../styles/topper.scss";
import { getLevelImage, gotoProfile } from "../utils/functions";

const ConquerTabTopper = ({ user, isToday, calculateEstRewards, showEst }) => {
  return (
    <div className="conquertab-topper">
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
          <img src={getLevelImage(user?.userLevel, false)} />
        </div>

        <div
          className="d-flex j-center al-center"
          style={{ visibility: showEst === false ? "hidden" : "visible" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span>{isToday === false ? "Rewards Won" : " Est Rewards"}</span>
            <div className="d-flex j-center al-center">
              <span>
                {isToday === false
                  ? `${
                      typeof calculateEstRewards === "function"
                        ? calculateEstRewards(1, false)
                        : ""
                    }`
                  : `${
                      typeof calculateEstRewards === "function"
                        ? calculateEstRewards(1, true)
                        : ""
                    }`}
              </span>
              <img src={beanIcon} style={{ width: "4vw" }} />
            </div>
          </div>
        </div>

        <div className="soldier-collected">
          <img className="soldier-icon" src={soldierIcon} />
          <span>{user?.userScore}</span>
        </div>
      </div>
    </div>
  );
};

export default ConquerTabTopper;
