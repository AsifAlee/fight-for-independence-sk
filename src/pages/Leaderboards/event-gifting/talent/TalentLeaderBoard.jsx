import React, { useState } from "react";
import dailyBtn from "../../../../assets/event-gifting/daily-btn.png";
import overallBtn from "../../../../assets/event-gifting/Overall-btn.png";
import TabButton from "../../../../components/TabButton";
import TalentDaily from "./TalentDaily";
import TalentOverall from "./TalentOverall";

const TalentLeaderBoard = () => {
  const [leaderBoardTabs, setLeaderBoardTabs] = useState({
    daily: false,
    overall: true,
  });
  const switchLeaderBoardTabs = (name) => {
    switch (name) {
      case "daily":
        setLeaderBoardTabs({
          daily: true,
          overall: false,
        });
        break;
      case "overall":
        setLeaderBoardTabs({
          daily: false,
          overall: true,
        });
        break;
    }
  };
  return (
    <div className="event-gifting-leaderboard">
      <div className="leaderboard-tabs">
        <TabButton
          src={dailyBtn}
          handleClick={switchLeaderBoardTabs}
          name="daily"
          isActive={leaderBoardTabs.daily}
        />
        <TabButton
          src={overallBtn}
          handleClick={switchLeaderBoardTabs}
          name="overall"
          isActive={leaderBoardTabs.overall}
        />
      </div>
      {leaderBoardTabs.daily ? <TalentDaily /> : <TalentOverall />}
    </div>
  );
};

export default TalentLeaderBoard;
