import React from "react";
import { NavLink } from "react-router-dom";
import "./DesktopNavigation.css";

const DesktopNavigation = (props) => {
  const productsCaretClass = props.productsModalOpen ? "up" : "down";
  const categoryCaretClass = props.categoryModalOpen ? "up" : "down";

  return (
    <div className="adminNavigationDiv">
      <nav className="adminNavigation">
        <ul className="adminNavigationUl">
          <li className="adminNavigationLi">
            <NavLink to="/helloAdmin">Home</NavLink>
          </li>
          <li className="adminNavigationLi">
            <button
              className="adminProductBtn"
              onMouseEnter={() => {
                props.categoryDropdownOpener();
              }}
              onMouseLeave={() => {
                props.categoryDropdownCloser();
              }}
            >
              Category
              <i
                className={`fa fa-caret-${categoryCaretClass} caretDown`}
                aria-hidden="true"
              ></i>
            </button>
          </li>
          <li className="adminNavigationLi">
            <button
              className="adminProductBtn"
              onMouseEnter={() => {
                props.productsDropdownOpener();
              }}
              onMouseLeave={() => {
                props.productsDropdownCloser();
              }}
            >
              Products
              <i
                className={`fa fa-caret-${productsCaretClass} caretDown`}
                aria-hidden="true"
              ></i>
            </button>
          </li>
          <li className="adminNavigationLi">
            <NavLink to="view-messages">Messages</NavLink>
          </li>
          <li className="adminNavigationLi">
            <NavLink to="edit-video">Video</NavLink>
          </li>
          <li className="adminNavigationLi">
            <NavLink to="#">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavigation;
