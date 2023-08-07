import React from "react";
import PopUp from "../components/PopUp";
import "../styles/popup.scss";
import bg from "../assets/event-gifting/rewards-bg.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";
const ConquerFortInfo = ({ popupHandler }) => {
  return (
    <div>
      <PopUp bg={bg} popUpHandler={popupHandler} isCollSold={true}>
        <table className="info-table">
          <thead>
            <th>Level</th>
            <th>Soldiers required to win levels</th>
            <th>Rewards for unlocking</th>
          </thead>

          <tr>
            <td>Lvl 1</td>
            <td>5,000</td>
            <td>
              <div className="d-flex j-center al-center">
                <span>20,000</span>
                <img src={beanIcon} style={{ width: "4vw" }} />
              </div>
            </td>
          </tr>
          <tr>
            <td>Lvl 2</td>
            <td>15,000</td>
            <td>
              <div className="d-flex j-center al-center">
                <span>50,000</span>
                <img src={beanIcon} style={{ width: "4vw" }} />
              </div>
            </td>
          </tr>
          <tr>
            <td>Lvl 3</td>
            <td>40,000</td>
            <td>
              <div className="d-flex j-center al-center">
                <span>130,000</span>
                <img src={beanIcon} style={{ width: "4vw" }} />
              </div>
            </td>
          </tr>
        </table>
      </PopUp>
    </div>
  );
};

export default ConquerFortInfo;
