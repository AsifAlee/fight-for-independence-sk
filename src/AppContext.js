import React, { createContext, useEffect, useState } from "react";
import { baseUrl } from "./utils/api";
const AppContext = createContext("");

const EventProvider = ({ children }) => {
  const [info, setInfo] = useState({
    dayIndex: 0,
    gamePoints: 0,
  });
  const [user, setUser] = useState({
    userId: 0,
    token: "",
  });
  const [selectedLng, setSelectedLng] = useState(1);
  const changeLanguage = (index) => {
    setSelectedLng(index);
  };
  const getInfo = () => {
    fetch(
      `${baseUrl}api/activity/fightForIndependence/getUserEventInfo?userId=0`
    )
      .then((response) => response.json())
      .then((response) => {
        setInfo({
          ...info,
          dayIndex: response?.dayIndex,
          gamePoints: response?.gamePoints,
        });
      })
      .catch((error) => {
        console.erro(error);
      });
  };
  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          uid: userInfo?.userId > 0 ? userInfo?.userId : 0,
          token: userInfo?.token != "" ? userInfo?.token : null,
        });
      });
    } catch (_error) {
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <AppContext.Provider value={{ selectedLng, changeLanguage, info, getInfo }}>
      {children}
    </AppContext.Provider>
  );
};

export { EventProvider, AppContext };
