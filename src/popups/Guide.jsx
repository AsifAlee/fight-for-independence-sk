import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import titleBanner from "../assets/popup/guide.png";
import bg from "../assets/popup/guide-bg.png";
import howToPlay from "../assets/popup/howtoplay.png";
import soldCol from "../assets/popup/sold-tag.png";
import conquerfort from "../assets/popup/conquer-fort.png";
import fanfollower from "../assets/popup/fan-follower.png";
import { AppContext } from "../AppContext";

const Guide = ({ toggleGuide }) => {
  const { selectedLng } = useContext(AppContext);
  return (
    <PopUp bg={bg} title={titleBanner} popUpHandler={toggleGuide}>
      <div className="guide-popup">
        {selectedLng === 0 ? (
          <div className="guide-content">
            <img src={howToPlay} className="howtoplay" />
            <div className="soldier-collection">
              <img src={soldCol} className="tag" />

              <div className="list-item">
                <ol>
                  <li>
                    For every 25,000 Beans spent on event gifts, you will get a
                    chance.
                  </li>
                  <li>
                    You have to use the gun and destroy things on the battle
                    ground. After successfully destroying, you can receive
                    rewards. Along with the rewards, you will also be able to
                    collect Soldier
                  </li>
                  <li>
                    On the webpage, you can also check your rewards history..
                  </li>
                  <li>You can play up to 99 times at once.</li>
                </ol>
              </div>
            </div>
            <div className="conquer-fort">
              <img src={conquerfort} className="tag" />

              <div className="list-item">
                <ol>
                  <li>
                    Soldiers collected from the Soldier Collection game can be
                    used to conquer up the part of the Fort.
                  </li>
                  <li>There will be three levels to free up the Fort.</li>
                  <li>
                    Level 1, Level 2, and Level 3 need to be unlocked using the
                    Soldiers. The levels of the fort need to be freed in
                    chronological order.
                  </li>
                  <li>
                    To unlock each level, a specific number of Soldiers are
                    required.{" "}
                  </li>
                  <li>
                    Once the level is successfully accomplished and unlocked,
                    the number of Soldiers in your account will be reduced.{" "}
                  </li>
                  <li>
                    If you try to conquer the level without having the required
                    Soldiers, the Soldiers in your account will be lost, and you
                    will have to start from Zero. Please note, only the soldier
                    count will be reduced. Levels will not be reset.{" "}
                  </li>
                  <li>
                    After unlocking each level, you will receive beans reward.
                  </li>

                  <table>
                    <thead>
                      <th>Level</th>
                      <th>Soldiers required to win levels</th>
                      <th>Rewards for unlocking</th>
                    </thead>

                    <tr>
                      <td>1</td>
                      <td>5000</td>
                      <td>20,000 beans</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>5000</td>
                      <td>20,000 beans</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>5000</td>
                      <td>20,000 beans</td>
                    </tr>
                  </table>
                </ol>
              </div>
            </div>

            <div className="fan-follower">
              <img src={fanfollower} className="tag" />

              <div className="list-item">
                <p>
                  You will get a chance to send Independence Day wishes card to
                  the talents.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Step 1:</span> You need
                  to open FAN FOLLOWERS TAB on the web page to send the wishes
                  to your favourite talent.{" "}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Step 2:</span> A card
                  will appear with Independence Day wishes when you click on the
                  SEND INDEPENDENCE DAY WISHES button.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Step 3:</span>
                  Below the card, there will be a search bar. You can either
                  search with a talent ID or username; once the talent ID
                  appears in the search results, you can select it and tap on
                  send. (You cannot send the card to yourself.)
                </p>
              </div>
              <div className="list-item">
                <ol>
                  <li>
                    The upper limit for sending free cards is 5 per day. After
                    that, you need to pay for the card.
                  </li>
                  <li>
                    If you want to send more cards, you will have to spend 1000
                    Beans to get 5 cards.
                  </li>
                  <li>
                    The higher number of cards you send and the higher number of
                    cards received by the talents will help you in ranking the
                    leaderboard.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        ) : (
          <div className="guide-content">
            <img src={howToPlay} className="howtoplay" />
            <div className="soldier-collection">
              <img src={soldCol} className="tag" />

              <div className="list-item">
                <ol>
                  <li>
                    Harr 25,000 Beans event gifts par spend karne pe aapko mauka
                    milenga.
                  </li>
                  <li>
                    Gun ka istemal karke, cheezon ko destroy karna hoga, jo
                    battle ground pe maujud honge.
                  </li>
                  <li>Webpage pe aap rewards history bhi check kar paoge.</li>
                  <li>Aap 99 chances tak khel sakte ho. .</li>
                </ol>
              </div>
            </div>
            <div className="conquer-fort">
              <img src={conquerfort} className="tag" />

              <div className="list-item">
                <ol>
                  <li>
                    Soldier Collection game khel ke jo Soldier collect kiye hai
                    unka istemal hoga fort ke part ko conquer karne mein.
                  </li>
                  <li>3 levels honge Fort ko free karne ke liye..</li>
                  <li>
                    Level 1, Level 2, Level 3 inn teen levels ko unlock karna
                    hoga, collect kiye hue Soldiers ki help se. Fort ke levels
                    ko chronological order mein free karna hoga.
                  </li>
                  <li>
                    Harr level ko unlock karne ke liye, ek specific number ke
                    Soldiers required hai.
                  </li>
                  <li>
                    Ek time level successfully accomplished aur unlocked hua toh
                    aapke account mein jo number of Soldiers hai woh kam ho
                    jayege.
                  </li>
                  <li>
                    Aapne level ko conquer karne ki koshish ki, specific number
                    of Soldiers ke bina, Soldiers lost honge aapke account se
                    aur aapko Zero se start karna hoga.
                  </li>
                  <li>
                    Harr level ko unlock karne ke baad, aap beans reward receive
                    karoge special accessories ke saath.
                  </li>

                  <table>
                    <thead>
                      <th>Level</th>
                      <th>Soldiers required to win levels</th>
                      <th>Rewards for unlocking</th>
                    </thead>

                    <tr>
                      <td>1</td>
                      <td>5000</td>
                      <td>20,000 beans</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>5000</td>
                      <td>20,000 beans</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>5000</td>
                      <td>20,000 beans</td>
                    </tr>
                  </table>
                </ol>
              </div>
            </div>

            <div className="fan-follower">
              <img src={fanfollower} className="tag" />

              <div className="list-item">
                <p>
                  Aapko chance milenga free Independence Day wish card talent ko
                  bhejne ka.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Step 1:</span> Aapko ye
                  wishes send karne ke liye FAN FOLLOWERS tab select karna hoga.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Step 2:</span> Jab aap
                  SEND INDEPENDENCE DAY wishes button pe click karoge,
                  Independence Day wishes ke saath apko ek card dikhega
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Step 3:</span>
                  Card ke neeche search bar hoga. Aap talent ID ya username ke
                  saath search kar sakte hai; jab talent ID search results mein
                  appear ho, aap use select karke send pe tap kar de. (Aap card
                  khud ko nahi bhej sakte)
                </p>
              </div>
              <div className="list-item">
                <ol>
                  <li>
                    Aap din mein daily 5 free cards bhej sakte ho. Uske baad
                    aapko card ke liye pay karna hoga.
                  </li>
                  <li>
                    Agar aapko zyada cards bhejne hai, aapko per 5 cards 1000
                    Beans spend karne hoge.
                  </li>
                  <li>
                    Aap jitne zyada cards bhejoge aur talents jitne zyada cards
                    receive karege, uski madad se aap leaderboard pe rank kar
                    paoge.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </PopUp>
  );
};

export default Guide;
