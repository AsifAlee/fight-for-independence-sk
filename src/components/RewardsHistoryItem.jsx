import React from "react";
import RewardItem from "./RewardItem";
import "../styles/reward-history.scss";

const RewardsHistoryItem = ({ time, rewards }) => {
  const getRewardName = (reward) => {
    if (reward?.desc === "Beans") {
      if (reward?.count > 1) {
        return `${reward?.count} Beans`;
      } else {
        return `${reward?.count} Bean`;
      }
    } else if (reward?.desc === "Soldiers") {
      if (reward?.count > 1) {
        return `${reward?.count} Soldiers`;
      } else {
        return `${reward?.count} Soldier`;
      }
    } else {
      if (reward?.count > 1) {
        return `${reward?.count} days ${reward.desc}`;
      } else {
        return `${reward?.count} day ${reward.desc}`;
      }
    }
  };
  return (
    <div className="reward-history-item">
      <span className="time">{time}</span>
      <div className="reward">
        {rewards?.map((rew) => (
          <RewardItem
            isReward={true}
            desc={rew?.desc}
            name={getRewardName(rew)}
          />
        ))}
      </div>
    </div>
  );
};

export default RewardsHistoryItem;
