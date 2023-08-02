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
      {eventGiftingDailyYest?.length > 0 ? (
        <div>
          {eventGiftingDailyYest && eventGiftingDailyYest[0] && (
            <div className="top1">
              <EventGiftingTopper
                user={eventGiftingDailyYest[0]}
                showEst={false}
                isTalent={true}
              />
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
                  showEst={false}
                  isTalent={true}
                  isDaily={true}
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
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "46vw",
          }}
        >
          No Data Found
        </div>
      )}
    </div>
  );
};

export default TalentDailyYest;
