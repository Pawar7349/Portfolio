import React from "react";
import "./skills.css";
import UIDesign from "./../Navbar/assets/frontend.png";
import WebDesign from "./../Navbar/assets/backend.png";
import AppDesign from "./../Navbar/assets/app-design.png";
const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What i do </span>
      <span className="skillDesc">
        I am a skilled and passionate Web designer
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              Using front end languages create website and application that
              allows user to acces and interact with site and app
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Developer</h2>
            <p>
              Develop and Maintain efficient, secure and scalable web and app
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full stack Devloper</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
