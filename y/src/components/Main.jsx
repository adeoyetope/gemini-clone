import React, { useContext } from "react";
import Icons from "./Icons";
import styles from "./main.module.css";
import { Context } from "../context/Context";

let errorInput;
const Main = () => {
  const {
    input,
    setInput,
    onSent,
    resentPrompt,
    setResentPrompt,
    isLoading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,
  } = useContext(Context);

  const handleSend = () => {
    onSent();
  };

  return (
    <div>
      <div className={styles.navContainet}>
        <div className={styles.nav}>
          <p>Gemini</p>
          <p>
            <b>{errorInput}</b>
          </p>
          <img className={styles.img} src={Icons.image} alt="" />
        </div>{" "}
      </div>
      {isLoading ? (
        <div className={styles.loader}>
          <hr />
          <hr />
          <hr />
        </div>
      ) : !resultData && !isLoading ? (
        <>
          <div className={styles.cardsContainer}>
            <div className={styles.greet}>
              <p>
                <span>greet</span>
              </p>
              <p>how can i help you today</p>
            </div>
            <div>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <p>
                    suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={Icons.reader} alt="" />
                </div>
                <div className={styles.card}>
                  <p>
                    suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={Icons.bulb} alt="" />
                </div>
                <div className={styles.card}>
                  <p>
                    suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={Icons.message} alt="" />
                </div>
                <div className={styles.card}>
                  <p>
                    suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={Icons.html} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.result}>
            <div className={styles.resultInfo}>
              <img src={Icons.image} alt="" />
              <p>{resentPrompt}</p>
            </div>

            <div className={styles.resultIcon}>
              <img src={Icons.gemini} alt="" />
              <div className={styles.resultContent}>
                <p
                  className={styles.respData}
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.mainBottom}>
        <div className={styles.search}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter text here"
          />
          <div className={styles.img}>
            <img className={styles.inputIcons} src={Icons.bulb} alt="" />
            <img className={styles.inputIcons} src={Icons.micro} alt="" />
            {input ? (
              <img
                className={styles.inputIcons}
                src={Icons.send}
                onClick={handleSend}
                alt=""
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
