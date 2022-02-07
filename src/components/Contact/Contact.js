import React, { useRef } from 'react';
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import "../../assets/styles/css/main.css";
import Fade from "react-reveal/Fade";

import emailjs from 'emailjs-com';

function Contact(props) {

const form = useRef();
const sendEmail = (e) =>{
      e.preventDefault();

 emailjs.sendForm('default_service', 'template_iu7byhh', e.target, 'user_SkUCNhEQriSi6KSjJHiOr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
}


  return (
    <section id="contact">
      <Fade>
        <SectionTitleBox>
          <SectionTitle className="contact-title">Message Karen</SectionTitle>
        </SectionTitleBox>
        <p className="contact-info">
          I am based in Ampthill, Bedfordshire. Feel free to contact me via the
          form below, or alternatively ring me at <strong>07944 872769</strong>
        </p>
        <form enctype="multipart/form-data" method={"post"}  onSubmit={sendEmail} className="contact-form-container">
          <div className="contact-form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required=""
            ></input>

            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required=""
            ></input>

            <label>Photo (optional)</label>
            <input
              type="file"
              name="file"
     
              // accept="image/png, image/jpeg"
            ></input>

            <label>Message</label>
            <textarea name="message" placeholder="Your message"></textarea>

            <label></label>
            <input type="submit" value="Send"></input>
          </div>
        </form>
      </Fade>
    </section>
  );
}

export default Contact;
