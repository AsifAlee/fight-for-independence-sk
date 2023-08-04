import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import titleBanner from "../assets/popup/guide.png";
import bg from "../assets/popup/guide-bg.png";
import howToPlay from "../assets/popup/howtoplay.png";
// import soldCol from "../assets/popup/sold-tag.png";
import soldCol from "../assets/popup/soldier-collection.png";
// import conquerfort from "../assets/popup/conquer-fort.png";
import conquerfort from "../assets/popup/Conquer-the-victory-fory.png";

import fanfollower from "../assets/popup/fan-follower.png";
import { AppContext } from "../AppContext";
import beanIcon from "../assets/event-gifting/bean-icon.png";

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
                    For every <span className="highlight"> 25,000</span> Beans
                    spent on <span className="highlight">event gifts</span>, you
                    will get a chance.
                  </li>
                  <li>
                    You have the
                    <span className="highlight"> gun</span>
                    to use and
                    <span className="highlight"> destroy</span> things on the
                    battle ground. After successfully destroying, you can
                    receive rewards. Along with the rewards, you will also be
                    able to collect Soldier
                  </li>
                  <li>
                    On the webpage, you can also check your
                    <span className="highlight"> rewards history</span>.
                  </li>
                  <li>
                    You can play up to
                    <span className="highlight"> 99 </span>
                    times at once.
                  </li>
                </ol>
              </div>
            </div>
            <div className="conquer-fort">
              <img
                src={conquerfort}
                // className="tag"
                style={{ width: "40vw ", marginTop: "2vw" }}
              />

              <div className="list-item">
                <ol>
                  <li>
                    Soldiers collected from the Soldier Collection game can be
                    used to
                    <span className="highlight"> conquer </span>
                    up the part of the Fort.
                  </li>
                  <li>
                    There will be
                    <span className="highlight"> three levels </span>
                    to free up the Fort.
                  </li>
                  <li>
                    Level 1, Level 2, and Level 3 need to be unlocked using the
                    Soldiers. The levels of the fort need to be freed in
                    chronological order.
                  </li>
                  <li>
                    To unlock each level,a
                    <span className="highlight"> specific number </span>
                    of Soldiers are required.
                  </li>
                  <li>
                    Once the level is successfully accomplished and unlocked,
                    the number of Soldiers in your account will be
                    <span className="highlight"> reduced </span>
                  </li>
                  <li>
                    <span className="highlight">
                      If you try to conquer the level without having the
                      required Soldiers, the Soldiers in your account will be
                      lost, and you will have to start from Zero. Please note,
                      only the soldier count will be reduced. Levels will not be
                      reset.
                    </span>
                  </li>
                  <li>
                    After unlocking each level, you will receive
                    <span className="highlight"> beans reward. </span>
                  </li>

                  <table>
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
                          <span>20000</span>
                          <img src={beanIcon} style={{ width: "4vw" }} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Lvl 2</td>
                      <td>15,000</td>
                      <td>
                        <div className="d-flex j-center al-center">
                          <span>70000</span>
                          <img src={beanIcon} style={{ width: "4vw" }} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Lvl 3</td>
                      <td>40,000</td>
                      <td>
                        <div className="d-flex j-center al-center">
                          <span>200,000</span>
                          <img src={beanIcon} style={{ width: "4vw" }} />
                        </div>
                      </td>
                    </tr>
                  </table>
                </ol>
              </div>
            </div>

            <div className="fan-follower">
              <img src={fanfollower} className="tag" />

              <div className="list-item">
                <p>
                  You will get a chance to
                  <span className="highlight">send</span>
                  Independence Day wishes card to the talents.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }} className="highlight">
                    Step 1:
                  </span>
                  You need to open FAN FOLLOWERS TAB on the web page to send the
                  wishes to your favourite talent.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }} className="highlight">
                    Step 2:
                  </span>
                  A card will appear with Independence Day wishes when you click
                  on the SEND INDEPENDENCE DAY WISHES button.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }} className="highlight">
                    Step 3:
                  </span>
                  Below the card, there will be a search bar. You can either
                  search with a talent ID or username; once the talent ID
                  appears in the search results, you can select it and tap on
                  send. (You cannot send the card to yourself.)
                </p>
              </div>
              <div className="list-item">
                <ol>
                  <li>
                    The upper limit for sending free cards is
                    <span className="highlight"> 5 per day </span>. After that,
                    you need to
                    <span className="highlight"> pay </span>
                    for the card.
                  </li>
                  <li>
                    If you want to send more cards, you will have to spend
                    <span className="highlight"> 1000 </span>
                    Beans to get
                    <span className="highlight"> 5 cards </span>.
                  </li>
                  <li>
                    The
                    <span className="highlight"> higher </span>
                    number of cards you
                    <span className="highlight"> send </span>
                    and the
                    <span className="highlight"> higher </span>
                    number of cards
                    <span className="highlight"> received </span>
                    by the talents will help you in ranking the
                    <span className="highlight"> leaderboard </span>.
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
                    Harr
                    <span className="highlight"> 25,000</span>
                    Beans
                    <span className="highlight"> event gifts</span>
                    par spend karne pe aapko mauka milenga.
                  </li>
                  <li>
                    <span className="highlight">Gun</span>
                    ka istemal karke, cheezon ko
                    <span className="highlight">destroy</span>
                    karna hoga, jo battle ground pe maujud honge.
                  </li>
                  <li>
                    Webpage pe aap
                    <span className="highlight">rewards history</span>
                    bhi check kar paoge.
                  </li>
                  <li>
                    Aap
                    <span className="highlight">99</span>
                    chances tak khel sakte ho.
                  </li>
                </ol>
              </div>
            </div>
            <div className="conquer-fort">
              <img
                src={conquerfort}
                style={{ width: "40vw ", marginTop: "2vw" }}
              />

              <div className="list-item">
                <ol>
                  <li>
                    Soldier Collection game khel ke jo Soldier collect kiye hai
                    unka istemal hoga fort ke part ko
                    <span className="highlight">conquer</span>
                    karne mein.
                  </li>
                  <li>
                    <span className="highlight">3 levels</span>
                    honge Fort ko free karne ke liye.
                  </li>
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
                    aapke account mein jo number of Soldiers hai woh
                    <span className="highlight">kam</span>
                    ho jayege.
                  </li>
                  <li>
                    <span className="highlight">
                      Aapne level ko conquer karne ki koshish ki,
                      <span className="highlight">specific</span>
                      number of Soldiers ke bina, Soldiers lost honge aapke
                      account se aur aapko Zero se start karna hoga.
                    </span>
                  </li>
                  <li>
                    Harr level ko unlock karne ke baad, aap beans reward receive
                    karoge
                    <span className="highlight">special accessories</span>
                    ke saath.
                  </li>

                  <table>
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
                          <span>20000</span>
                          <img src={beanIcon} style={{ width: "4vw" }} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Lvl 2</td>
                      <td>15,000</td>
                      <td>
                        <div className="d-flex j-center al-center">
                          <span>70000</span>
                          <img src={beanIcon} style={{ width: "4vw" }} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Lvl 3</td>
                      <td>40,000</td>
                      <td>
                        <div className="d-flex j-center al-center">
                          <span>200,000</span>
                          <img src={beanIcon} style={{ width: "4vw" }} />
                        </div>
                      </td>
                    </tr>
                  </table>
                </ol>
              </div>
            </div>

            <div className="fan-follower">
              <img src={fanfollower} className="tag" />

              <div className="list-item">
                <p>
                  Aapko chance milenga
                  <span className="highlight"> free</span>
                  Independence Day wish card talent ko bhejne ka.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }} className="highlight">
                    Step 1:
                  </span>{" "}
                  Aapko ye wishes send karne ke liye FAN FOLLOWERS tab select
                  karna hoga.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }} className="highlight">
                    Step 2:
                  </span>{" "}
                  Jab aap SEND INDEPENDENCE DAY wishes button pe click karoge,
                  Independence Day wishes ke saath apko ek card dikhega
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }} className="highlight">
                    Step 3:
                  </span>
                  Card ke neeche search bar hoga. Aap talent ID ya username ke
                  saath search kar sakte hai.jab talent ID search results mein
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
                    Aap jitne
                    <span className="highlight">zyada</span>
                    cards
                    <span className="highlight">bhejoge</span>
                    aur talents jitne
                    <span className="highlight">zyada</span>
                    cards
                    <span className="highlight">receive </span>
                    karege, uski madad se aap leaderboard pe rank kar paoge.
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
