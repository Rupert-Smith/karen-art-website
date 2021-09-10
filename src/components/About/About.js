import React from "react";
import "../../assets/styles/css/about.css";
import karenAbout from "../../assets/images/about/karen-about.jpg";

function About(props) {
  return (
    <section className="about-container">
      <h2>About</h2>
      <p>
        Hi, I’m Karen and I love drawing peoples pets. For the past 38 years I
        have worked as a Paediatric nurse at Addenbrookes, Great Ormond street
        and the Luton and Dunstable hospital. However I have always loved
        drawing and through the years I’ve drawn many pictures of staff and over
        the last two years I’ve turned my hand to pet portraits. I have drawn
        many pictures which you can view in the gallery and I work on a
        commission basis. So if you would like a picture drawn of a special pet
        for yourself or a special present just take a look through my website
        and contact me. I tend to use mediums such graphite, charcoal or
        coloured pencil.
      </p>
      <div className="about-photo-container">
        <img src={karenAbout} className="about-photo" />
      </div>
    </section>
  );
}

export default About;
