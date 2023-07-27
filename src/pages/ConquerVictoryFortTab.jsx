import React, { useState } from "react";
import "../styles/conquer-fort.scss";
import title from "../assets/Conquer-tab/hero-journey.png";
import beanspot from "../assets/event-gifting/beans-pot.png";
import RadioSelect from "../components/RadioSelect";
import warriors from "../assets/Conquer-tab/Warriors.png";
import conquerers from "../assets/Conquer-tab/Conquerers.png";
import champions from "../assets/Conquer-tab/Champions.png";
import SwitchButton from "../components/SwitchButton";
import todayBtn from "../assets/event-gifting/today-btn.png";
import yestBtn from "../assets/event-gifting/yest-btn.png";
import switchBg from "../assets/Conquer-tab/today-yesterday-btn.png";
import { testLeaderData } from "../utils/testData";
import Topper from "../components/Topper";
import titleTag from "../assets/event-gifting/leaderboard-tag.png";
import LeaderboardItem from "../components/LeaderboardItem";
import ConquerVictoryLeaderboardItems from "../components/ConquerVictoryLeaderboardItems";
import ConquerTabTopper from "../components/ConquerTabTopper";
import { baseUrl, testToken, testUserId } from "../utils/api";

const ConquerVictoryFortTab = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isSliderOn, setIsSliderOn] = useState(false);
  const [seeMore, setSeeMore] = useState(true);

  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }
  const [teamTabs, setTeamTabs] = useState({
    warriors: true,
    conquerers: false,
    champions: false,
  });

  const toggleTeam = (name) => {
    switch (name) {
      case "warriors":
        setTeamTabs({ conquerers: false, champions: false, warriors: true });
        break;
      case "conquerers":
        setTeamTabs({ conquerers: true, champions: false, warriors: false });
        break;
      case "champions":
        setTeamTabs({ conquerers: false, champions: true, warriors: false });
        break;
    }
  };
  const joinTheTeam = () => {};

  const playGame = () => {
    fetch(`${baseUrl}api/activity/fightForIndependence/conquerFort`, {
      method: "POST",
      headers: {
        userId: testUserId,
        token: testToken,
        // userId: user.uid,
        // token: user.token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {})
      .catch((error) => {
        console.erro(error);
      });
  };

  const handleTeamChange = (option) => {
    setSelectedTeam(option);
  };
  return (
    <div className="conquer-fort">
      <div className="use-soldier-info">
        <p>
          Use your soldiers carefully.If your pursuit of freeing the forts level
          is unsuccessfull,all the soldiers will be lost.
        </p>
      </div>
      <div className="fort-wrapper">
        <div className="fort">
          <div className="collect-soldiers">
            <span>My Chances:00</span>
          </div>
          <div className="info-icon"></div>

          <div className="levels">
            <div className="level1"></div>
            <div className="level2"></div>
            <div className="level3"></div>
          </div>
          <button className="playBtn" onClick={playGame} />
        </div>
      </div>
      <div style={{ marginTop: "7vw" }}>
        <div className="beans-pot">
          <img src={title} className="title" />
          <img src={beanspot} className="beanspot-img" />
          <div className="beans-count">
            <span>1234567</span>
          </div>
        </div>
      </div>
      <div className="collect-soldiers">
        <span>Soldiers collected today:000000</span>
      </div>
      <div className="join-team-wrap">
        <div className="teams">
          <div
            className="warriors"
            onClick={() => toggleTeam("warriors")}
            style={{ border: teamTabs.warriors ? "1px solid white" : "" }}
          ></div>
          <div
            className="conquerers"
            onClick={() => toggleTeam("conquerers")}
            style={{ border: teamTabs.conquerers ? "1px solid white" : "" }}
          ></div>
          <div
            className="champions"
            onClick={() => toggleTeam("champions")}
            style={{ border: teamTabs.champions ? "1px solid white" : "" }}
          ></div>
        </div>
        <div className="use-soldier-info">
          <p>
            Team once choosen cannot be changed. <br />
            Choose wisely!
          </p>
        </div>

        <button className="join-btn" onClick={joinTheTeam} />

        <div className="joined-team-sec">
          <SwitchButton
            bg={switchBg}
            onToggle={handleSliderToggle}
            btn={isSliderOn ? yestBtn : todayBtn}
          />

          <div className="dynamic-tabs"></div>
          <div className="conquer-tab-leaderboard">
            <img src={titleTag} className="title" />
            {testLeaderData[0] && (
              <div className="top1">
                <ConquerTabTopper
                  user={testLeaderData[0]}
                  isToday={isSliderOn === false}
                />
              </div>
            )}

            <div
              className="restWinners"
              style={{ overflowY: !seeMore ? "auto" : "" }}
            >
              {testLeaderData
                ?.slice(1, seeMore ? 10 : 20)
                .map((user, index) => (
                  <ConquerVictoryLeaderboardItems
                    user={user}
                    rewards={[]}
                    key={index}
                    index={index + 2}
                    showEst={true}
                    isToday={isSliderOn === false}
                  />
                ))}
            </div>
            <button
              className={`${seeMore ? "see-more" : "see-less"}`}
              onClick={() => setSeeMore((prevState) => !prevState)}
            />
          </div>
        </div>

        <p
          style={{ textAlign: "center", fontSize: "2.5vw", marginTop: "13vw" }}
        >
          All rights reserved by StreamKar
        </p>
      </div>
    </div>
  );
};

export default ConquerVictoryFortTab;
