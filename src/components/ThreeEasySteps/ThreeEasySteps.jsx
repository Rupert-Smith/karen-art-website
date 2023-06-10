import React from "react";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import smilingCustomer from "../../assets/images/portrait-with-customer/smiling-customer.jpg";
import "../../assets/styles/css/main.css";
import Section from "../UI/Section/Section";
import StepNumber from "../UI/StepNumber/StepNumber";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import styles from "./_three-easy-steps.module.scss";

function ThreeEasySteps() {
  return (
    <Section className={styles["three-easy-steps-section"]}>
      <SectionTitleBox className={styles["steps-title-box"]}>
        <SectionTitle>How to commission your pet: 3 easy steps</SectionTitle>
      </SectionTitleBox>
      <div className={styles["three-easy-steps-content"]}>
        <Fade>
          <div className={styles["smiling-customer-container"]}>
            <img
              className={styles["smiling-customer"]}
              src={smilingCustomer}
            ></img>
          </div>
        </Fade>
        <div className={styles["step-number-container"]}>
          <Fade duration={800} left>
            <div>
              <StepNumber className={styles["step-number"]}>1</StepNumber>

              <p className={styles["step-content"]}>
                <Link
                  className={`${styles["inline-link"]} ${styles["inline-link-blue"]}`}
                  smooth={true}
                  duration={500}
                  to="contact"
                >
                  <strong>Email Karen</strong>
                </Link>{" "}
                with a picture of your pet.
              </p>
            </div>
          </Fade>
          <Fade duration={1200} left>
            <div>
              <StepNumber className={styles["step-number"]}>2</StepNumber>
              <p className={styles["step-content"]}>
                Karen will create a handcrafted, one-of-a-kind portrait for you.
              </p>
            </div>
          </Fade>
          <Fade duration={1600} left>
            <div>
              {" "}
              <StepNumber className={styles["step-number"]}>3</StepNumber>
              <p className={styles["step-content"]}>
                Hang your finished portrait on your wall, a timeless memory
                captured on canvas.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </Section>
  );
}

export default ThreeEasySteps;
