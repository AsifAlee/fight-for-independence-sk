import React, { useState } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/card/card-popup-bg.png";
import congTag from "../assets/popup/congratulation.png";
import wishCard from "../assets/card/Card1.png";
import { baseUrl } from "../utils/api";
import User from "../components/User";

const SendCardPopup = ({ popUpHandler, title }) => {
  const [cardRecvStatus, setCardRecvStatus] = useState("");
  const [radioSelected, setIsRadioSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [foundUsers, setFoundUsers] = useState([]);

  const searchUser = () => {
    setIsRadioSelected(null);
    setCardRecvStatus("");
    fetch(
      `${baseUrl}meShow/entrance?parameter=%7B%22FuncTag%22:10002008,%22fuzzyString%22:%22${inputValue}%22,pageCount:10,%22pageNum%22:%221%22%7D`
    )
      .then((res) => res.json())
      .then((res) => {
        setFoundUsers(res?.roomList);
        if (!res.roomList.length) {
          setCardRecvStatus("No User Found!");
        }
      });
  };
  return (
    <PopUp
      bg={bg}
      title={title}
      popUpHandler={popUpHandler}
      isSendCard={true}
      isOverflow={true}
    >
      <div className="send-card-popup">
        <div className="wish-card">
          <img src={wishCard} className="card" />
        </div>
        <div className="search-talent">
          <input
            className="input-id"
            placeholder="Search ID"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button className="search-btn" onClick={searchUser} />
        </div>
        <div className="found-users">
          {foundUsers?.length && foundUsers.map((user) => <User user={user} />)}
        </div>
        <p className="eligibility-text">{cardRecvStatus}</p>
      </div>
    </PopUp>
  );
};

export default SendCardPopup;
