import React, { useContext, useEffect, useState } from "react";
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
import beanIcon from "../assets/event-gifting/bean-icon.png";
import { gotoProfile } from "../utils/functions";

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
  const [currentLevel, setCurrentLevel] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [infoPopup, setInfoPopup] = useState(false);
  const [joinTeamPopup, setJoinTeamPopup] = useState(false);
  const [joinTeamMsg, setJoinTeamMsg] = useState("");
  const [isNotEnoughSoldiers, setIsNotEnoughSoldier] = useState(false);

  const sortLeaderBoard = () => {
    let teamId = info?.teamTotalSoldiersInfoList?.sort(
      (a, b) => b?.totalSoldiers - a?.totalSoldiers
    )[0]?.teamId;

    return teamId;
  };

  const [selectedTeamId, setSelectedTeamId] = useState(sortLeaderBoard);
  useEffect(() => {
    setSelectedTeam(sortLeaderBoard());
  }, []);

  const [selectedRank, setSelectedRank] = useState({
    warriors: true,
    coquerers: false,
    champions: false,
  });

  const toggleSelectedRank = (rankId) => {
    switch (rankId) {
      case 1:
        setSelectedRank({
          warriors: true,
          coquerers: false,
          champions: false,
        });
        setSelectedTeamId(1);

        break;
      case 2:
        setSelectedRank({
          warriors: false,
          coquerers: true,
          champions: false,
        });
        setSelectedTeamId(2);

        break;
      case 3:
        setSelectedRank({
          warriors: false,
          coquerers: false,
          champions: true,
        });
        setSelectedTeamId(3);

        break;
    }
  };
  useEffect(() => {
    setCurrentLevel(info.fortState);
  }, []);

  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }
  const toggleJoinTeam = () => {
    setJoinTeamPopup((prevState) => !prevState);
  };

  useEffect(() => {});

  const toggleInfoPopup = () => {
    setInfoPopup((prevState) => !prevState);
  };
  const closeGamePopup = (isNotEnoughSoldiers) => {
    if (isNotEnoughSoldiers) {
      getInfo();
    }
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
        setSelectedTeam(1);
        break;
      case "conquerers":
        setTeamTabs({ conquerers: true, champions: false, warriors: false });
        setSelectedTeam(2);
        break;
      case "champions":
        setTeamTabs({ conquerers: false, champions: true, warriors: false });
        setSelectedTeam(3);
        break;
    }
  };
  const joinTheTeam = () => {
    if (selectedTeam === null) {
      setJoinTeamPopup(true);
      return;
    }

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
        if (response?.errorCode === 0) {
          setJoinTeamMsg(response?.msg);
          setErrorCode(response?.errorCode);
          setJoinTeamPopup(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const playGame = () => {
    if (info.dailyCurrentSoldier === 0) {
      setShowGame(true);
      return;
    }
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
        // soldiers not enougt

        setErrorCode(response?.errorCode);
        setRewardsContent(response?.data?.rewardContent);
        setRewards(response?.data?.rewardDTOList);
        if (response?.errorCode === 0 && response?.fortState !== 1) {
          if (currentLevel === 4) {
            setCurrentLevel(info.fortState);
          }
          setCurrentLevel((prevState) => prevState + 1);
        }
        if (response?.errorCode === 10000008) {
          setIsNotEnoughSoldier(true);
        } else {
          getInfo();
        }
        setErrMsg(response?.msg);
      })
      .catch((error) => {
        console.error(error);
        setIsDisabled(false);
        setShowGame(false);
      });
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
                onClick={() => gotoProfile(item?.userId)}
              />
              <div className="user-details">
                <span className="name">{`${item?.nickname?.slice(0, 6)}`}</span>
                {/* <div> */}
                {item?.userScore === 3 ? (
                  <div className="d-flex j-center al-center">
                    &nbsp; has just freed the VICTORY FORT & won 110,000
                    <span style={{ marginTop: "1vw" }}>
                      <img src={beanIcon} className="bean-img" />
                    </span>
                    .
                  </div>
                ) : item?.userScore === 2 ? (
                  <div className="d-flex j-center al-center">
                    &nbsp; has just freed level 2 of the VICTORY FORT & won
                    50,000{" "}
                    <span style={{ marginTop: "1vw" }}>
                      <img src={beanIcon} className="bean-img" />
                    </span>
                    .
                  </div>
                ) : (
                  <div className="d-flex j-center al-center">
                    &nbsp; has just freed level 1 of the VICTORY FORT & won
                    20,000{" "}
                    <span style={{ marginTop: "1vw" }}>
                      <img src={beanIcon} className="bean-img" />
                    </span>
                    .
                  </div>
                )}
                &nbsp;Congratulations!
                {/* </div> */}
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
            <span>Soldiers Collected Today:{info?.dailyCurrentSoldier}</span>
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
            <span>{info.conquerFortTodayPot}</span>
          </div>
        </div>
      </div>
      <div className="collect-soldiers">
        <span>Soldiers collected:{info?.dailyTotalSoldier}</span>
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
                    toggleSelectedRank={toggleSelectedRank}
                    selectedRank={selectedRank}
                    selectedTeamId={selectedTeamId}
                    isToday={isSliderOn === false}
                  />
                ))}
            </div>

            {selectedTeamId === 1 ? (
              <WarriorLeaderboard isSliderOn={isSliderOn} />
            ) : selectedTeamId === 2 ? (
              <ConquererLeaderboard isSliderOn={isSliderOn} />
            ) : selectedTeamId === 3 ? (
              <ChampionsLeaderboard isSliderOn={isSliderOn} />
            ) : (
              <>Nothing to show</>
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
          title={
            info?.dailyCurrentSoldier === 0
              ? oops
              : errorCode === 0
              ? congTag
              : currentLevel === 4
              ? yay
              : oops
          }
          currentLevel={currentLevel}
          errMsg={errMsg}
          // dyingSoldiers={dyingSoldiers}
          // isNotEnoughSoldiers={isNotEnoughSoldiers}
          zeroSoldiers={info?.dailyCurrentSoldier === 0}
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
