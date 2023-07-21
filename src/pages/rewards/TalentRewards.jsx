import React, { useState } from "react";
import SwitchButton from "../../components/SwitchButton";
import RewardsSlider from "../../components/RewardsSlider";
import overallBtn from "../../assets/event-gifting/Overall-btn.png";
import dailyBtn from "../../assets/event-gifting/daily-btn.png";
import rewardsTag from "../../assets/event-gifting/rewards-tag.png";

const TalentRewards = () => {
  const [isSliderOn, setIsSliderOn] = useState(false);

  const talentOveralRews = [
    {
      desc: "beansbag",
      text: "40% of beans pot",
    },
    {
      desc: "beansbag",
      text: "30% of beans pot",
    },
    {
      desc: "beansbag",
      text: "15% of beans pot",
    },
    {
      desc: "beansbag",
      text: "10% of beans pot",
    },
    {
      desc: "beansbag",
      text: "5% of beans pot",
    },
  ];
  const talentDailyRews = [
    {
      desc: "roomSkin",
      text: "1 day Room Skin",
    },
    {
      desc: "royalProfileFrame",
      text: "1 day ROYAL profile frame",
    },
    {
      desc: "1 day Celebration Audio theme",
      text: "1 day Celebration Audio theme",
    },
    {
      desc: "1 day Royalty room skin",
      text: "1 day Royalty room skin",
    },
    {
      desc: "ace",
      text: "1 day ACE HIGH profile frame",
    },
  ];
  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }

  return (
    <div>
      <SwitchButton
        onToggle={handleSliderToggle}
        btn={isSliderOn ? overallBtn : dailyBtn}
      />

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
          <RewardsSlider
            rewards={isSliderOn ? talentOveralRews : talentDailyRews}
          />
        </div>
      </div>
    </div>
  );
};

export default TalentRewards;
