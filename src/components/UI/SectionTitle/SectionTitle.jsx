import React from "react";
import "../../../assets/styles/css/main.css";
import Fade from "react-reveal/Fade";
import styles from "./_section-title.module.scss";

function SectionTitle({ className, children }) {
  return (
    <Fade>
      <div
        className={`${styles["sectionTitle"]} ${className}`}
      >{`${children}`}</div>
    </Fade>
  );
}

export default SectionTitle;
