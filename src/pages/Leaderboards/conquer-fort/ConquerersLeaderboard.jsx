import React, { useContext, useEffect, useState } from "react";
import titleTag from "../../../assets/event-gifting/leaderboard-tag.png";
import "../../../styles/conquer-fort.scss";
import { testLeaderData } from "../../../utils/testData";
import ConquerTabTopper from "../../../components/ConquerTabTopper";
import ConquerVictoryLeaderboardItems from "../../../components/ConquerVictoryLeaderboardItems";
import { AppContext } from "../../../AppContext";
import { conquerFortPot } from "../../../beansPot";
const ConquererLeaderboard = ({ isSliderOn }) => {
  const [seeMore, setSeeMore] = useState(true);
  const { leaderboardsData, info } = useContext(AppContext);

  const { conquerersToday, conquerersYest } = leaderboardsData;
  const [currentData, setCurrentData] = useState(conquerersToday);
  //   debugger;
  const calculateEstRewards = (index, isToday) => {
    const totalBeansPot = isToday
      ? info?.conquerFortTodayPot
      : info?.conquerFortYestPot;
    const percent = conquerFortPot.find((item) => item.rank === index)?.percent;
    const result = totalBeansPot ? (percent / 100) * totalBeansPot : 0;
    return Math.floor(result);
  };
  useEffect(() => {
    setCurrentData(conquerersToday);
  }, [leaderboardsData]);

  useEffect(() => {
    if (isSliderOn) {
      setCurrentData(conquerersYest);
    } else {
      setCurrentData(conquerersToday);
    }
  }, [isSliderOn]);
  return (
    <div className="conquer-tab-leaderboard">
      <img src={titleTag} className="title" />
      {currentData?.length > 0 ? (
        <div>
          {currentData[0] && (
            <div className="top1">
              <ConquerTabTopper
                user={currentData[0]}
                isToday={isSliderOn === false}
                calculateEstRewards={calculateEstRewards}
              />
            </div>
          )}

          <div
            className="restWinners"
            style={{ overflowY: !seeMore ? "auto" : "" }}
          >
            {currentData?.slice(1, seeMore ? 10 : 20).map((user, index) => (
              <ConquerVictoryLeaderboardItems
                user={user}
                rewards={[]}
                key={index}
                index={index + 2}
                showEst={true}
                isToday={isSliderOn === false}
                calculateEstRewards={calculateEstRewards}
              />
            ))}
          </div>
          {currentData?.length > 10 && (
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
            height: "100%",
          }}
        >
          No Data Found
        </div>
      )}
    </div>
  );
};

export default ConquererLeaderboard;
