import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "./../Navbar/assets/logo.png";
import contactImg from "./../Navbar/assets/contact.png";
import menu from "./../Navbar/assets/menu.png";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
      <img
        src={menu}
        className="mobMenu"
        alt="Menu"
        onClick={() => setshowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(!showMenu)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(!showMenu)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(!showMenu)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setshowMenu(!showMenu)}
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;