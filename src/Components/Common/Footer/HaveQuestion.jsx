import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const HaveQuestion = () => {
  return (
    <div className="footerContact">
      <SectionTitle title="Contact Me" />
      <div className="footerContactContentMain">
        <div className="footerContactContent">
          <i className="fa fa-map-marker"></i>
          <p>
            Vanarasi no Madh, Khetarvasi, <br />
            Near Blood Bank, Patan, Gujarat
          </p>
        </div>
        <div className="footerPhone">
          <div className="footerContactContent">
            <i className="fa fa-phone"></i>
            <p>+91 9998538411</p>
          </div>
        </div>
        <div className="footerMail">
          <div className="footerContactContent">
            <i className="fa fa-envelope"></i>
            <p>dharmendra1179@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestion;
