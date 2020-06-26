import React from "react";
import HaveQuestions from "./HaveQuestion";
import SocialLinks from "./SocialLinks";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerMainDiv">
      <div className="footerContentMain">
        <HaveQuestions />
        <SocialLinks />
      </div>
      <div className="footerBorder"></div>
      <div className="tarif">
        Designed &#38; Developed By{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nisargpatel-portfolio.netlify.app"
        >
          Nisarg H Patel
        </a>
      </div>
    </div>
  );
};

export default Footer;
