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
const CollectSoldierTab = () => {
  const { info, getInfo } = useContext(AppContext);
  const [seeMore, setSeeMore] = useState(true);
  const [inputValue, setInputValue] = useState(1);
  const [errorCode, setErrorCode] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [rewardsContent, setRewardsContent] = useState("");
  const [soldiers, setSoldiers] = useState(0);
  const [errMsg, setErrMsg] = useState("");

  const onChangeHandle = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const [showGame, setShowGame] = useState(false);
  const closeGamePopup = () => {
    setShowGame(false);
  };
  const playGame = () => {
    fetch(
      `${baseUrl}api/activity/fightForIndependence/collectSoldiers?playCount=${inputValue}`,
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
      .then((response) => response?.json())
      .then((response) => {
        setShowGame(true);
        setErrorCode(response?.errorCode);
        setRewardsContent(response?.data?.rewardContent);
        setRewards(response?.data?.rewardDTOList);
        setSoldiers(response?.data?.totalSoldiers);
        setErrMsg(response?.msg);
        getInfo();
      })
      .catch((error) => {
        console.erro(error);
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
      <div className="collect-soldier-game"></div>
      <div className="chances">
        <button className="shoot-btn" onClick={playGame} />
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
        {testLeaderData[0] && (
          <div className="top1">
            <Topper user={testLeaderData[0]} />
          </div>
        )}

        <div
          className="restWinners"
          style={{ overflowY: !seeMore ? "auto" : "" }}
        >
          {testLeaderData.slice(1, seeMore ? 10 : 20).map((user, index) => (
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
    </div>
  );
};

export default CollectSoldierTab;
