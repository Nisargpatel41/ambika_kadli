import React from "react";
import "./DesktopNavigation.css";

const DesktopNavigation = (props) => {
  return (
    <div className="navigationDiv">
      <nav className="navigation">
        <ul className="navigationUl">
          <li className="navigationLi">
            <a href="#">Home</a>
          </li>
          <li className="navigationLi">
            <a href="#">Kadli</a>
          </li>
          <li className="navigationLi">
            <a href="#">Lucky</a>
          </li>
          <li className="navigationLi">
            <a href="#">Kada</a>
          </li>
          <li className="navigationLi contactLi">
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavigation;
