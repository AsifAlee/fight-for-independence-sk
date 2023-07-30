import React from "react";
import rewardsTag from "../../assets/event-gifting/rewards-tag.png";
import RewardsSlider from "../../components/RewardsSlider";

const FanFollwerUserRewards = () => {
  const rewards = [
    {
      desc: "beansbag",
      text: "40,000 beans",
    },
    {
      desc: "beansbag",
      text: "15,000 beans",
    },
    {
      desc: "beansbag",
      text: "10,000 beans",
    },
    {
      desc: "beansbag",
      text: "10,000 beans",
    },
    {
      desc: "beansbag",
      text: "5,000 beans",
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

export default FanFollwerUserRewards;
