import React, { useState } from "react";
import "../styles/fan-follower.scss";
import bullet from "../assets/fanfollowers/bullet-point.png";
import beans from "../assets/event-gifting/bean-icon.png";
import TabButton from "../components/TabButton";
import userBtn from "../assets/event-gifting/user-btn.png";
import talentBtn from "../assets/event-gifting/talent-btn.png";
import TalentRewards from "./rewards/TalentRewards";
import UserRewards from "./rewards/UserRewards";
import FanFollowerTalentRewards from "./rewards/FanFollowerTalentRewards";
import FanFollwerUserRewards from "./rewards/FanFollwerUserRewards";
import User from "./Leaderboards/fan-followers/User";
import Talent from "./Leaderboards/fan-followers/Talent";

const FanFollwers = () => {
  const [rewardsTabs, setRewardsTabs] = useState({
    user: true,
    talent: false,
  });
  const [leaderBoardTabs, setLeaderBoardTabs] = useState({
    user: false,
    talent: true,
  });
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
  return (
    <div className="fan-followers">
      <div className="note">
        <div className="content">
          <div className="list-item">
            <img className="bullet" src={bullet} />
            <p className="text">
              Send independence day wishes to your Fav Talent
            </p>
          </div>

          <div className="list-item">
            <img className="bullet" src={bullet} />
            <p className="text">
              User with maximum wishes sent will get extra beans rewards
            </p>
          </div>

          <div className="list-item">
            <img className="bullet" src={bullet} />
            <p className="text">
              Send the wishes responsibly.You get only 5 free card in a day.
            </p>
          </div>
        </div>
      </div>
      <div className="send-wishes">
        <button className="tab-here" />
        <div className="remaining-cards">
          Remaining Cards in my account:0000
        </div>
      </div>
      <div className="pay-beans">
        <div className="pay-cards">
          <span>Pay 1000 beans</span>

          <img src={beans} />
          <span>to buy 5 new cards</span>
        </div>
        <div className="pay-btn"></div>
      </div>

      <div className="note" style={{ marginTop: "3vw" }}>
        <div className="content">
          <p className="title">Note:</p>
          <div className="list-item">
            <img className="bullet" src={bullet} />
            <p className="text">
              In a day, you will get 5 cards in your account.
            </p>
          </div>

          <div className="list-item">
            <img className="bullet" src={bullet} />
            <p className="text">
              Yesterday's unused cards will be carried forward
            </p>
          </div>
        </div>
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

        <div>
          {rewardsTabs.talent ? (
            <FanFollowerTalentRewards />
          ) : (
            <FanFollwerUserRewards />
          )}
        </div>
      </div>
      <div className="cards-sent">Total Cards Sent:000</div>

      <div className="fan-follower-leaderboard">
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
        {leaderBoardTabs.user ? <User /> : <Talent />}

        <p style={{ textAlign: "center", fontSize: "2.5vw" }}>
          All rights reserved by StreamKar
        </p>
      </div>
    </div>
  );
};

export default FanFollwers;
