import React, { useContext, useState } from "react";
import "../styles/conquer-fort.scss";
import title from "../assets/Conquer-tab/hero-journey.png";
import beanspot from "../assets/event-gifting/beans-pot.png";
import SwitchButton from "../components/SwitchButton";
import todayBtn from "../assets/event-gifting/today-btn.png";
import yestBtn from "../assets/event-gifting/yest-btn.png";
import switchBg from "../assets/Conquer-tab/today-yesterday-btn.png";
import { testLeaderData } from "../utils/testData";
import titleTag from "../assets/event-gifting/leaderboard-tag.png";
import ConquerVictoryLeaderboardItems from "../components/ConquerVictoryLeaderboardItems";
import ConquerTabTopper from "../components/ConquerTabTopper";
import { baseUrl, testToken, testUserId } from "../utils/api";
import { AppContext } from "../AppContext";
import ConquerFortPopup from "../popups/ConquerFortPopup";
import congTag from "../assets/popup/congratulation.png";
import oops from "../assets/popup/oops.png";
import yay from "../assets/popup/yay.png";
import DynamicCard from "../components/DynamicCard";
import ChampionsLeaderboard from "./Leaderboards/conquer-fort/ChampionsLeaderboard";
import WarriorLeaderboard from "./Leaderboards/conquer-fort/WarriorsLeaderboard";
import ConquererLeaderboard from "./Leaderboards/conquer-fort/ConquerersLeaderboard";

const ConquerVictoryFortTab = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isSliderOn, setIsSliderOn] = useState(false);
  const [seeMore, setSeeMore] = useState(true);
  const { info, getInfo } = useContext(AppContext);

  const [showLevels, setShowLevels] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [rewardsContent, setRewardsContent] = useState("");
  const [errorCode, setErrorCode] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [errMsg, setErrMsg] = useState("");

  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }
  const closeGamePopup = () => {
    setShowGame(false);
    getInfo();
  };
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
  const joinTheTeam = () => {
    fetch(
      `${baseUrl}api/activity/fightForIndependence/joinTeam?teamId=${
        teamTabs.warriors ? 1 : teamTabs.conquerers ? 2 : 3
      }`,
      {
        method: "POST",
        headers: {
          userId: testUserId,
          token: testToken,

          // userId: user.uid,
          // token: user.token,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        getInfo();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const playGame = () => {
    setIsDisabled(true);
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
      .then((response) => {
        setIsDisabled(false);
        setShowGame(true);
        setErrorCode(response?.errorCode);
        setRewardsContent(response?.data?.rewardContent);
        setRewards(response?.data?.rewardDTOList);
        if (response?.errorCode === 0 && info?.fortState !== 1) {
          setCurrentLevel((prevState) => prevState + 1);
        }
        setErrMsg(response?.msg);
        getInfo();
      })
      .catch((error) => {
        console.error(error);
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
            <span>Soldiers Collected:{info?.dailyTotalSoldier}</span>
          </div>
          <div className="info-icon"></div>

          <div className="levels">
            <div
              className="level1"
              style={{ visibility: info?.fortState >= 2 && "hidden" }}
            ></div>
            <div
              className="level2"
              style={{ visibility: info?.fortState >= 3 && "hidden" }}
            ></div>
            <div
              className="level3"
              // style={{ visibility: info?.fortState > 3 && "hidden" }}
            ></div>
          </div>
          <button
            className={`playBtn ${isDisabled && "blackNWhite"}`}
            onClick={playGame}
          />
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
        <span>Soldiers collected today:{info?.dailyCurrentSoldier}</span>
      </div>
      <div className="join-team-wrap">
        {info?.teamId === 0 && (
          <>
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
          </>
        )}

        {info?.teamId > 0 && (
          <div className="joined-team-sec">
            <SwitchButton
              bg={switchBg}
              onToggle={handleSliderToggle}
              btn={isSliderOn ? yestBtn : todayBtn}
            />
            <div className="dynamic-tabs">
              {info?.teamTotalSoldiersInfoList
                ?.sort((a, b) => b?.totalSoldiers - a?.totalSoldiers)
                ?.map((team) => (
                  <DynamicCard
                    id={team?.teamId}
                    soldiers={team?.totalSoldiers}
                  />
                ))}
            </div>

            {info?.teamId === 1 ? (
              <WarriorLeaderboard isSliderOn={isSliderOn} />
            ) : info?.teamId === 2 ? (
              <ConquererLeaderboard isSliderOn={isSliderOn} />
            ) : info?.teamId === 3 ? (
              <ChampionsLeaderboard isSliderOn={isSliderOn} />
            ) : (
              <></>
            )}
          </div>
        )}

        <p
          style={{ textAlign: "center", fontSize: "2.5vw", marginTop: "13vw" }}
        >
          All rights reserved by StreamKar
        </p>
      </div>

      {showGame && (
        <ConquerFortPopup
          popUpHandler={closeGamePopup}
          errorCode={errorCode}
          rewards={rewards}
          rewardsContent={rewardsContent}
          isCollSold={true}
          title={errorCode === 10000008 ? oops : congTag}
          currentLevel={currentLevel}
          errMsg={errMsg}
        />
      )}
    </div>
  );
};

export default ConquerVictoryFortTab;
