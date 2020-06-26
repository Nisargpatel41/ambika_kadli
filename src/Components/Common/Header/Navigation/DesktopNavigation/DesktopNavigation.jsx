import React from "react";
import { NavLink } from "react-router-dom";
import "./DesktopNavigation.css";

const DesktopNavigation = (props) => {
  const caretClass = props.productsModalOpen ? "up" : "down";
  return (
    <div className="navigationDiv">
      <div className="top-header">
        <div className="headerMobileDiv">
          <div className="contactIconDiv mobileContact">
            <i className="fa fa-mobile" aria-hidden="true"></i>
            {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
          </div>
          <h6 className="headerContactText">9998538411</h6>
        </div>

        <div className="headerEmailDiv">
          <div className="contactIconDiv emailContact">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <h6 className="headerContactText">dharmendra1179@gmail.com</h6>
        </div>
      </div>
      <nav className="navigation">
        <ul className="navigationUl">
          <li className="navigationLi">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navigationLi">
            <button
              className="productBtn"
              onMouseEnter={() => {
                props.productsDropdownOpener();
              }}
              onMouseLeave={() => {
                props.productsDropdownCloser();
              }}
            >
              Products{" "}
              <i
                className={`fa fa-caret-${caretClass} caretDown`}
                aria-hidden="true"
              ></i>
            </button>
          </li>
          <li className="navigationLi">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavigation;
