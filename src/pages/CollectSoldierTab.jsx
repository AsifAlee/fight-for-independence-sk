import React, { useState } from "react";
import "../styles/collect-soldier.scss";
import rewardsTitle from "../assets/Rewards-tag.png";
import Topper from "../components/Topper";
import LeaderboardItem from "../components/LeaderboardItem";
import { testLeaderData } from "../utils/testData";
const CollectSoldierTab = () => {
  const [seeMore, setSeeMore] = useState(true);
  return (
    <div className="collect-soldier-tab">
      <div className="collect-soldier-game"></div>
      <div className="chances">
        <button className="shoot-btn" />
        <div className="my-chances">
          <span
            style={{ marginTop: "3vw", marginLeft: "6vw", fontSize: "2.5vw" }}
          >
            My Chances = 00
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
    </div>
  );
};

export default CollectSoldierTab;
