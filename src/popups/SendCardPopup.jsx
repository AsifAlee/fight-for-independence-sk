import React, { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/card/card-popup-bg.png";
import congTag from "../assets/popup/congratulation.png";
import wishCard from "../assets/card/card-1.gif";
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
  const currentBackgroundImg = wishes.find((item) => item.id === info?.wishId);
  const closeRecvCardPopup = () => {
    setRecvCardPopup(false);
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
    // setIsAccBtnDisabled(true);
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
        if (res.errorCode === 0) {
          // setCardRecvStatus(res.msg);
          setIsCardSendSuccess(true);
          getFanfollowerTalent();
          getFanfollowerUser();
          setRecvCardPopup(true);

          // popUpHandler();
        } else if (res.errorCode === 11000000) {
          setCardRecvStatus("NOT ELIGIBLE FOR THIS CARD");
          setIsCardSendSuccess(false);
        } else {
          setCardRecvStatus(res.msg);
          setIsCardSendSuccess(false);
        }
        // setIsAccBtnDisabled(false);

        setInputValue("");
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
              <p style={{ position: "absolute", top: "23vw", fontSize: "4vw" }}>
                Happy Indepencdenc Day 2023!
              </p>
            </div>
          ) : (
            <div className="wish-card-text">
              {currentBackgroundImg?.wish}
              <div
                style={{
                  position: "relative",
                  width: " 40vw",
                  top: "5vw",
                  left: "14vw",
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
              disabled={radioSelected === null}
              style={{ filter: radioSelected === null && "grayScale(1)" }}
            />
          )}
        </div>
        <p className="eligibility-text">{cardRecvStatus}</p>
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
