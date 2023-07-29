import React, { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/card/card-popup-bg.png";
import congTag from "../assets/popup/congratulation.png";
import wishCard from "../assets/card/Card1.png";
import { baseUrl, testToken, testUserId } from "../utils/api";
import User from "../components/User";
import RadioSelect from "../components/RadioSelect";
import { AppContext } from "../AppContext";
import RecvCardPopup from "./RecieveCardPopup";
import tryAgain from "../assets/popup/try-again.png";
import wishSent from "../assets/popup/wish-sent.png";

const SendCardPopup = ({ popUpHandler, title }) => {
  const { getInfo, info } = useContext(AppContext);
  const [cardRecvStatus, setCardRecvStatus] = useState("");
  const [radioSelected, setIsRadioSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [foundUsers, setFoundUsers] = useState([]);
  const [recvCardPopup, setRecvCardPopup] = useState(false);
  const [isCardSendSuccess, setIsCardSendSuccess] = useState(false);

  const closeRecvCardPopup = () => {
    setRecvCardPopup(false);
  };

  const handleRadioCheck = (index) => {
    setIsRadioSelected(index);
  };

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
  const sendCard = () => {
    // setIsAccBtnDisabled(true);
    fetch(
      `${baseUrl}api/activity/fightForIndependence/sendCard?receiveId=${foundUsers[radioSelected]?.userId}`,
      {
        method: "POST",
        headers: {
          userId: testUserId,
          token: testToken,
          sendId: testUserId,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setRecvCardPopup(true);

        if (res.data === true) {
          setCardRecvStatus(res.msg);
          setIsCardSendSuccess(true);
        } else if (res.errorCode === 11000000) {
          setCardRecvStatus("NOT ELIGIBLE FOR THIS CARD");
          setIsCardSendSuccess(false);
        } else {
          setCardRecvStatus(res.msg);
          setIsCardSendSuccess(false);
        }
        // setIsAccBtnDisabled(false);

        // setInputValue("");
        setFoundUsers([]);

        getInfo();
      })
      .catch((error) => {
        // setTimeout(() => {
        //   setIsAccBtnDisabled(false);
        // }, 5000);
        // setIsAccBtnDisabled(false);
        console.error(" card send  error:", error);
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
          {foundUsers?.length
            ? foundUsers?.map((user, index) => (
                <RadioSelect
                  handleRadioCheck={handleRadioCheck}
                  index={index}
                  isSelected={radioSelected}
                >
                  <User
                    user={user}
                    sendCard={sendCard}
                    isDisabled={radioSelected === null}
                  />
                </RadioSelect>
              ))
            : ""}
        </div>
        {/* <p className="eligibility-text">{cardRecvStatus}</p> */}
      </div>
      {recvCardPopup && (
        <RecvCardPopup
          popUpHandler={closeRecvCardPopup}
          title={isCardSendSuccess ? wishSent : tryAgain}
          isCardsFinished={info?.ownedCards > 0 ? false : true}
        />
      )}
    </PopUp>
  );
};

export default SendCardPopup;
