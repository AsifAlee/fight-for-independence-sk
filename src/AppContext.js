import React, { createContext, useEffect, useState } from "react";
import { baseUrl, testUserId } from "./utils/api";
const AppContext = createContext("");

const EventProvider = ({ children }) => {
  const [info, setInfo] = useState({
    dayIndex: 0,
    gamePoints: 0,
    dailyCurrentSoldier: 0,
    dailyTotalSoldier: 0,
    fortState: 0,
    teamId: 0,
    ownedCards: 0,
    sentCards: 0,
    eventGftingUserPot: 0,
    eventGftingTalentPot: 0,
    conquerFortTodayPot: 0,
    conquerFortYestPot: 0,
    wishId: 0,
  });
  const [user, setUser] = useState({
    userId: 0,
    token: "",
  });
  const [marqueeData, setMarqueeData] = useState({
    collectSoldier: [],
    conquerFort: [],
  });
  const [soldiersRecords, setSoldierRecord] = useState([]);
  const [leaderboardsData, setLeaderboardData] = useState({
    eventgiftingUserOverall: [],
    eventgiftingTalentOverall: [],
    eventGiftingDailyToday: [],
    eventGiftingDailyYest: [],
    userfanFollowerSendCard: [],
    talentfanFollowerSendCard: [],
    warriorsToday: [],
    warriorsYest: [],
    conquerersToday: [],
    conquerersYest: [],
    championsToday: [],
    championsYest: [],
    teamTotalSoldiersInfoList: [],
    collectSoldiers: [],
    fanFollowerUser: [],
    fanFollowerTalent: [],
  });
  const [selectedLng, setSelectedLng] = useState(1);
  const changeLanguage = (index) => {
    setSelectedLng(index);
  };
  const getInfo = () => {
    fetch(
      `${baseUrl}api/activity/fightForIndependence/getUserEventInfo?userId=${user.userId}`
    )
      .then((response) => response.json())
      .then((response) => {
        setInfo({
          ...info,
          dayIndex: response?.data?.dayIndex,
          gamePoints: response?.data?.gamePoints,
          dailyCurrentSoldier: response?.data?.dailyCurrentSoldier,
          dailyTotalSoldier: response?.data?.dailyTotalSoldier,
          fortState: response?.data?.fortState,
          teamId: response?.data?.teamId,
          teamTotalSoldiersInfoList: response?.data?.teamTotalSoldiersInfoList,
          ownedCards: response?.data?.ownedCards,
          sentCards: response?.data?.sendCards,
          eventGftingUserPot: response?.data?.userBeansPot,
          eventGftingTalentPot: response?.data?.talentBeansPot,
          conquerFortTodayPot: response?.data?.teamDailybeansPotList?.find(
            (item) => item?.dayIndex === response?.data?.dayIndex
          )?.potValue,
          conquerFortYestPot: response?.data?.teamDailybeansPotList?.find(
            (item) => item?.dayIndex === response?.data?.dayIndex - 1
          )?.potValue,
          wishId: response?.data?.wishId,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getUserOverallEventGifting = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=11&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          eventgiftingUserOverall: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getTalentOverallEventGifting = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=12&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          eventgiftingTalentOverall: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getEventGiftingDailyToday = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          eventGiftingDailyToday: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getEventGiftingDailyYest = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${
        info?.dayIndex - 1
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          eventGiftingDailyYest: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUserSendCardFanFollower = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          userfanFollowerSendCard: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getTalentSendCardFanFollower = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=13&pageNum=1&pageSize=20&dayIndex=0`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          talentfanFollowerSendCard: response?.data?.list,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getWarriorsToday = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          warriorsToday: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getWarriorsYest = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${
        info?.dayIndex - 1
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          warriorsYest: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getConquerersToday = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=17&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          conquerersToday: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getConquerersYest = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=17&pageNum=1&pageSize=20&dayIndex=${
        info?.dayIndex - 1
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          conquerersYest: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getChampionsToday = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=18&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          championsToday: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getChampionsYest = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=18&pageNum=1&pageSize=20&dayIndex=${
        info?.dayIndex - 1
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          championsYest: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFanfollowerUser = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          fanFollowerUser: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFanfollowerTalent = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230810_fightForIndependence&rankIndex=15&pageNum=1&pageSize=20&followUserId=${user?.userId}&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          fanFollowerTalent: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCollectSoldiers = () => {
    fetch(
      `${baseUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20230810_fightForIndependence&rankIndex=2&pageNum=1&pageSize=20&dayIndex=${info?.dayIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        setLeaderboardData((prevData) => ({
          ...prevData,
          collectSoldiers: response?.data?.list || [],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getSoldierRecords = () => {
    fetch(
      `${baseUrl}api/activity/fightForIndependence/getRecord?userId=596492373&pageNum=1&pageSize=20&type=1`
    )
      .then((response) => response.json())
      .then((response) => {
        setSoldierRecord(response?.data?.list);
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  const getMarqueeData = (rankIndex) => {
    fetch(
      `${baseUrl}api/activity/eidF/getWinnerRankInfo?&pageNum=1&pageSize=20&eventDesc=20230810_fightForIndependence&rankIndex=${rankIndex}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (rankIndex === 1) {
          setMarqueeData((prevData) => ({
            ...prevData,
            collectSoldier: response?.data?.list,
          }));
        } else if (rankIndex === 3) {
          setMarqueeData((prevData) => ({
            ...prevData,
            conquerFort: response?.data?.list,
          }));
        }
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setUser({
          userId: userInfo?.userId > 0 ? userInfo?.userId : 0,
          token: userInfo?.token != "" ? userInfo?.token : null,
        });
      });
    } catch (_error) {
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    getInfo();
    getTalentOverallEventGifting();
    getUserOverallEventGifting();
    getUserSendCardFanFollower();
    getTalentSendCardFanFollower();
    getWarriorsToday();
    getWarriorsYest();
    getChampionsToday();
    getChampionsYest();
    getChampionsToday();
    getConquerersYest();
    getEventGiftingDailyToday();
    getEventGiftingDailyYest();
    getConquerersToday();
    getCollectSoldiers();
    getFanfollowerUser();
    getFanfollowerTalent();
    getSoldierRecords();
    getMarqueeData(1);
    getMarqueeData(3);
  }, [info?.dayIndex]);

  useEffect(() => {
    if (user.userId) {
      getInfo();
    }
  }, [user.userId]);

  return (
    <AppContext.Provider
      value={{
        selectedLng,
        changeLanguage,
        info,
        getInfo,
        leaderboardsData,
        getTalentOverallEventGifting,
        getUserOverallEventGifting,
        getCollectSoldiers,
        getFanfollowerTalent,
        getFanfollowerUser,
        soldiersRecords,
        user,
        marqueeData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { EventProvider, AppContext };
