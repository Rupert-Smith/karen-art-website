import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Hero from "./Hero/Hero";
import SocialMediaColorIcons from "./SocialMediaColorIcons/SocialMediaColorIcons";
import Route from "react-router-dom";
import styles from "./_mainHeader.module.scss";

const MainHeader = ({ propsClassName, contactId }) => {
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

  return (
    <header className={`${propsClassName} main-header-container`}>
      <SocialMediaColorIcons />
      <Title showHamburger={showMenu} showHamburgerFunction={setShowMenu} />
      <Navigation contactId={contactId} />
      {showMenu ? <MobileNavigation /> : ""}
      <Hero />
    </header>
  );
};

export default MainHeader;
