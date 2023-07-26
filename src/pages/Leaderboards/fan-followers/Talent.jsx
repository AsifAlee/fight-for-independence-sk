import React, { useState } from "react";
import titleTag from "../../../assets/event-gifting/leaderboard-tag.png";
import { testLeaderData } from "../../../utils/testData";
import EventGiftingTopper from "../../../components/EventGiftingTopper";
import EventGiftingLeaderboardItem from "../../../components/EventGiftingLeaderboardItem";
import FanFollwerTopper from "../../../components/FanFollowerTopper";
import FanFollowerLbItem from "../../../components/FanFollowerLbItem";

const Talent = () => {
  const [seeMore, setSeeMore] = useState(true);

  return (
    <div className="main-leaderboard ">
      <img src={titleTag} className="title" />
      {testLeaderData[0] && (
        <div className="top1">
          {/* <EventGiftingTopper user={testLeaderData[0]} /> */}
          <FanFollwerTopper user={testLeaderData[0]} isUser={false} />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {testLeaderData?.slice(1, seeMore ? 10 : 20).map((user, index) => (
          //   <EventGiftingLeaderboardItem
          //     user={user}
          //     rewards={[]}
          //     key={index}
          //     index={index + 2}
          //     showEst={true}
          //   />

          <FanFollowerLbItem
            user={user}
            rewards={[]}
            key={index}
            index={index + 2}
            showEst={true}
            isUser={false}
          />
        ))}
      </div>
      <button
        className={`${seeMore ? "see-more" : "see-less"}`}
        onClick={() => setSeeMore((prevState) => !prevState)}
      />
    </div>
  );
};

export default Talent;
