import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "./../Navbar/assets/hireme.png";
import bg from "./../Navbar/assets/image.png";

const handleButtonClick = () => {
  window.location.href = `https://drive.google.com/file/d/1o060nMGezAlg1WwO9OjolgPTJvqx8rSR/view?usp=drive_link`;
};
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Pratik</span>
          <br />
          FullStack Developer
        </span>
        <p className="introPara">
          I am skilled and passionate Full Stack Developer with experience in
        </p>
        <p className="introPara">
          creating visually appealing and user-friendly website.
        </p>

        <Link>
          <button className="btn" onClick={handleButtonClick}>
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Resume
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
