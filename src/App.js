import { useContext, useState } from "react";
import "./App.scss";
import CollectSoldierTab from "./pages/CollectSoldierTab";
import EventGifting from "./pages/EventGifting";
import ConquerVictoryFortTab from "./pages/ConquerVictoryFortTab";
import FanFollwers from "./pages/FanFollwers";
import Guide from "./popups/Guide";
import LanguageDropdown from "./components/LanguageDropdown";
import { AppContext } from "./AppContext";

function App() {
  const { selectedLng, changeLanguage } = useContext(AppContext);
  const [mainTabs, setMainTabs] = useState({
    collectSoldier: true,
    conquerFort: false,
    fanFollower: false,
    eventGifting: false,
  });
  const [showGuide, setShowGuide] = useState(false);
  const toggleGuide = () => {
    setShowGuide((prevState) => !prevState);
  };
  const switchMainTabs = (name) => {
    switch (name) {
      case "collect-soldiers":
        setMainTabs(() => ({
          conquerFort: false,
          fanFollower: false,
          eventGifting: false,
          collectSoldier: true,
        }));
        break;
      case "conquer-fort":
        setMainTabs(() => ({
          conquerFort: true,
          fanFollower: false,
          eventGifting: false,
          collectSoldier: false,
        }));
        break;

      case "fan-followers":
        setMainTabs(() => ({
          conquerFort: false,
          fanFollower: true,
          eventGifting: false,
          collectSoldier: false,
        }));
        break;

      case "event-gifting":
        setMainTabs(() => ({
          conquerFort: false,
          fanFollower: false,
          eventGifting: true,
          collectSoldier: false,
        }));
        break;
    }
  };
  return (
    <div className="App">
      <div className="header">
        <button className="guide-btn" onClick={toggleGuide} />
        <LanguageDropdown
          selectedLanguage={selectedLng}
          changeLanguage={changeLanguage}
        />
      </div>
      <div className="main-tabs">
        <button
          className={`collect-soldiers ${
            !mainTabs.collectSoldier && "blackNWhite"
          }`}
          name="collect-soldiers"
          onClick={() => switchMainTabs("collect-soldiers")}
        />
        <button
          className={`conquer-fort ${!mainTabs.conquerFort && "blackNWhite"}`}
          name="conquer-fort"
          onClick={() => switchMainTabs("conquer-fort")}
        />
        <button
          className={`fan-followers  ${!mainTabs.fanFollower && "blackNWhite"}`}
          name="fan-followers"
          onClick={() => switchMainTabs("fan-followers")}
        />
        <button
          className={`event-gifting  ${
            !mainTabs.eventGifting && "blackNWhite"
          }`}
          name="event-gifting"
          onClick={() => switchMainTabs("event-gifting")}
        />
      </div>
      {mainTabs.collectSoldier ? (
        <CollectSoldierTab />
      ) : mainTabs.eventGifting ? (
        <EventGifting />
      ) : mainTabs.conquerFort ? (
        <ConquerVictoryFortTab />
      ) : (
        <FanFollwers />
      )}
      {showGuide && <Guide toggleGuide={toggleGuide} />}
    </div>
  );
}

export default App;
