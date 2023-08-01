import React from "react";
import PopUp from "../components/PopUp";
import "../styles/popup.scss";
import bg from "../assets/event-gifting/rewards-bg.png";
const ConquerFortInfo = ({ popupHandler }) => {
  return (
    <div>
      <PopUp bg={bg} popUpHandler={popupHandler} isCollSold={true}>
        <table className="info-table">
          <thead>
            <th>Level</th>
            <th>Extra Soldiers Required</th>
          </thead>
          <tr>
            <td>Level 1</td>
            <td>5000 beans</td>
          </tr>
          <tr>
            <td>Level 3</td>
            <td>50000 beans</td>
          </tr>
          <tr>
            <td>Level 3</td>
            <td>110,000 beans</td>
          </tr>
        </table>
      </PopUp>
    </div>
  );
};

export default ConquerFortInfo;
