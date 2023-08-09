import React, { useContext, useState } from "react";
import "../styles/collect-soldier.scss";
import rewardsTitle from "../assets/Rewards-tag.png";
import leaderBoardTag from "../assets/event-gifting/leaderboard-tag.png";
import Topper from "../components/Topper";
import LeaderboardItem from "../components/LeaderboardItem";
import { testLeaderData } from "../utils/testData";
import { baseUrl, testToken, testUserId } from "../utils/api";
import CollectSoldierPopup from "../popups/CollectSoldierPopup";
import { AppContext } from "../AppContext";
import congTag from "../assets/popup/congratulation.png";
import tryAgain from "../assets/popup/try-again.png";
import foreverGif from "../assets/game/forever.gif";
import leftTerShoot from "../assets/game/left-terrist-shoot.gif";
import righTertShoot from "../assets/game/right-terrist-shoot.gif";
import rightPlaneShoot from "../assets/game/right-plane-shoot.gif";
import tankShoot from "../assets/game/tank-shoot.gif";
import { getRandomNumber, gotoProfile } from "../utils/functions";
import RewardHistoryPopup from "../popups/RewardHistoryPopup";
import giftIcon from "../assets/giftIcon.png";
import Marquee from "react-fast-marquee";
import hurrah from "../assets/popup/hurrah.png";
import unknowUser from "../assets/unknown-user.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";

const CollectSoldierTab = () => {
  const {
    info,
    getInfo,
    leaderboardsData,
    getCollectSoldiers,
    user,
    marqueeData,
    getSoldierRecords,
    getConquerersYest,
    getConquerersToday,
    getChampionsYest,
    getChampionsToday,
    getWarriorsYest,
    getWarriorsToday,
  } = useContext(AppContext);
  const { collectSoldiers } = leaderboardsData;
  const [seeMore, setSeeMore] = useState(true);
  const [inputValue, setInputValue] = useState(1);
  const [errorCode, setErrorCode] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [rewardsContent, setRewardsContent] = useState("");
  const [soldiers, setSoldiers] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [currentGif, setCurrentGif] = useState(null);
  const [isPlaying, setIsplaying] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showRewardHistory, setRewardHistory] = useState(false);
  const gameGifs = [leftTerShoot, righTertShoot, rightPlaneShoot, tankShoot];
  const chances = info?.gamePoints / 25000;
  const [warn, setWarn] = useState("");
  const [shakeText, setShakeText] = useState(false);

  const onChangeHandle = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const [showGame, setShowGame] = useState(false);
  const closeGamePopup = () => {
    setShowGame(false);
  };
  const toggleRewardHistory = () => {
    setRewardHistory((prevState) => !prevState);
  };
  const playGame = () => {
    setIsDisabled(true);
    // if(isDisabled){
    //   return
    // }
    if (!inputValue) {
      setWarn("Enter Some value");
      setShakeText(true);
      return;
    } else {
      setShakeText(false);
    }

    fetch(
      `${baseUrl}api/activity/fightForIndependence/collectSoldiers?playCount=${inputValue}`,
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
      .then((response) => response?.json())
      .then((response) => {
        setErrorCode(response?.errorCode);

        setRewardsContent(response?.data?.rewardContent);
        setRewards(response?.data?.rewardDTOList);
        setSoldiers(response?.data?.totalSoldiers);
        setErrMsg(response?.msg);
        if (response?.errorCode === 0) {
          setIsplaying(true);
          setCurrentGif(gameGifs[getRandomNumber() - 1]);

          getChampionsToday();
          getChampionsYest();
          getConquerersToday();
          getConquerersYest();
          getWarriorsToday();
          getWarriorsYest();
        }

        setTimeout(() => {
          setIsDisabled(false);
          setIsplaying(false);
          setShowGame(true);
          getCollectSoldiers();
          getSoldierRecords();
          setInputValue(1);
        }, 1400);
        getInfo();
      })
      .catch((error) => {
        console.error(error);
        setInputValue(1);
        setIsDisabled(false);
        setIsplaying(false);
      });
  };
  const onUpCheck = (e) => {
    let max;
    if (/[+-.]/.test(e.key)) {
      setInputValue("");
    } else {
      if (chances <= 99 && chances > 0) {
        max = chances;
      } else if (chances > 99) {
        max = 99;
      } else if (chances === 0) {
        max = 1;
      }
      let number = inputValue > max ? max : inputValue <= 0 ? 1 : inputValue;
      setInputValue(parseInt(number));
    }
  };
  return (
    <div className="collect-soldier-tab">
      <Marquee className="marquee">
        {marqueeData?.collectSoldier?.map((item) => {
          // let rewDescriptions = JSON.parse(item.desc);

          return (
            <div className="marquee-item">
              <img
                src={item?.portrait ? item?.portrait : unknowUser}
                className="user-img"
                onClick={() => gotoProfile(item?.userId)}
              />
              <div className="user-details">
                <span className="name">{`${item?.nickname?.slice(0, 6)}`}</span>
                <div className="d-flex j-center al-center">
                  &nbsp; has won{" "}
                  {`${
                    item?.userScore === 1
                      ? "750"
                      : item?.userScore === 2
                      ? "350"
                      : item?.userScore === 3
                      ? "500"
                      : item?.userScore === 4
                      ? "250"
                      : item?.userScore === 5
                      ? "100"
                      : item?.userScore === 6
                      ? "1500"
                      : "1000"
                  }`}
                  <span style={{ marginTop: "1vw" }}>
                    <img src={beanIcon} className="bean-img" />
                  </span>
                  .&nbsp;Congratulations!
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>

      <div id="extraContent"></div>
      <div className="collect-soldier-game">
        <img src={isPlaying ? currentGif : foreverGif} className="playingGif" />

        <img
          src={giftIcon}
          className="reward-icon"
          onClick={toggleRewardHistory}
        />
      </div>
      <div className="chances">
        <button
          className="shoot-btn"
          onClick={playGame}
          style={{ filter: isDisabled && "grayScale(1)" }}
          disabled={isDisabled}
        />
        <div className="my-chances">
          <span
            style={{ marginTop: "3vw", marginLeft: "6vw", fontSize: "2.5vw" }}
          >
            My Chances = {Math.floor(info?.gamePoints / 25000)}
          </span>
          {/* ${shakeText && "shaking-text */}
          {shakeText && (
            <span className={`warning-text shaking-text`}>{warn}</span>
          )}
        </div>
        <div
          className="enter-chances"
          style={{ paddingTop: "3vw", paddingLeft: "7vw", fontSize: "2.5vw" }}
        >
          <span>Chance:</span>
          <input
            placeholder="Type here"
            style={{
              width: "50%",
              backgroundColor: "#200e0c",
              height: "4vw",
              fontSize: "2.2vw",
              textAlign: "center",
            }}
            value={inputValue}
            onChange={onChangeHandle}
            onKeyUp={onUpCheck}
            type="number"
          />
        </div>
      </div>
      <div className="rewards">
        <img src={leaderBoardTag} className="title" />
        {collectSoldiers[0] && (
          <div className="top1">
            <Topper user={collectSoldiers[0]} isTalent={false} />
          </div>
        )}

        <div
          className="restWinners"
          style={{ overflowY: !seeMore ? "auto" : "" }}
        >
          {collectSoldiers?.slice(1, seeMore ? 10 : 20).map((user, index) => (
            <LeaderboardItem
              user={user}
              rewards={[]}
              key={index}
              index={index + 2}
              isTalent={false}
            />
          ))}
        </div>
        {collectSoldiers?.length > 10 && (
          <button
            className={`${seeMore ? "see-more" : "see-less"}`}
            onClick={() => setSeeMore((prevState) => !prevState)}
          />
        )}
      </div>
      <p style={{ textAlign: "center", fontSize: "2.5vw" }}>
        All rights reserved by StreamKar
      </p>

      {showGame && (
        <CollectSoldierPopup
          popUpHandler={closeGamePopup}
          errorCode={errorCode}
          rewards={rewards}
          rewardsContent={rewardsContent}
          soldiers={soldiers}
          isCollSold={true}
          title={errorCode === 10000004 ? tryAgain : hurrah}
          errMsg={errMsg}
        />
      )}

      {showRewardHistory && (
        <RewardHistoryPopup popUpHandler={toggleRewardHistory} />
      )}
    </div>
  );
};

export default CollectSoldierTab;
