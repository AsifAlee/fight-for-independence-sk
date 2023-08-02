import React, { useContext, useState } from "react";
import "../styles/conquer-fort.scss";
import title from "../assets/Conquer-tab/hero-journey.png";
import beanspot from "../assets/event-gifting/beans-pot.png";
import SwitchButton from "../components/SwitchButton";
import todayBtn from "../assets/event-gifting/today-btn.png";
import yestBtn from "../assets/event-gifting/yest-btn.png";
import switchBg from "../assets/Conquer-tab/today-yesterday-btn.png";
import { testLeaderData } from "../utils/testData";

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
import ConquerFortInfo from "../popups/ConquerFortInfo";
import JoinTeamPopup from "../popups/JoinTeamPopup";
import TabButton from "../components/TabButton";
import warriorGif from "../assets/card/warrior_anim.gif";
import conqGif from "../assets/card/conq_anim.gif";
import champGif from "../assets/card/champ-anim.gif";
import warriorSelect from "../assets/card/warriors-select.png";
import conquerSelect from "../assets/card/conq-select.png";
import champSelect from "../assets/card/champ-select.png";
import Marquee from "react-fast-marquee";
import unknowUser from "../assets/unknown-user.png";

const ConquerVictoryFortTab = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isSliderOn, setIsSliderOn] = useState(false);
  const { info, getInfo, user, marqueeData } = useContext(AppContext);

  const [showLevels, setShowLevels] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [rewardsContent, setRewardsContent] = useState("");
  const [errorCode, setErrorCode] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [errMsg, setErrMsg] = useState("");
  const [infoPopup, setInfoPopup] = useState(false);
  const [joinTeamPopup, setJoinTeamPopup] = useState(false);
  const [joinTeamMsg, setJoinTeamMsg] = useState("");

  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }
  const toggleJoinTeam = () => {
    setJoinTeamPopup((prevState) => !prevState);
  };

  const toggleInfoPopup = () => {
    setInfoPopup((prevState) => !prevState);
  };
  const closeGamePopup = () => {
    setShowGame(false);
    getInfo();
  };
  const [teamTabs, setTeamTabs] = useState({
    warriors: false,
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
    if (selectedTeam === null) {
      setJoinTeamPopup(true);
      return;
    }
    setJoinTeamPopup(true);

    fetch(
      `${baseUrl}api/activity/fightForIndependence/joinTeam?teamId=${
        teamTabs.warriors ? 1 : teamTabs.conquerers ? 2 : 3
      }`,
      {
        method: "POST",
        headers: {
          // userId: testUserId,
          // token: testToken,

          userId: user.userId,
          token: user.token,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        getInfo();
        setJoinTeamMsg(response?.msg);
        setErrorCode(response?.errorCode);
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
        // userId: testUserId,
        // token: testToken,
        userId: user.userId,
        token: user.token,
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
        setIsDisabled(false);
        setShowGame(false);
      });
  };

  const handleTeamChange = (option) => {
    setSelectedTeam(option);
  };
  return (
    <div className="conquer-fort">
      <Marquee className="marquee">
        {marqueeData?.conquerFort?.map((item) => {
          return (
            <div className="marquee-item">
              <img
                src={item?.portrait ? item?.portrait : unknowUser}
                className="user-img"
              />
              <div className="user-details">
                <span className="name">{`${item?.nickname?.slice(0, 6)}`}</span>
                <div>
                  {item?.userScore === 3 ? (
                    <span>
                      &nbsp; has just freed the VICTORY FORT & won 110,000
                      Beans.
                    </span>
                  ) : item?.userScore === 2 ? (
                    <span>
                      &nbsp; has just freed level 2 of the VICTORY FORT & won
                      50,000 Beans.
                    </span>
                  ) : (
                    <span>
                      &nbsp; has just freed level 1 of the VICTORY FORT & won
                      20,000 Beans.
                    </span>
                  )}
                  .&nbsp;Congratulations!
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
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
          <div className="info-icon" onClick={toggleInfoPopup}></div>

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
              <TabButton
                src={teamTabs?.warriors ? warriorGif : warriorSelect}
                handleClick={toggleTeam}
                name="warriors"
                isActive={teamTabs.warriors}
              />
              <TabButton
                src={teamTabs.conquerers ? conqGif : conquerSelect}
                handleClick={toggleTeam}
                name="conquerers"
                isActive={teamTabs.conquerers}
              />
              <TabButton
                src={teamTabs.champions ? champGif : champSelect}
                handleClick={toggleTeam}
                name="champions"
                isActive={teamTabs.champions}
              />
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

        {info?.teamId ? (
          <div className="joined-team-sec">
            <SwitchButton
              bg={switchBg}
              onToggle={handleSliderToggle}
              btn={isSliderOn ? yestBtn : todayBtn}
            />
            <div className="dynamic-tabs">
              {info?.teamTotalSoldiersInfoList
                ?.sort((a, b) => b?.totalSoldiers - a?.totalSoldiers)
                ?.map((team, index) => (
                  <DynamicCard
                    id={team?.teamId}
                    soldiers={team?.totalSoldiers}
                    key={index}
                    index={index}
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
        ) : (
          ""
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
          title={errorCode === 0 ? congTag : oops}
          currentLevel={currentLevel}
          errMsg={errMsg}
        />
      )}
      {infoPopup && <ConquerFortInfo popupHandler={toggleInfoPopup} />}
      {joinTeamPopup && (
        <JoinTeamPopup
          popUpHandler={toggleJoinTeam}
          teamName={
            teamTabs.warriors
              ? "Warriors"
              : teamTabs.champions
              ? "Champions"
              : teamTabs.conquerers
              ? "Conquerers"
              : ""
          }
          teamId={
            teamTabs.warriors
              ? 1
              : teamTabs.champions
              ? 2
              : teamTabs.conquerers
              ? 3
              : 0
          }
          msg={joinTeamMsg}
          errorCode={errorCode}
        />
      )}
    </div>
  );
};

export default ConquerVictoryFortTab;
