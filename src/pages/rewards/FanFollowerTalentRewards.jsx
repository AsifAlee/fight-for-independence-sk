import React from "react";
import rewardsTag from "../../assets/event-gifting/rewards-tag.png";
import RewardsSlider from "../../components/RewardsSlider";

const FanFollowerTalentRewards = () => {
  const rewards = [
    {
      rank: "top 1st",
      desc: "gems",
      text: "50,000 Gems + 3 days profile frame (new)",
    },
    {
      rank: "top 2nd",

      desc: "gems",
      text: "20,000 Gems",
    },
    {
      rank: "top 3rd",

      desc: "gems",
      text: "10,000 Gems",
    },
    {
      rank: "top 4th",

      desc: "gems",
      text: "10,000 Gems",
    },
    {
      rank: "top 5th",

      desc: "gems",
      text: "10,000 Gems",
    },
  ];
  return (
    <div className="rewards-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={rewardsTag} className="rewards-tag" />
      </div>
      <div className="slider-container">
        <RewardsSlider rewards={rewards} showRanks={true} />
      </div>
    </div>
  );
};

export default FanFollowerTalentRewards;
