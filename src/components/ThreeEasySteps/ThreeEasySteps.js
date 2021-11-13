import React from "react";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import smilingCustomer from "../../assets/images/portrait-with-customer/smiling-customer.jpg";
import "../../assets/styles/css/main.css";
import Section from "../UI/Section/Section";
import StepNumber from "../UI/StepNumber/StepNumber";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";

function ThreeEasySteps() {
  return (
    <Section className="three-easy-steps-section">
      <SectionTitleBox className="steps-title-box">
        <SectionTitle>How to commission your pet: 3 easy steps</SectionTitle>
      </SectionTitleBox>
      <div className="three-easy-steps-content">
        <Fade>
          <div className="smiling-customer-container">
            <img className="smiling-customer" src={smilingCustomer}></img>
          </div>
        </Fade>
        <div className="step-number-container">
          <Fade duration={800} left>
            <div>
              <StepNumber className="step-number">1</StepNumber>

              <p className="step-content">
                <Link
                  className="inline-link inline-link-blue"
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
              <StepNumber className="step-number">2</StepNumber>
              <p className="step-content">
                Karen will create a handcrafted, one-of-a-kind portrait for you.
              </p>
            </div>
          </Fade>
          <Fade duration={1600} left>
            <div>
              {" "}
              <StepNumber className="step-number">3</StepNumber>
              <p className="step-content">
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
