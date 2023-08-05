import React from "react";
import "../styles/reward-item.scss";
import { getRewardsImage } from "../utils/functions";
const RewardItem = ({ desc, name, isReward }) => {
  return (
    <div
      className="reward-item"
      style={{
        // width: isReward && "12vw",
        width: isReward && "20vw",
        height: isReward && "32vw",
      }}
    >
      <div
        className="images"
        style={{
          //    width: isReward && "10vw",
          //  height: isReward && "10vw"

          width: isReward && "100%",
          // height: isReward && "10vw",
        }}
      >
        <img
          className="rew-img"
          style={{
            // width: isReward && "7vw",
            width: isReward && "16vw",
          }}
          src={getRewardsImage(desc)}
        />
      </div>
      <p
        className={`rew-name ${isReward && "hidden-text"}`}
        style={
          {
            // width: isReward && "10vw",
          }
        }
      >
        {name}
      </p>
    </div>
  );
};

export default RewardItem;
