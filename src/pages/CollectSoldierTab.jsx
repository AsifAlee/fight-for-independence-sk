import React, { useContext, useState } from "react";
import "../styles/collect-soldier.scss";
import rewardsTitle from "../assets/Rewards-tag.png";
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
import { getRandomNumber } from "../utils/functions";
import RewardHistoryPopup from "../popups/RewardHistoryPopup";
import giftIcon from "../assets/giftIcon.png";
import Marquee from "react-fast-marquee";
import unknowUser from "../assets/unknown-user.png";

const CollectSoldierTab = () => {
  const {
    info,
    getInfo,
    leaderboardsData,
    getCollectSoldiers,
    user,
    marqueeData,
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
        setIsplaying(true);

        setErrorCode(response?.errorCode);
        setRewardsContent(response?.data?.rewardContent);
        setRewards(response?.data?.rewardDTOList);
        setSoldiers(response?.data?.totalSoldiers);
        setErrMsg(response?.msg);
        setCurrentGif(gameGifs[getRandomNumber() - 1]);
        setTimeout(() => {
          setIsDisabled(false);
          setIsplaying(false);
          setShowGame(true);
          getCollectSoldiers();
        }, 1400);
        getInfo();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onUpCheck = (e) => {
    let max;
    if (/[+-.]/.test(e.key)) {
      setInputValue("");
    } else {
      if (info.gamePoints <= 99 && info.gamePoints > 0) {
        max = info.gamePoints;
      } else if (info.gamePoints > 99) {
        max = 99;
      } else if (info.gamePoints === 0) {
        max = 1;
      }
      let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
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
              />
              <div className="user-details">
                <span className="name">{`${item?.nickname?.slice(0, 6)}`}</span>
                <div>
                  has won {`${item?.userScore} Beans`}
                  .Congratulations!
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
            My Chances = {info?.gamePoints}
          </span>
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
            }}
            value={inputValue}
            onChange={onChangeHandle}
            onKeyUp={onUpCheck}
            type="number"
          />
        </div>
      </div>
      <div className="rewards">
        <img src={rewardsTitle} className="title" />
        {collectSoldiers[0] && (
          <div className="top1">
            <Topper user={collectSoldiers[0]} />
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
            />
          ))}
        </div>
        <button
          className={`${seeMore ? "see-more" : "see-less"}`}
          onClick={() => setSeeMore((prevState) => !prevState)}
        />
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
          title={errorCode === 10000004 ? tryAgain : congTag}
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
