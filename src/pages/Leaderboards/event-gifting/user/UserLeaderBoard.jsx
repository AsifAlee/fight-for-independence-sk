import React, { useContext, useState } from "react";
import Topper from "../../../../components/Topper";
import LeaderboardItem from "../../../../components/LeaderboardItem";
import { testLeaderData } from "../../../../utils/testData";
import titleTag from "../../../../assets/event-gifting/leaderboard-tag.png";
import EventGiftingLeaderboardItem from "../../../../components/EventGiftingLeaderboardItem";
import EventGiftingTopper from "../../../../components/EventGiftingTopper";
import { AppContext } from "../../../../AppContext";
import { eventGftingPot } from "../../../../beansPot";

const UserLeaderBoard = () => {
  const { leaderboardsData } = useContext(AppContext);
  const { eventgiftingUserOverall } = leaderboardsData;
  const { info } = useContext(AppContext);

  const [seeMore, setSeeMore] = useState(true);
  const calculateEstRewards = (index) => {
    const totalBeansPot = info?.eventGftingUserPot;
    const percent = eventGftingPot.find((item) => item.rank === index)?.percent;
    const result = totalBeansPot ? (percent / 100) * totalBeansPot : 0;
    return Math.floor(result);
  };

  return (
    <div className="main-leaderboard">
      <img src={titleTag} className="title" />
      {eventgiftingUserOverall && eventgiftingUserOverall[0] && (
        <div className="top1">
          <EventGiftingTopper
            user={leaderboardsData?.eventgiftingUserOverall[0]}
            showEst={true}
            calculateEstRewards={calculateEstRewards}
            isTalent={false}
          />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {eventgiftingUserOverall
          ?.slice(1, seeMore ? 10 : 20)
          .map((user, index) => (
            <EventGiftingLeaderboardItem
              user={user}
              rewards={[]}
              key={index}
              index={index + 2}
              showEst={true}
              calculateEstRewards={calculateEstRewards}
              isTalent={false}
            />
          ))}
      </div>
      {eventgiftingUserOverall?.length > 10 && (
        <button
          className={`${seeMore ? "see-more" : "see-less"}`}
          onClick={() => setSeeMore((prevState) => !prevState)}
        />
      )}
    </div>
  );
};

export default UserLeaderBoard;
