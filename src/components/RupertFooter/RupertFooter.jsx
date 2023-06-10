import React from "react";
import "../../assets/styles/css/main.css";
import styles from "./_rupert-footer.module.scss";

function RupertFooter(props) {
  const emoji = require("emoji-dictionary");
  const wrench = emoji.getUnicode("wrench");
  const technologist = emoji.getUnicode("man_technologist");
  const highVoltage = emoji.getUnicode("high_voltage_sign");

  return (
    <section className={styles["rupertfooter-container"]}>
      ©2021 Website designed & developed by Rupert Smith at
      rupertwebdev@gmail.com {technologist} www.linkedin.com/in/rupertwebdev
    </section>
  );
}

export default RupertFooter;
