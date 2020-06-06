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
            <a href="#">About</a>
          </li>
          <li className="navigationLi">
            <a href="#">Skills</a>
          </li>
          <li className="navigationLi contactLi">
            <a href="/#">Contact</a>
          </li>
          {/* <li className="CV">
            
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavigation;
