import React, { useContext, useState } from "react";
import title from "../../../../assets/event-gifting/leaderboard-tag.png";
import { testLeaderData } from "../../../../utils/testData";
import EventGiftingLeaderboardItem from "../../../../components/EventGiftingLeaderboardItem";
import { AppContext } from "../../../../AppContext";
import EventGiftingTopper from "../../../../components/EventGiftingTopper";

const TalentDailyYest = () => {
  const { leaderboardsData } = useContext(AppContext);
  const { eventGiftingDailyYest } = leaderboardsData;
  const [seeMore, setSeeMore] = useState(true);

  return (
    <div className="event-gifting-leaderboard">
      {eventGiftingDailyYest[0] && (
        <div className="top1">
          <EventGiftingTopper user={eventGiftingDailyYest[0]} />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {eventGiftingDailyYest
          ?.slice(1, seeMore ? 10 : 20)
          .map((user, index) => (
            <EventGiftingLeaderboardItem
              user={user}
              rewards={[]}
              key={index}
              index={index + 2}
              showEst={true}
            />
          ))}
      </div>
      {eventGiftingDailyYest?.length > 10 && (
        <button
          className={`${seeMore ? "see-more" : "see-less"}`}
          onClick={() => setSeeMore((prevState) => !prevState)}
        />
      )}
    </div>
  );
};

export default TalentDailyYest;
