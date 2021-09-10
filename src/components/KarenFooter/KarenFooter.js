import React from "react";
import "../../assets/styles/css/karen-footer.css";
import instagramGrey from "../../assets/images/social-media/instagram-grey-small.png";
import facebookGrey from "../../assets/images/social-media/facebook-grey-small.png";
import framdGrey from "../../assets/images/social-media/framd-grey-small.png";

function KarenFooter() {
  return (
    <section className="karen-footer-container">
      <div className="karen-footer-wrapper">
        <div className="footer-column footer-column-navigation footer-column-side">
          <ul className="footer-navigation">
            <li>Gallery</li>
            <li>About</li>
            <li>Commission</li>
            <li>Prices</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column footer-column-center">
          <h2>Karen Reep Art</h2>
          <div className="footer-email">Email: karenart@gmail.com</div>
          <div className="footer-phone-number">Phone: 07944 872769</div>
        </div>
        <div className="footer-column footer-column-icons footer-column-side">
          <div className="footer-icons-wrapper">
            <img src={facebookGrey} />
            <img src={instagramGrey} />
            <img src={framdGrey} />
          </div>
        </div>
      </div>
      <div className="footer-copywrite">
        ©2021 Karen Art - All Rights Reserved
      </div>
    </section>
  );
}

export default KarenFooter;
