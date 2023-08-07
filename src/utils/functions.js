import { baseUrl } from "./api";
import card1 from "../assets/card/card-1.gif";
import card2 from "../assets/card/card-2.gif";
import card3 from "../assets/card/card-3.gif";

export function getRewardsImage(rewDesc) {
  var rewImg;

  if (rewDesc?.includes("Raging Bull Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("Spaceship entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("Brave Heart frame")) {
    rewImg = baseUrl + "/streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("HERO")) {
    rewImg = baseUrl + "/streamkar/rewards/heroEntrance.png";
  } else if (rewDesc?.includes("beansbag")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Ballpark Audio Theme")) {
    rewImg = baseUrl + "/streamkar/rewards/ballParkTheme.png";
  } else if (rewDesc?.includes("Water Splash Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/WaterSplashFrame.png";
  } else if (rewDesc?.includes("Royal Carriage")) {
    rewImg = baseUrl + "/streamkar/rewards/royal.png";
  } else if (rewDesc?.includes("Beans")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("Moon Knight Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/moonKnightFrame.png";
  } else if (rewDesc?.includes("Moon Knight room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/moonKnightSkin.png";
  } else if (rewDesc?.includes("Sailor Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/sailorFrame.png";
  } else if (rewDesc?.includes("Sailor room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/sailorRoomSkin.png";
  } else if (rewDesc?.includes("Victorious room skin (NEW)")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousRoomSkin.png";
  } else if (rewDesc?.includes("Victorious room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousRoomSkin.png";
  } else if (rewDesc?.includes("Battle Room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/battleSkin.png";
  } else if (rewDesc?.includes("Pirate Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/pirateFrame.png";
  } else if (rewDesc?.includes("Pirate room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/pirateRoomSkin.png";
  } else if (rewDesc?.includes("Combat room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/combatSkin.png";
  } else if (rewDesc?.includes("Sea Wolf room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/seaWolfRoomSkin.png";
  } else if (rewDesc?.includes("Sea Wolf frame")) {
    rewImg = baseUrl + "/streamkar/rewards/seawolfFrame.png";
  } else if (rewDesc?.includes("Desert Knight room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/desertNight.png";
  } else if (rewDesc?.includes("Desert Knight frame")) {
    rewImg = baseUrl + "/streamkar/rewards/desertnightFrame.png";
  } else if (rewDesc?.includes("Blazing Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/blazingFrame.png";
  } else if (rewDesc?.includes("Maven Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/mavenFrame.png";
  } else if (rewDesc?.includes("Samurai Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/skSamuraiFrame.png";
  } else if (rewDesc?.includes("Night Shadow room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/nightShadow.png";
  } else if (rewDesc?.includes("Neon lights room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/neonRoomSkin.png";
  } else if (rewDesc?.includes("Mysterio Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/mysterioFrame.png";
  } else if (rewDesc?.includes("Victorious frame")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousFrame.png";
  } else if (rewDesc?.includes("Victorious frame(NEW)")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousFrame.png";
  } else if (rewDesc?.includes("Victorious Frame(New)")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousFrame.png";
  } else if (rewDesc?.includes("Victorious Room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/victoriousRoomSkin.png";
  } else if (rewDesc?.includes("Combat room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/combatSkin.png";
  } else if (rewDesc?.includes("Victory slide")) {
    rewImg = baseUrl + "/streamkar/rewards/victorySlide.png";
  } else if (rewDesc?.includes("Phantom entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phantom.png";
  } else if (rewDesc?.includes("Phoenix entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/phoenix.png";
  } else if (rewDesc?.includes("Charmed Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/charmedFrame.png";
  } else if (rewDesc?.includes("gems")) {
    rewImg = baseUrl + "/streamkar/rewards/gems.png";
  } else if (rewDesc?.includes("SVIP")) {
    rewImg = baseUrl + "/streamkar/rewards/svip.png";
  } else if (rewDesc?.includes("SVIP")) {
    rewImg = baseUrl + "/streamkar/rewards/svip.png";
  } else if (rewDesc?.includes("Bumblebee entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/bumblebee.png";
  } else if (rewDesc?.includes("Game Master room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterRoomSkin.png";
  } else if (rewDesc?.includes("Game Battle frame (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("Game Master frame (New)")) {
    rewImg = baseUrl + "/streamkar/rewards/gameMasterFarme.png";
  } else if (rewDesc?.includes("VIP")) {
    rewImg = baseUrl + "/streamkar/rewards/vip.png";
  } else if (rewDesc?.includes("Kingpin entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/kingspin.png";
  } else if (rewDesc?.includes("FireBrand room skin")) {
    rewImg = baseUrl + "/streamkar/rewards/fireBrandAudioTheme.png";
  } else if (rewDesc?.includes("10 XP")) {
    rewImg = baseUrl + "/streamkar/rewards/xpPoint.png";
  } else if (rewDesc?.includes("XP")) {
    rewImg = baseUrl + "/streamkar/rewards/xpPoint.png";
  } else if (rewDesc?.includes("Enlightening Room Skin")) {
    rewImg = baseUrl + "/streamkar/rewards/enlighteningRoom.png";
  } else if (rewDesc?.includes("KING Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/kingshipProfileFrame.png";
  } else if (rewDesc?.includes("King Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/kingshipProfileFrame.png";
  } else if (rewDesc?.includes("soldiers")) {
    rewImg = baseUrl + "/streamkar/rewards/soliderIcon.png";
  } else if (rewDesc?.includes("Soldiers")) {
    rewImg = baseUrl + "/streamkar/rewards/soliderIcon.png";
  } else if (rewDesc?.includes("Tiger entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/tiger.png";
  } else if (rewDesc?.includes("Audio broadcast theme DOYEN")) {
    rewImg = baseUrl + "/streamkar/rewards/doyenRoomskin.png";
  } else if (rewDesc?.includes("Radiance Profile Frame")) {
    rewImg = baseUrl + "/streamkar/rewards/radianceGold.png";
  } else if (rewDesc?.includes("roomSKIN")) {
    rewImg = baseUrl + "/streamkar/rewards/thunderRoomskin.png";
  } else if (rewDesc?.includes("royalProfileFrame")) {
    rewImg = baseUrl + "/streamkar/rewards/royalProfileFrame.png";
  } else if (rewDesc?.includes("celebrationRoomskin")) {
    rewImg = baseUrl + "/streamkar/rewards/celebrationRoomskin.png";
  } else if (rewDesc?.includes("royaltiRoom")) {
    rewImg = baseUrl + "/streamkar/rewards/royaltiRoom.png";
  } else if (rewDesc?.includes("ace")) {
    rewImg = baseUrl + "/streamkar/rewards/ace.png";
  } else if (rewDesc?.includes("Victory Slide")) {
    rewImg = baseUrl + "/streamkar/rewards/victorySlide.png";
  } else if (rewDesc?.includes("Phantom")) {
    rewImg = baseUrl + "/streamkar/rewards/phantom.png";
  } else if (rewDesc?.includes("Hummer Premium")) {
    rewImg = baseUrl + "/streamkar/rewards/hummer.png";
  } else if (rewDesc?.includes("Phantom")) {
    rewImg = baseUrl + "/streamkar/rewards/hummer.png";
  } else if (rewDesc?.includes("fireBrandAudioTheme")) {
    rewImg = baseUrl + "/streamkar/rewards/fireBrandAudioTheme.png";
  } else {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}

export const getLevelImage = (level, isTalent) => {
  // const talentLevelUrl =
  //   "https://www.streamkarlive.live/streamkar/common/img/tlv";
  // const userLevelUrl =
  //   "https://www.streamkarlive.live/streamkar/common/img/ulv";
  const talentLevelUrl = `${baseUrl}/streamkar/common/img/tlv`;
  const userLevelUrl = `${baseUrl}/streamkar/common/img/ulv`;
  if (isTalent) {
    return `${talentLevelUrl}/${level}.png`;
  } else {
    return `${userLevelUrl}/${level}.png`;
  }
};

export const beansPot = [
  {
    rank: 1,
    percent: 40,
  },
  {
    rank: 2,
    percent: 30,
  },
  {
    rank: 3,
    percent: 15,
  },
  {
    rank: 4,
    percent: 10,
  },
  {
    rank: 5,
    percent: 5,
  },
];
export const gotoProfile = (id) => {
  window.location.href = `http://www.kktv1.com/m/?roomid=${id}`;
};

export const formatData = (originalArray) => {
  const newArray = [];
  for (let i = 0; i < originalArray?.length; i += 3) {
    newArray?.push(originalArray?.slice(i, i + 3));
  }
  return newArray;
};
export function getRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}

export const wishes = [
  {
    id: 1,
    wish: "May this spirit of freedom lead us all to success and glory in life.",
    bg: card3,
  },
  {
    id: 2,
    wish: "Saluting the entire nation, Happy Independence day 2023!",
    bg: card1,
    isPortrait: true,
  },
  {
    id: 3,
    wish: "Freedom is the way God intended us; Lets celebrate Freedom! ",
    bg: card1,
    isPortrait: true,
  },
  {
    id: 4,
    wish: "Freedom is the most precious thing in every humans life.",
    bg: card1,
    isPortrait: true,
  },
  {
    id: 5,
    wish: "Truly, the best way to celebrate your country's independence is by being a patriotic citizen.",
    bg: card2,
  },
  {
    id: 6,
    wish: "May you enjoy this freedom of speech & freedom of choice for the rest of your Life.",
    bg: card2,
  },
  {
    id: 7,
    wish: "May the glory of Independence Day be with us forever.",
    bg: card3,
  },
  {
    id: 8,
    wish: "May your Independence Day day be filled with patriotic spirit.",
    bg: card3,
  },
  {
    id: 9,
    wish: "Freedom in mind, Faith in our heart, Memories in our souls. Let’s salute the Nation on Independence Day!",
    bg: card2,
  },
  {
    id: 10,
    wish: "Together we can win the world, together we can conquer our fear and together we can be a happy place.",
    bg: card2,
  },
];
