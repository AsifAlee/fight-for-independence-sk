import React, { useContext, useState } from "react";
import titleTag from "../../../assets/event-gifting/leaderboard-tag.png";
import { testLeaderData } from "../../../utils/testData";

import FanFollwerTopper from "../../../components/FanFollowerTopper";
import FanFollowerLbItem from "../../../components/FanFollowerLbItem";
import { AppContext } from "../../../AppContext";
import { baseUrl, testToken, testUserId } from "../../../utils/api";
import Toast from "../../../components/Toast";

const Talent = () => {
  const [seeMore, setSeeMore] = useState(true);
  const { leaderboardsData, getFanfollowerTalent, user } =
    useContext(AppContext);
  let { fanFollowerTalent } = leaderboardsData;
  const [tagCode, setTagCode] = useState(null);
  const [toastMsg, setToastMsg] = useState("");
  const [showToastMsg, setShowToastMsg] = useState(false);

  const toggleToastPopup = () => {
    setShowToastMsg((prevState) => !prevState);
  };

  const followTalent = (talentId, talentName, isFollow) => {
    if (isFollow) {
      setToastMsg("Already following this user.");
      setShowToastMsg(true);
      return;
    } else {
      fetch(
        `${baseUrl}meShow/entrance?parameter=%7B%22FuncTag%22:10003001,%22token%22:%22${user.token}%22,%22userId%22:%22${user.userId}%22,%22followedIds%22:%22${talentId}%22%7D`
      )
        .then((response) => response.json())
        .then((response) => {
          // toggleToastPopup();
          setShowToastMsg(true);
          if (
            response?.TagCode === "00000000" &&
            response?.followFansList?.length
          ) {
            setToastMsg(`Followed ${talentName}`);
          } else {
            setToastMsg("Not followed");
          }

          getFanfollowerTalent();
        })
        .catch((error) => {
          console.error("api error:", error);
        });
    }
  };

  return (
    <div className="main-leaderboard ">
      <img src={titleTag} className="title" />
      {showToastMsg === true && (
        <Toast message={toastMsg} closeToast={toggleToastPopup} />
      )}

      {fanFollowerTalent[0] && (
        <div className="top1">
          <FanFollwerTopper
            user={fanFollowerTalent[0]}
            isUser={false}
            followTalent={followTalent}
          />
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
            followTalent={followTalent}
          />
        ))}
      </div>

      {fanFollowerTalent?.length > 10 ? (
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

export default Talent;
