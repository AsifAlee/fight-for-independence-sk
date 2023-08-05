import React, { useContext } from "react";
import bg from "../assets/event-gifting/rewards-bg.png";
import PopUp from "../components/PopUp";
import title from "../assets/popup/history.png";
import "../styles/popup.scss";
import { AppContext } from "../AppContext";
import RewardsHistoryItem from "../components/RewardsHistoryItem";

const RewardHistoryPopup = ({ popUpHandler }) => {
  let { soldiersRecords } = useContext(AppContext);

  // soldiersRecords = [];
  return (
    <PopUp
      bg={bg}
      popUpHandler={popUpHandler}
      isRewardHist={true}
      title={title}
    >
      <div style={{}} className="reward-hist-popup">
        <div className="rewards-hist-title">
          <span className="time">Time</span>
          <span className="rewards-t">Rewards</span>
        </div>
        {soldiersRecords?.length > 0 ? (
          soldiersRecords?.map((item) => {
            return (
              <RewardsHistoryItem
                time={item?.time}
                rewards={item?.rewardDTOList}
              />
            );
          })
        ) : (
          <div
            style={{
              height: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No Records Found
          </div>
        )}
      </div>
    </PopUp>
  );
};
export default RewardHistoryPopup;
