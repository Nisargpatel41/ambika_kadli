import React from "react";
import "./MobileNavLinks.css";

const MobileNavLinks = (props) => {
  const bgClass = props.isSliderOpen ? "mobileSliderBg" : "";
  const divClass = props.isSliderOpen ? "mobileSlider open" : "mobileSlider";
  const collapseIconClass = props.isCollapseOpen ? "minus" : "plus";
  return (
    <div
      className={bgClass}
      // onClick={() => {
      //   props.sliderCloser();
      // }}
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
              <a
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="productsLink"
                onClick={() => {
                  props.collapseToggler();
                }}
              >
                Products
                <i
                  className={`fa fa-${collapseIconClass} plusIcon`}
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <p className="collapse productsContainer" id="collapseExample">
              <li className="navigationLiMob products ">
                <a href="#">Kadli</a>
              </li>
              <li className="navigationLiMob products">
                <a href="#">Lucky</a>
              </li>
              <li className="navigationLiMob products">
                <a href="#">Kada</a>
              </li>
            </p>
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
