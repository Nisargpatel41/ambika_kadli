import React from "react";
import "./MobileNavLinks.css";

const MobileNavLinks = (props) => {
  const bgClass = props.isSliderOpen ? "mobileSliderBg" : "";
  const divClass = props.isSliderOpen ? "mobileSlider open" : "mobileSlider";
  return (
    <div
      className={bgClass}
      onClick={() => {
        props.sliderCloser();
      }}
    >
      <div className={divClass}>
        <div className="closeBtnDiv">
          <i
            className={`fa fa-times`}
            onClick={() => {
              props.sliderCloser();
            }}
          ></i>
        </div>
        <nav className="navigationMob">
          <ul className="navigationUlMob">
            <li className="navigationLiMob">
              <a href="#">Home</a>
            </li>
            <li className="navigationLiMob">
              <a href="#">Kadli</a>
            </li>
            <li className="navigationLiMob">
              <a href="#">Lucky</a>
            </li>
            <li className="navigationLiMob">
              <a href="#">Kada</a>
            </li>
            <li className="navigationLiMob">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavLinks;
