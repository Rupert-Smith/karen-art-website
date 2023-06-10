import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/styles/css/main.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router";
import styles from "./_navigation.module.scss";

const Navigation = (props) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log(location.hash);
      let elem = document.getElementById(location.hash.slice(1));
      console.log(elem);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <nav>
      <ul className={styles["navigation-bar"]}>
        <NavLink className={styles["nav-link-element"]} to="/">
          Home
        </NavLink>
        <NavLink className={styles["nav-link-element"]} to="/#about">
          About
        </NavLink>
        <NavLink
          activeClassName={styles["nav-link-element-active"]}
          className={styles["nav-link-element"]}
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          activeClassName={styles["nav-link-element-active"]}
          className={styles["nav-link-element"]}
          to="/prices"
        >
          Prices
        </NavLink>
        <Link
          className={styles["nav-link-element"]}
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
