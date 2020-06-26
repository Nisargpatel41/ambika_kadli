import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavLinks.css";

const MobileNavLinks = (props) => {
  const bgClass = props.isSliderOpen ? "mobileSliderBg" : "";
  const divClass = props.isSliderOpen ? "mobileSlider open" : "mobileSlider";
  const collapseIconClass = props.isCollapseOpen ? "minus" : "plus";

  const categoriesRender = props.categories.map((category) => {
    return (
      <li className="navigationLiMob products " key={category._id}>
        <a href="/h" id={category._id} onClick={props.movingToProductsFromNav}>
          {category.categoryName}
        </a>
      </li>
    );
  });

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
              <NavLink exact to="/">
                Home
              </NavLink>
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
              {categoriesRender}
            </p>
            <li className="navigationLiMob">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavLinks;
