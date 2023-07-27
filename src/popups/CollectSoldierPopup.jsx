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
}) => {
  let newRewards = rewardsContent?.includes("+")
    ? rewardsContent.split("+")
    : rewardsContent;
  console.log("the rewards:", newRewards);
  return (
    <PopUp bg={bg} title={congTag} popUpHandler={popUpHandler}>
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
        TIP: Collect maximum soldiers to give FREEDOM to the VICTORY FORT. Extra
        BEANS reward is waiting for you!
      </div>
    </PopUp>
  );
};

export default CollectSoldierPopup;
