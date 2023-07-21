import React, { useState } from "react";
import todayBtn from "../../../../assets/event-gifting/today-btn.png";
import yestBtn from "../../../../assets/event-gifting/yest-btn.png";
import title from "../../../../assets/event-gifting/leaderboard-tag.png";
import SwitchButton from "../../../../components/SwitchButton";
import { testLeaderData } from "../../../../utils/testData";
import Topper from "../../../../components/Topper";
import LeaderboardItem from "../../../../components/LeaderboardItem";

const TalentDaily = () => {
  const [leaderBoardTabs, setLeaderBoardTabs] = useState({
    today: false,
    yest: true,
  });
  const [seeMore, setSeeMore] = useState(true);

  const [isSliderOn, setIsSliderOn] = useState(false);

  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }
  const switchLeaderBoardTabs = (name) => {
    switch (name) {
      case "today":
        setLeaderBoardTabs({
          today: true,
          yest: false,
        });
        break;
      case "yest":
        setLeaderBoardTabs({
          today: false,
          yest: true,
        });
        break;
    }
  };
  return (
    <div className="event-gifting-leaderboard">
      <div className="talent-daily-leaderboard">
        <img src={title} className="title" />
        <div className="switch-btn">
          <SwitchButton
            onToggle={handleSliderToggle}
            btn={isSliderOn ? todayBtn : yestBtn}
          />

          {testLeaderData[0] && (
            <div className="top1">
              <Topper user={testLeaderData[0]} />
            </div>
          )}

          <div
            className="restWinners"
            style={{ overflowY: !seeMore ? "auto" : "" }}
          >
            {testLeaderData?.slice(1, seeMore ? 10 : 20).map((user, index) => (
              <LeaderboardItem
                user={user}
                rewards={[]}
                key={index}
                index={index + 2}
                showEst={true}
              />
            ))}
          </div>
          <button
            className={`${seeMore ? "see-more" : "see-less"}`}
            onClick={() => setSeeMore((prevState) => !prevState)}
          />
        </div>
      </div>
    </div>
  );
};

export default TalentDaily;
