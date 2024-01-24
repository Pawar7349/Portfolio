// import AppDesign from "/src/components/Navbar/assets/app-design.png";
import "./skills1.css";
import C from "./../Navbar/assets/clang.png";
import Java from "./../Navbar/assets/javalang.png";
import Html from "./../Navbar/assets/htmllang.png";
import Css from "./../Navbar/assets/csslang.png";
import Javascript from "./../Navbar/assets/javascriptlang.png";
import Node from "./../Navbar/assets/nodelang.png";
import Express from "./../Navbar/assets/expresslang.png";
import react from "./../Navbar/assets/reactlang.png";
import SQL from "./../Navbar/assets/sqllang.png";
import MongoDB from "./../Navbar/assets/mongolang.png";
import Github from "./../Navbar/assets/gitlang.png";

const Skills1 = () => {
  return (
    <section id="skills1">
      
      <span className="skillTitle">Skills</span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={C} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C programing Language</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={Java} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CORE JAVA</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={Html} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>HTML5</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={Css} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CSS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={Javascript} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JAVASCRIPT</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={Node} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>NODE JS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={Express} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>EXPRESS JS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={react} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>REACT JS</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={SQL} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>SQL</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={MongoDB} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MONGODB</h2>
          </div>
        </div>
        <div className="skillBar">
          <img src={Github} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>GITHUB</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills1;