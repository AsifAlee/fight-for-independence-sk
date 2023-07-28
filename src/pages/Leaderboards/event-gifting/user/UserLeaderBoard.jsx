import React, { useContext, useState } from "react";
import Topper from "../../../../components/Topper";
import LeaderboardItem from "../../../../components/LeaderboardItem";
import { testLeaderData } from "../../../../utils/testData";
import titleTag from "../../../../assets/event-gifting/leaderboard-tag.png";
import EventGiftingLeaderboardItem from "../../../../components/EventGiftingLeaderboardItem";
import EventGiftingTopper from "../../../../components/EventGiftingTopper";
import { AppContext } from "../../../../AppContext";

const UserLeaderBoard = () => {
  const { leaderboardsData } = useContext(AppContext);

  const [seeMore, setSeeMore] = useState(true);

  return (
    <div className="main-leaderboard">
      <img src={titleTag} className="title" />
      {testLeaderData[0] && (
        <div className="top1">
          <EventGiftingTopper
            user={leaderboardsData?.eventgiftingUserOverall[0]}
          />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {leaderboardsData?.eventgiftingUserOverall
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
      {leaderboardsData?.eventgiftingUserOverall?.length > 10 && (
        <button
          className={`${seeMore ? "see-more" : "see-less"}`}
          onClick={() => setSeeMore((prevState) => !prevState)}
        />
      )}
    </div>
  );
};

export default UserLeaderBoard;
