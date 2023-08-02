import React, { useContext } from "react";
import bg from "../assets/event-gifting/rewards-bg.png";
import PopUp from "../components/PopUp";
import title from "../assets/popup/history.png";
import "../styles/popup.scss";
import { AppContext } from "../AppContext";
import RewardsHistoryItem from "../components/RewardsHistoryItem";

const RewardHistoryPopup = ({ popUpHandler }) => {
  const { soldiersRecords } = useContext(AppContext);
  return (
    <PopUp
      bg={bg}
      popUpHandler={popUpHandler}
      isRewardHist={true}
      title={title}
    >
      <div style={{}} className="reward-hist-popup">
        <div className="rewards-hist-title">
          <span>Time</span>
          <span>Rewards</span>
        </div>
        {soldiersRecords?.map((item) => {
          return (
            <RewardsHistoryItem
              time={item?.time.split("T")[0]}
              rewards={item?.rewardDTOList}
            />
          );
        })}
      </div>
    </PopUp>
  );
};
export default RewardHistoryPopup;
