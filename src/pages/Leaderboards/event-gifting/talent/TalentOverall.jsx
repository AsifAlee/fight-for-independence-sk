import React, { useState } from "react";
import { testLeaderData } from "../../../../utils/testData";
import LeaderboardItem from "../../../../components/LeaderboardItem";
import Topper from "../../../../components/Topper";
import titleTag from "../../../../assets/event-gifting/leaderboard-tag.png";
const TalentOverall = () => {
  const [seeMore, setSeeMore] = useState(true);

  return (
    <div className="talent-overall-leaderboard">
      <img src={titleTag} className="title" />
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
  );
};

export default TalentOverall;
