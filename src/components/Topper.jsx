import React from "react";
import top1Frame from "../assets/top-1-frame.png";
import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";
import LeaderBoardSlider from "./LeaderBoardSlider";
import { testData } from "../utils/testData";
import { formatData } from "../utils/functions";

const Topper = ({ user }) => {
  let currentReward = formatData(JSON.parse(user.desc));

  return (
    <div className="topper">
      <div className="topper-images">
        <img src={top1Frame} className="frame" />
        <img
          src={user?.portrait ? user?.portrait : unknownUser}
          className="avatar"
        />
      </div>
      <div className="topper-details">
        <p className="name">{user?.nickname}</p>
        <div
          className="reward-images"
          style={{
            position: "relative",
            left: "19vw",
            bottom: "1vw",
          }}
        >
          <LeaderBoardSlider rewards={currentReward} />
        </div>
      </div>
    </div>
  );
};

export default Topper;
