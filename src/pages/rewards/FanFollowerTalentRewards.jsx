import React from "react";
import rewardsTag from "../../assets/event-gifting/rewards-tag.png";
import RewardsSlider from "../../components/RewardsSlider";

const FanFollowerTalentRewards = () => {
  const rewards = [
    {
      desc: "gems",
      text: "50,000 Gems + 3 days profile frame (new)",
    },
    {
      desc: "gems",
      text: "20,000 Gems",
    },
    {
      desc: "gems",
      text: "10,000 Gems",
    },
    {
      desc: "gems",
      text: "10,000 Gems",
    },
    {
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
        <RewardsSlider rewards={rewards} />
      </div>
    </div>
  );
};

export default FanFollowerTalentRewards;
