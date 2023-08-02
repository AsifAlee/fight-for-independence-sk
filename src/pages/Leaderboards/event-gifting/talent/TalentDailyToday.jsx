import React, { useContext, useState } from "react";
import title from "../../../../assets/event-gifting/leaderboard-tag.png";
import { testLeaderData } from "../../../../utils/testData";
import EventGiftingLeaderboardItem from "../../../../components/EventGiftingLeaderboardItem";
import { AppContext } from "../../../../AppContext";
import EventGiftingTopper from "../../../../components/EventGiftingTopper";
import { eventGftingPot } from "../../../../beansPot";

const TalentDailyToday = () => {
  const { leaderboardsData, info } = useContext(AppContext);
  const { eventGiftingDailyToday } = leaderboardsData;
  const [seeMore, setSeeMore] = useState(true);
  // const calculateEstRewards = (index) => {
  //   const totalBeansPot = info?.eventGftingTalentPot;
  //   const percent = eventGftingPot.find((item) => item.rank === index)?.percent;
  //   const result = totalBeansPot ? (percent / 100) * totalBeansPot : 0;
  //   return Math.floor(result);
  // };
  return (
    <div className="event-gifting-leaderboard">
      {eventGiftingDailyToday[0] && (
        <div className="top1">
          <EventGiftingTopper
            user={eventGiftingDailyToday[0]}
            // showEst={true}
            isTalent={true}
            // calculateEstRewards={calculateEstRewards}
          />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {eventGiftingDailyToday
          ?.slice(1, seeMore ? 10 : 20)
          .map((user, index) => (
            <EventGiftingLeaderboardItem
              user={user}
              rewards={[]}
              key={index}
              index={index + 2}
              showEst={false}
              isTalent={true}
              isDaily={true}
              // calculateEstRewards={calculateEstRewards}
            />
          ))}
      </div>
      {eventGiftingDailyToday?.length > 10 && (
        <button
          className={`${seeMore ? "see-more" : "see-less"}`}
          onClick={() => setSeeMore((prevState) => !prevState)}
        />
      )}
    </div>
  );
};

export default TalentDailyToday;
