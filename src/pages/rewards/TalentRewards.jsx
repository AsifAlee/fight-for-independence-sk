import React, { useState } from "react";
import SwitchButton from "../../components/SwitchButton";
import RewardsSlider from "../../components/RewardsSlider";
import overallBtn from "../../assets/event-gifting/Overall-btn.png";
import dailyBtn from "../../assets/event-gifting/daily-btn.png";
import rewardsTag from "../../assets/event-gifting/rewards-tag.png";
import switchBg from "../../assets/event-gifting/daily-overall-bg.png";
const TalentRewards = () => {
  const [isSliderOn, setIsSliderOn] = useState(false);

  const talentOveralRews = [
    {
      rank: "Top 1st",
      desc: "beansbag",
      text: "40% of beans pot",
    },
    {
      rank: "Top 2nd",

      desc: "beansbag",
      text: "30% of beans pot",
    },
    {
      rank: "Top 3rd",

      desc: "beansbag",
      text: "15% of beans pot",
    },
    {
      rank: "Top 4th",

      desc: "beansbag",
      text: "10% of beans pot",
    },
    {
      rank: "Top 5th",

      desc: "beansbag",
      text: "5% of beans pot",
    },
  ];
  const talentDailyRews = [
    {
      desc: "fireBrandAudioTheme",
      text: "1 day FireBrand Room Skin",
    },
    {
      desc: "royalProfileFrame",
      text: "1 day ROYAL profile frame",
    },
    {
      desc: "celebrationRoomskin",
      text: "1 day Celebration Audio theme",
    },
    {
      desc: "royaltiRoom",
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
    <div className="switch-key">
      <SwitchButton
        onToggle={handleSliderToggle}
        btn={isSliderOn ? overallBtn : dailyBtn}
        bg={switchBg}
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
            showRanks={isSliderOn ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default TalentRewards;
