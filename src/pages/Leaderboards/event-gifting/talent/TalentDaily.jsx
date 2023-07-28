import React, { useContext, useState } from "react";
import todayBtn from "../../../../assets/event-gifting/today-btn.png";
import yestBtn from "../../../../assets/event-gifting/yest-btn.png";
import title from "../../../../assets/event-gifting/leaderboard-tag.png";
import SwitchButton from "../../../../components/SwitchButton";
import { testLeaderData } from "../../../../utils/testData";
import switchBg from "../../../../assets/Conquer-tab/today-yesterday-btn.png";
import EventGiftingLeaderboardItem from "../../../../components/EventGiftingLeaderboardItem";
import { AppContext } from "../../../../AppContext";
import TalentDailyToday from "./TalentDailyToday";
import TalentDailyYest from "./TalentDailyYest";

const TalentDaily = () => {
  const { leaderboardsData } = useContext(AppContext);

  const [seeMore, setSeeMore] = useState(true);
  const [isSliderOn, setIsSliderOn] = useState(false);

  function handleSliderToggle(isOn) {
    setIsSliderOn(isOn);
  }

  return (
    <div className="event-gifting-leaderboard">
      <div className="talent-daily-leaderboard">
        <img src={title} className="title" />
        <div className="switch-btn">
          <SwitchButton
            onToggle={handleSliderToggle}
            btn={isSliderOn ? yestBtn : todayBtn}
            bg={switchBg}
          />

          {testLeaderData[0] && <div className="top1"></div>}

          {isSliderOn ? <TalentDailyYest /> : <TalentDailyToday />}
        </div>
      </div>
    </div>
  );
};

export default TalentDaily;
