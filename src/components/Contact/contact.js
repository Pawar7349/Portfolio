
import React, { useState } from "react";
import "./contact.css";
import FacebookIcon from "./../Navbar/assets/facebook-icon.png";
import Github from "./../Navbar/assets/gitlang.png";
import Linkdin from "./../Navbar/assets/linkdin.png";
import InstagramIcon from "./../Navbar/assets/instagram.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  const handleImageClick = (platform) => {
    switch (platform) {
      case "facebook":
        window.open("https://www.facebook.com/profile.php?id=100026780774191");
        break;
      case "github":
        window.open("https://github.com/Pawar7349");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/pratik-pawar-600731237/");
        break;
      case "instagram":
        window.open("https://www.instagram.com/pratik.pawar1/");
        break;
      default:
        break;
    }
  };

  return (
    <section className="contactPage">
      <div id="resume"></div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesk">
          Please fill out form below to discuss any work opportunity
        </span>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img
              src={FacebookIcon}
              alt=""
              className="link"
              onClick={() => handleImageClick("facebook")}
            />
            <img
              src={Github}
              alt=""
              className="link"
              onClick={() => handleImageClick("github")}
            />
            <img
              src={Linkdin}
              alt=""
              className="link"
              onClick={() => handleImageClick("linkedin")}
            />
            <img
              src={InstagramIcon}
              alt=""
              className="link"
              onClick={() => handleImageClick("instagram")}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;


