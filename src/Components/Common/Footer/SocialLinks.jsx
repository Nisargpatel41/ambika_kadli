import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const SocialLinks = () => {
  return (
    <div className="footerSocialLinks">
      <SectionTitle title="Connect" />
      <ul className="footerSocialUl">
        <li className="footerSocialLi whatsappLi">
          <a
            href="https://wa.me/919998538411"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </li>
        <li className="footerSocialLi linkedinLi">
          <a
            href="https://www.facebook.com/patel.dharmendrag"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li className="footerSocialLi instagramLi">
          <a
            href="https://www.instagram.com/pateldharmendrag/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
