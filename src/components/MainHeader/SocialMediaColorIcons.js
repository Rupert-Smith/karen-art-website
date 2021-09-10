import React from "react";
import "../../assets/styles/css/main-header.css";
import facebook from "../../assets/images/social-media/facebook.png";
import instagram from "../../assets/images/social-media/instagram.png";
import framd from "../../assets/images/social-media/framd.png";

function SocialMediaColorIcons() {
  return (
    <div className="social-media-icons-color">
      <img src={facebook} alt="Facebook icon"></img>
      <img src={instagram} alt="Instagram icon"></img>
      <img src={framd} alt="Framd icon"></img>
    </div>
  );
}

export default SocialMediaColorIcons;
