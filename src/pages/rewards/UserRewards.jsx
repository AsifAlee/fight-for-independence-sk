import React, { useState } from "react";
import SwitchButton from "../../components/SwitchButton";
import RewardsSlider from "../../components/RewardsSlider";
import overallBtn from "../../assets/event-gifting/Overall-btn.png";
import dailyBtn from "../../assets/event-gifting/daily-btn.png";
import rewardsTag from "../../assets/event-gifting/rewards-tag.png";
import switchBg from "../../assets/event-gifting/daily-overall-bg.png";

const UserRewards = () => {
  // const [isSliderOn, setIsSliderOn] = useState(false);

  const userOveralRews = [
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
  // const userDailyRews = [
  //   {
  //     desc: "beansbag",
  //     text: "40% of beans pot",
  //   },
  //   {
  //     desc: "beansbag",
  //     text: "30% of beans pot",
  //   },
  //   {
  //     desc: "beansbag",
  //     text: "10% of beans pot",
  //   },
  //   {
  //     desc: "beansbag",
  //     text: "10% of beans pot",
  //   },
  //   {
  //     desc: "beansbag",
  //     text: "10% of beans pot",
  //   },
  // ];
  // function handleSliderToggle(isOn) {
  //   setIsSliderOn(isOn);
  // }

  return (
    <div>
      {/* <SwitchButton
        onToggle={handleSliderToggle}
        btn={isSliderOn ? overallBtn : dailyBtn}
        bg={switchBg}
      /> */}

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
            // rewards={isSliderOn ? userOveralRews : userDailyRews}
            rewards={userOveralRews}
          />
        </div>
      </div>
    </div>
  );
};

export default UserRewards;
