import React, { useState } from "react";
import "../../../assets/styles/css/main.css";
import styles from "./_title.module.scss";

const Title = (props) => {
  return (
    <div className={styles["title-section"]}>
      <h1 className={styles["main-title"]}>Karen Reep Art</h1>
      <h2 className={styles["main-subtitle"]}>
        Commissioned Fine Art Pet Portraits
      </h2>
      <nav
        className={styles["hamburger-menu"]}
        onClick={() => {
          props.showHamburgerFunction(!props.showHamburger);
        }}
      >
        {/* <ion-icon name="menu-outline"></ion-icon> */}
      </nav>
    </div>
  );
};

export default Title;
