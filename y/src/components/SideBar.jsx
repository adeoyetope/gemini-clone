import React, { useContext } from "react";
import Icons from "./Icons";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { Context } from "../context/Context";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const {
    previousPrompt,
    onSent,
    setResentPromt,
    resentPrompt,
    setInput,
    newChat,
  } = useContext(Context);

  const handleSearch = (item) => {
    // previousPrompt.shift();
    // let newPrompt = previousPrompt.find((promts) => promts === item);
    setInput(item);
    onSent(item);
    setResentPromt(item);
    console.log(item);
    // setResentPromt((prev) => [...prev])
  };

  // console.log(previousPrompt);
  const handleMenu = () => {
    setSidebar(!sidebar);
  };
  // console.log(previousPrompt);
  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div className={styles.sidebarTop}>
          <img onClick={handleMenu} src={Icons.menu} alt="" />
          <div onClick={() => newChat()} className={styles.separatess}>
            <div className={styles.searchItem}>
              <img src={Icons.send} alt="" />
            </div>
            <div className={styles.nameInputChat}>New chat</div>
          </div>
          {/* <img src={Icons.send} alt="" /> */}
          <div className={styles.new_clone}>
            {sidebar ? ((<p>New clone</p>), (<p>Resent</p>)) : ""}
          </div>
          <div className={styles.searchInput}>
            {/* <img src={Icons.search} alt="" /> */}
            {sidebar ? (
              <div className={styles.separate}>
                <div>
                  <p className={styles.new_clone}>
                    {" "}
                    {previousPrompt.map((input, index) => (
                      <p className={styles.searchItem}>
                        <div>
                          <img
                            onClick={() => handleSearch(input)}
                            src={Icons.search}
                            alt=""
                          />
                        </div>{" "}
                        <div key={input} className={styles.nameInputItem}>
                          {" "}
                          {input}{" "}
                        </div>
                      </p>
                    ))}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={styles.sidebarBottom}>
        <div>
          <img src={Icons.reactsvg} alt="" />
          {sidebar ? <p className={styles.new_clone}>Help</p> : ""}
          <div>
            <img src={Icons.settings} alt="" />
            {sidebar ? <p className={styles.new_clone}>More</p> : ""}
          </div>
          <div>
            <img src={Icons.settings} alt="" />
            {sidebar ? <p className={styles.new_clone}>Settings</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
