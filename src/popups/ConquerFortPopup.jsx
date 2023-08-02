import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/popup/mulitiple-popup-bg.png";
import { AppContext } from "../AppContext";
const ConquerFortPopup = ({
  popUpHandler,
  errorCode,
  rewards,
  rewardsContent,
  soldiers,
  title,
  currentLevel,
  errMsg,
}) => {
  let newRewards = rewardsContent?.includes("+")
    ? rewardsContent.split("+")
    : rewardsContent;
  const { info } = useContext(AppContext);

  return (
    <PopUp bg={bg} title={title} popUpHandler={popUpHandler} isCollSold={true}>
      {errorCode === 0 && currentLevel === 1 ? (
        <div className="collect-sold-popup">
          You have successfully defeated enemies and have cleared level 1. Keep
          on playing, you are just 2 levels away from achieving freedom. For
          this you have won 20,000 (beans). You're almost there.
        </div>
      ) : errorCode === 0 && currentLevel === 2 ? (
        <div className="collect-sold-popup">
          You have successfully cleared level 2. Keep on playing, you are just 1
          level away from achieving freedom. For this you have won 50,000
          (beans). You're almost there.
        </div>
      ) : errorCode === 0 && currentLevel === 3 ? (
        <div className="collect-sold-popup">
          You have successfully defeated enemies and won this VICTORY FORT. As a
          result, you have won 110,000 beans. Keep Playing to earn more!
        </div>
      ) : errorCode === 10000008 ? (
        <div className="collect-sold-popup">
          Your attempt to free up a level of the fort was unsuccessful! Keep
          trying! Sadly {info?.dailyCurrentSoldier} soldiers are lost in this
          process.
        </div>
      ) : errorCode === 30001007 ? (
        <div className="collect-sold-popup">{errMsg}</div>
      ) : (
        <></>
      )}
    </PopUp>
  );
};

export default ConquerFortPopup;
