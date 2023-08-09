import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/popup/mulitiple-popup-bg.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";
import { AppContext } from "../AppContext";
import yay from "../assets/popup/yay.png";
const ConquerFortPopup = ({
  popUpHandler,
  errorCode,
  rewards,
  rewardsContent,
  soldiers,
  title,
  currentLevel,
  errMsg,
  // dyingSoldiers,
  // isNotEnoughSoldiers,
  zeroSoldiers,
}) => {
  const { info } = useContext(AppContext);

  return (
    <PopUp
      bg={bg}
      title={currentLevel === 4 ? yay : title}
      popUpHandler={popUpHandler}
      isCollSold={true}
    >
      {zeroSoldiers === true ? (
        <div className="collect-sold-popup">
          You don't have enough soldiers. Please collect soldiers first.
        </div>
      ) : errorCode === 0 && currentLevel === 2 ? (
        <div className="collect-sold-popup">
          You have successfully defeated enemies and have cleared level 1. Keep
          on playing, you are just 2 levels away from achieving freedom. For
          this you have won 20,000{" "}
          <img
            src={beanIcon}
            style={{ width: "3vw", top: "0.5vw", position: "relative" }}
          />
          . You're almost there.
        </div>
      ) : errorCode === 0 && currentLevel === 3 ? (
        <div className="collect-sold-popup">
          You have successfully cleared level 2. Keep on playing, you are just 1
          level away from achieving freedom. For this you have won 50,000
          <img
            src={beanIcon}
            style={{ width: "3vw", top: "0.5vw", position: "relative" }}
          />
          . You're almost there.
        </div>
      ) : errorCode === 0 && currentLevel === 4 ? (
        <div className="collect-sold-popup">
          You have successfully defeated enemies and won this VICTORY FORT. As a
          result, you have won 130,000{" "}
          <img
            src={beanIcon}
            style={{ width: "3vw", top: "0.5vw", position: "relative" }}
          />
          . Keep Playing to earn more!
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
