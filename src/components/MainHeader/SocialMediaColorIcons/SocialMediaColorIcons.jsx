import React from "react";
import "../../../assets/styles/css/main.css";
import facebook from "../../../assets/images/social-media/facebook.png";
import instagram from "../../../assets/images/social-media/instagram.png";
import framd from "../../../assets/images/social-media/framd.png";
import styles from "./_social-media-icons.module.scss";

function SocialMediaColorIcons() {
  return (
    <div className={styles["social-media-icons-color"]}>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/Karens-art-creating-memories-608476719664499"
      >
        <img src={facebook} alt="Facebook icon" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/karens_art_for_you/"
      >
        <img src={instagram} alt="Instagram icon" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.getframd.com/profile/karen-reep/20921"
      >
        <img src={framd} alt="Framd icon" />
      </a>
    </div>
  );
}

export default SocialMediaColorIcons;
