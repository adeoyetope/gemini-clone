import React from "react";
import "./mainside.module.css";
import SideBar from "./SideBar";
import Main from "./Main";

const styles = {
  display: "flex",
  maxHeigth: "100vh",
  maxWidth: "100%",
  boxSizing: "borderBox",
};

const MainSide = () => {
  return (
    <div style={styles}>
      <SideBar />
      <Main />
    </div>
  );
};

export default MainSide;
