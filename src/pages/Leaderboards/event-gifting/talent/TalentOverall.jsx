import React, { useContext, useState } from "react";
import { testLeaderData } from "../../../../utils/testData";
import LeaderboardItem from "../../../../components/LeaderboardItem";
import Topper from "../../../../components/Topper";
import titleTag from "../../../../assets/event-gifting/leaderboard-tag.png";
import EventGiftingLeaderboardItem from "../../../../components/EventGiftingLeaderboardItem";
import EventGiftingTopper from "../../../../components/EventGiftingTopper";
import { AppContext } from "../../../../AppContext";
import { eventGftingPot } from "../../../../beansPot";
const TalentOverall = () => {
  const [seeMore, setSeeMore] = useState(true);
  const { leaderboardsData, info } = useContext(AppContext);
  let { eventgiftingTalentOverall } = leaderboardsData;

  const calculateEstRewards = (index) => {
    const totalBeansPot = info?.eventGftingTalentPot;
    const percent = eventGftingPot.find((item) => item.rank === index)?.percent;
    const result = totalBeansPot ? (percent / 100) * totalBeansPot : 0;
    return Math.floor(result);
  };

  return (
    <div className="talent-overall-leaderboard">
      <img src={titleTag} className="title" />
      {eventgiftingTalentOverall?.length && eventgiftingTalentOverall[0] && (
        <div className="top1">
          <EventGiftingTopper
            user={eventgiftingTalentOverall[0]}
            showEst={true}
            calculateEstRewards={calculateEstRewards}
            isTalent={true}
          />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {eventgiftingTalentOverall
          ?.slice(1, seeMore ? 10 : 20)
          .map((user, index) => (
            <EventGiftingLeaderboardItem
              user={user}
              rewards={[]}
              key={index}
              index={index + 2}
              showEst={index <= 3 ? true : false}
              calculateEstRewards={calculateEstRewards}
              isTalent={true}
            />
          ))}
      </div>
      {eventgiftingTalentOverall?.length > 10 && (
        <button
          className={`${seeMore ? "see-more" : "see-less"}`}
          onClick={() => setSeeMore((prevState) => !prevState)}
        />
      )}
    </div>
  );
};

export default TalentOverall;
