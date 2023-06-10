import React from "react";
import "../../../assets/styles/css/main.css";
import styles from "./_section-title-box.module.scss";

function SectionTitleBox(props) {
  return (
    <div
      id={props.id}
      className={`${styles["sectionTitleBox"]} ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default SectionTitleBox;
