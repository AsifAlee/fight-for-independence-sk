import React, { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/card/card-popup-bg.png";

import { baseUrl, testToken, testUserId } from "../utils/api";
import User from "../components/User";
import RadioSelect from "../components/RadioSelect";
import { AppContext } from "../AppContext";
import RecvCardPopup from "./RecieveCardPopup";
import tryAgain from "../assets/popup/try-again.png";
import wishSent from "../assets/popup/wish-sent.png";
import { wishes } from "../utils/functions";

const SendCardPopup = ({ popUpHandler, title }) => {
  const { getInfo, info, user, getFanfollowerTalent, getFanfollowerUser } =
    useContext(AppContext);
  const [cardRecvStatus, setCardRecvStatus] = useState("");
  const [radioSelected, setIsRadioSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [foundUsers, setFoundUsers] = useState([]);
  const [recvCardPopup, setRecvCardPopup] = useState(false);
  const [isCardSendSuccess, setIsCardSendSuccess] = useState(false);
  const [errCode, setErrCode] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const currentBackgroundImg = wishes.find((item) => item.id === info?.wishId);
  console.log("curr backg:", currentBackgroundImg);
  const closeRecvCardPopup = () => {
    setRecvCardPopup(false);
    if (isCardSendSuccess) {
      popUpHandler();
    }
  };

  const handleRadioCheck = (index) => {
    setIsRadioSelected(index);
  };

  const searchUser = () => {
    setIsRadioSelected(null);
    setCardRecvStatus("");
    if (inputValue === "") {
      setCardRecvStatus("Enter user name or ID");
      return;
    }
    fetch(
      `${baseUrl}meShow/entrance?parameter=%7B%22FuncTag%22:10002008,%22fuzzyString%22:%22${inputValue}%22,pageCount:10,%22pageNum%22:%221%22%7D`
    )
      .then((res) => res.json())
      .then((res) => {
        setFoundUsers(res?.roomList);
        if (!res.roomList.length) {
          setCardRecvStatus("No User Found!");
        }
        setInputValue("");
      });
  };
  const sendCard = () => {
    if (isDisabled) {
      return true;
    }
    setIsDisabled(true);
    fetch(
      `${baseUrl}api/activity/fightForIndependence/sendCard?receiveId=${foundUsers[radioSelected]?.userId}`,
      {
        method: "POST",
        headers: {
          // userId: testUserId,
          // token: testToken,
          // sendId: testUserId,
          userId: user.userId,
          token: user.token,
          sendId: user.userId,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setErrCode(res.errorCode);
        if (res.errorCode === 0 || res.errorCode === 1000) {
          debugger;
          setIsCardSendSuccess(true);
          getFanfollowerTalent();
          getFanfollowerUser();
          setRecvCardPopup(true);
          getInfo();
        } else if (res.errorCode === 11000000) {
          setCardRecvStatus("NOT ELIGIBLE FOR THIS CARD");
          setIsCardSendSuccess(false);
        } else {
          setCardRecvStatus(res.msg);
          setIsCardSendSuccess(false);
        }

        setInputValue("");
        setFoundUsers([]);
        setIsDisabled(false);
      })
      .catch((error) => {
        console.error(" card send  error:", error);
      });
  };

  return (
    <PopUp
      bg={bg}
      title={title}
      popUpHandler={popUpHandler}
      isSendCard={true}
      // isOverflow={true}
      isSendCardPopup={true}
    >
      <div className="send-card-popup">
        <div id="cardGifs"></div>
        <div
          className="wish-card"
          style={{
            backgroundImage: `url(${currentBackgroundImg?.bg})`,
            width: currentBackgroundImg?.isPortrait && "92%",
            height: currentBackgroundImg?.isPortrait && "46vw",
            left: currentBackgroundImg?.isPortrait && "3vw",
          }}
        >
          {currentBackgroundImg?.isPortrait ? (
            <div
              className={`${
                currentBackgroundImg?.isPortrait && "portrait-wish-text"
              }`}
            >
              {currentBackgroundImg?.wish}
              <p
                style={{
                  position: "absolute",
                  top: "23vw",
                  fontSize: "4vw",
                  fontFamily: "Montserrat-Bold",
                }}
              >
                Happy Independence Day 2023!
              </p>
            </div>
          ) : (
            <div
              className={
                currentBackgroundImg?.redBg
                  ? "redBg-wish-card-text"
                  : "yellowBg-wish-card-text"
              }
            >
              {currentBackgroundImg?.wish}
              <div
                style={{
                  position: "relative",
                  width: " 40vw",
                  top: "5vw",
                  left: "11vw",
                  fontFamily: "Montserrat-Bold",
                  color: currentBackgroundImg?.redBg ? "white" : "#351206",
                }}
              >
                Happy Independence Day!
              </div>
            </div>
          )}
        </div>
        <div className="search-talent">
          <input
            className="input-id"
            placeholder="Search ID"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            value={inputValue}
          />
          <button className="search-btn" onClick={searchUser} />
        </div>
        <div className="found-users">
          {foundUsers?.length > 0 &&
            foundUsers?.map((user, index) => (
              <div>
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
              </div>
            ))}
          {foundUsers?.length > 0 && (
            <button
              className="send-btn"
              onClick={sendCard}
              disabled={radioSelected === null || isDisabled}
              style={{
                filter:
                  radioSelected === null || isDisabled ? "grayScale(1)" : "",
              }}
            />
          )}
        </div>
        <p className="eligibility-text">{cardRecvStatus}</p>
      </div>
      {recvCardPopup && (
        <RecvCardPopup
          popUpHandler={closeRecvCardPopup}
          title={errCode === 0 ? wishSent : tryAgain}
          isCardsFinished={info?.ownedCards > 0 ? false : true}
        />
      )}
    </PopUp>
  );
};

export default SendCardPopup;
