import React from "react";
import "./works.css";
import Portfolio1 from "./../Navbar/assets/diceGame.png";
import Portfolio2 from "./../Navbar/assets/amazonClone.png";
import Portfolio3 from "./../Navbar/assets/pokemonWebApp.png";
import Portfolio4 from "./../Navbar/assets/keeper.png";
const handleImageClick1 = () => {
  window.location.href = `https://github.com/Pawar7349/Dice_Game`;
};
const handleImageClick2 = () => {
  window.location.href = `https://github.com/Pawar7349/Amzone-clone`;
};
const handleImageClick3 = () => {
  window.location.href = `https://github.com/Pawar7349/PokemonGame`;
};
const handleImageClick4 = () => {
  window.location.href = `https://github.com/Pawar7349/KEEPER-APP`;
};
const Works = () => {
  return (
    <section id="works">
      <h1 className="workstitle">My portfolio</h1>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skill
      </span>
      <div className="workImgs">
        <img src={Portfolio1} alt="" className="worksImg" onClick={handleImageClick1}/>
        <img src={Portfolio2} alt="" className="worksImg" onClick={handleImageClick2}/>
        <img src={Portfolio3} alt="" className="worksImg" onClick={handleImageClick3} />
        <img src={Portfolio4} alt="" className="worksImg" onClick={handleImageClick4} />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;