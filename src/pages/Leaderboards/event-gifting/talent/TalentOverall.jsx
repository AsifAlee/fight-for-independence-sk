import React, { useContext, useState } from "react";
import { testLeaderData } from "../../../../utils/testData";
import LeaderboardItem from "../../../../components/LeaderboardItem";
import Topper from "../../../../components/Topper";
import titleTag from "../../../../assets/event-gifting/leaderboard-tag.png";
import EventGiftingLeaderboardItem from "../../../../components/EventGiftingLeaderboardItem";
import EventGiftingTopper from "../../../../components/EventGiftingTopper";
import { AppContext } from "../../../../AppContext";
const TalentOverall = () => {
  const [seeMore, setSeeMore] = useState(true);
  const { leaderboardsData } = useContext(AppContext);
  let { eventgiftingTalentOverall } = leaderboardsData;

  return (
    <div className="talent-overall-leaderboard">
      <img src={titleTag} className="title" />
      {eventgiftingTalentOverall?.length && eventgiftingTalentOverall[0] && (
        <div className="top1">
          <EventGiftingTopper user={eventgiftingTalentOverall[0]} />
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
              showEst={true}
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
