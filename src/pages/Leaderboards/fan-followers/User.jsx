import React, { useContext, useState } from "react";
import EventGiftingLeaderboardItem from "../../../components/EventGiftingLeaderboardItem";
import { testLeaderData } from "../../../utils/testData";
import titleTag from "../../../assets/event-gifting/leaderboard-tag.png";
import EventGiftingTopper from "../../../components/EventGiftingTopper";
import FanFollowerLbItem from "../../../components/FanFollowerLbItem";
import FanFollwerTopper from "../../../components/FanFollowerTopper";
import { AppContext } from "../../../AppContext";
const User = () => {
  const [seeMore, setSeeMore] = useState(true);
  const { leaderboardsData } = useContext(AppContext);
  let { fanFollowerUser } = leaderboardsData;
  return (
    <div className="main-leaderboard ">
      <img src={titleTag} className="title" />
      {fanFollowerUser[0] && (
        <div className="top1">
          <FanFollwerTopper theUser={fanFollowerUser[0]} isUser={true} />
        </div>
      )}

      <div
        className="restWinners"
        style={{ overflowY: !seeMore ? "auto" : "" }}
      >
        {fanFollowerUser?.slice(1, seeMore ? 10 : 20).map((user, index) => (
          <FanFollowerLbItem
            theUser={user}
            rewards={[]}
            key={index}
            index={index + 2}
            showEst={true}
            isUser={true}
          />
        ))}
      </div>
      {fanFollowerUser?.length > 10 ? (
        <button
          className={`${seeMore ? "see-more" : "see-less"}`}
          onClick={() => setSeeMore((prevState) => !prevState)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
