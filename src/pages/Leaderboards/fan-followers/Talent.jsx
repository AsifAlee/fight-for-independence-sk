import React, { useContext, useState } from "react";
import titleTag from "../../../assets/event-gifting/leaderboard-tag.png";
import { testLeaderData } from "../../../utils/testData";
import EventGiftingTopper from "../../../components/EventGiftingTopper";
import EventGiftingLeaderboardItem from "../../../components/EventGiftingLeaderboardItem";
import FanFollwerTopper from "../../../components/FanFollowerTopper";
import FanFollowerLbItem from "../../../components/FanFollowerLbItem";
import { AppContext } from "../../../AppContext";

const Talent = () => {
  const [seeMore, setSeeMore] = useState(true);
  const { leaderboardsData } = useContext(AppContext);
  let { fanFollowerTalent } = leaderboardsData;

  return (
    <div className="main-leaderboard ">
      <img src={titleTag} className="title" />
      {fanFollowerTalent[0] && (
        <div className="top1">
          <FanFollwerTopper user={fanFollowerTalent[0]} isUser={false} />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {fanFollowerTalent?.slice(1, seeMore ? 10 : 20).map((user, index) => (
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
