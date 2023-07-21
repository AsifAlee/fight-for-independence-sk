import React, { useState } from "react";
import giftTag from "../assets/event-gifting/event-gift-tag.png";
import "../styles/event-gifting.scss";
import Gift from "../components/Gift";
import TabButton from "../components/TabButton";
import userBtn from "../assets/event-gifting/user-btn.png";
import talentBtn from "../assets/event-gifting/talent-btn.png";
import BeansPot from "../components/BeansPot";
import RewardsSlider from "../components/RewardsSlider";
import rewardsTag from "../assets/event-gifting/rewards-tag.png";
import SwitchButton from "../components/SwitchButton";
import dailyBtn from "../assets/event-gifting/daily-btn.png";
import overallBtn from "../assets/event-gifting/Overall-btn.png";
import titleTag from "../assets/event-gifting/leaderboard-tag.png";
import LeaderboardItem from "../components/LeaderboardItem";
import Topper from "../components/Topper";
import { testLeaderData } from "../utils/testData";
import UserLeaderBoard from "./Leaderboards/event-gifting/user/UserLeaderBoard";
import TalentLeaderBoard from "./Leaderboards/event-gifting/talent/TalentLeaderBoard";
import TalentRewards from "./rewards/TalentRewards";
import UserRewards from "./rewards/UserRewards";

const EventGifting = () => {
  const [beansPotTabs, setBeansPotTabs] = useState({
    user: true,
    talent: false,
  });
  const [seeMore, setSeeMore] = useState(true);

  const [rewardsTabs, setRewardsTabs] = useState({
    user: true,
    talent: false,
  });

  const [leaderBoardTabs, setLeaderBoardTabs] = useState({
    user: false,
    talent: true,
  });

  const dailOverallRewards = [
    {
      rank: "1st",
      text: "40% of the beans pot",
    },
    {
      rank: "2nd",

      text: "30% of the beans pot",
    },
    {
      rank: "3rd",

      text: "10% of the beans pot",
    },
    {
      rank: "4th",

      text: "10% of the beans pot",
    },
    {
      rank: "5th",

      text: "10% of the beans pot",
    },
  ];

  const switchBeansTabs = (name) => {
    switch (name) {
      case "user":
        setBeansPotTabs({
          talent: false,
          user: true,
        });
        break;
      case "talent":
        setBeansPotTabs({
          talent: true,
          user: false,
        });
        break;
    }
  };
  const switchLeaderBoardTabs = (name) => {
    switch (name) {
      case "user":
        setLeaderBoardTabs({
          talent: false,
          user: true,
        });
        break;
      case "talent":
        setLeaderBoardTabs({
          talent: true,
          user: false,
        });
        break;
    }
  };

  const switchRewardsTabs = (name) => {
    switch (name) {
      case "user":
        setRewardsTabs({
          talent: false,
          user: true,
        });
        break;
      case "talent":
        setRewardsTabs({
          talent: true,
          user: false,
        });
        break;
    }
  };
  return (
    <div className="event-gifting-tab">
      <div className="gifts">
        <div className="gift-wrapper">
          <img className="title" src={giftTag} />
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Gift />
            <Gift />
            <Gift />
          </div>
        </div>
      </div>

      <div className="beans-pot">
        <div className="beans-pot-tabs">
          <TabButton
            src={userBtn}
            handleClick={switchBeansTabs}
            name="user"
            isActive={beansPotTabs.user}
          />
          <TabButton
            src={talentBtn}
            handleClick={switchBeansTabs}
            name="talent"
            isActive={beansPotTabs.talent}
          />
        </div>

        <BeansPot />
      </div>

      <div className="rewards">
        <div className="rewards-tabs">
          <TabButton
            src={userBtn}
            handleClick={switchRewardsTabs}
            name="user"
            isActive={rewardsTabs.user}
          />
          <TabButton
            src={talentBtn}
            handleClick={switchRewardsTabs}
            name="talent"
            isActive={rewardsTabs.talent}
          />
        </div>

        <div>{rewardsTabs.talent ? <TalentRewards /> : <UserRewards />}</div>
      </div>

      <div className="event-gifting-leaderboard">
        <div className="leaderboard-tabs">
          <TabButton
            src={userBtn}
            handleClick={switchLeaderBoardTabs}
            name="user"
            isActive={leaderBoardTabs.user}
          />
          <TabButton
            src={talentBtn}
            handleClick={switchLeaderBoardTabs}
            name="talent"
            isActive={leaderBoardTabs.talent}
          />
        </div>
        {leaderBoardTabs.user ? <UserLeaderBoard /> : <TalentLeaderBoard />}

        <p style={{ textAlign: "center", fontSize: "2.5vw" }}>
          All rights reserved by StreamKar
        </p>
      </div>
    </div>
  );
};

export default EventGifting;
