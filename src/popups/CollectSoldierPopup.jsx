import React from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/popup/mulitiple-popup-bg.png";
import congTag from "../assets/popup/congratulation.png";
import RewardItem from "../components/RewardItem";
const CollectSoldierPopup = ({
  popUpHandler,
  errorCode,
  rewards,
  rewardsContent,
  soldiers,
  title,
  errMsg,
}) => {
  let newRewards = rewardsContent?.includes("+")
    ? rewardsContent.split("+")
    : rewardsContent;
  return (
    <PopUp bg={bg} title={title} popUpHandler={popUpHandler} isCollSold={true}>
      {errorCode === 0 ? (
        <div className="collect-sold-popup">
          That was a perfect shot and you've won
          <div className="rewards-container">
            {rewards?.length > 1 ? (
              newRewards?.map((rew) => <RewardItem desc={rew} name={rew} />)
            ) : (
              <RewardItem desc={newRewards} name={newRewards} />
            )}
          </div>
          <br />
          <div style={{ fontSize: "3vw" }}>
            TIP: Collect maximum soldiers to give FREEDOM to the VICTORY FORT.
            Extra BEANS reward is waiting for you!
          </div>
        </div>
      ) : errorCode === 10000004 ? (
        <div className="collect-sold-popup">
          To have an opportunity to take a shot, please utilize event gifts
          valued at 25k beans. Once you have done so, you can start playing. We
          eagerly anticipate your participation and look forward to witnessing
          your triumphant liberation of the VICTORY FORT. Join us soon!
        </div>
      ) : (
        <div className="collect-sold-popup" style={{ marginTop: "14vw" }}>
          {errMsg}
        </div>
      )}
    </PopUp>
  );
};

export default CollectSoldierPopup;
