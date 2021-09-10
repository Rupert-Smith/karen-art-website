import React from "react";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import smilingCustomer from "../../assets/images/portrait-with-customer/smiling-customer.jpg";
import "../../assets/styles/css/three-easy-steps.css";
import Section from "../UI/Section/Section";
import StepNumber from "../UI/StepNumber/StepNumber";

function ThreeEasySteps() {
  return (
    <Section className="three-easy-steps-section">
      <SectionTitleBox className="steps-title-box">
        <SectionTitle>How to commission your pet: 3 easy steps</SectionTitle>
      </SectionTitleBox>
      <div className="three-easy-steps-content">
        <div className="smiling-customer-container">
          <img className="smiling-customer" src={smilingCustomer}></img>
        </div>
        <ul className="step-number-container">
          <StepNumber className="step-number">1</StepNumber>
          <p className="step-content">
            <a>Email Karen</a> with a picture of your pet.
          </p>
          <StepNumber className="step-number">2</StepNumber>
          <p className="step-content">
            Karen will create a handcrafted, one-of-a-kind portrait for you.
          </p>
          <StepNumber className="step-number">3</StepNumber>
          <p className="step-content">
            Hang your finished portrait on your wall, a timeless memory captured
            on canvas.
          </p>
        </ul>
      </div>
    </Section>
  );
}

export default ThreeEasySteps;
