import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Hero from "./Hero/Hero";
import SocialMediaColorIcons from "./SocialMediaColorIcons/SocialMediaColorIcons";
import Route from "react-router-dom";
import styles from "./_mainHeader.module.scss";

const MainHeader = ({ heroId, propsClassName, contactId }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowMenu(false);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let hero = "";

  switch (heroId) {
    case "home":
      hero = "home-dog-hero";
      break;
    case "prices":
      hero = "prices-dog-hero";
      break;
    case "gallery":
      hero = "gallery-dog-hero";
      break;
    default:
      hero = "home-dog-hero";
  }

  return (
    <header className={`${styles[hero]} ${styles["main-header-container"]}`}>
      <SocialMediaColorIcons />
      <Title showHamburger={showMenu} showHamburgerFunction={setShowMenu} />
      <Navigation contactId={contactId} />
      {showMenu ? <MobileNavigation /> : ""}
      <Hero className={styles["home-dog-hero"]} />
    </header>
  );
};

export default MainHeader;
