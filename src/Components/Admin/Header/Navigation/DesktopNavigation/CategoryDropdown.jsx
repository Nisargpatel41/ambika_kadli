import React from "react";
import { NavLink } from "react-router-dom";
import "./CategoryDropdown.css";

const CategoryDropdown = (props) => {
  const handleChange = (e) => {
    // props.updateCategory(e.target.value);
    props.productsDropdownToggler();
  };

  const myClass = props.categoryModalOpen
    ? "adminCategoryDropdownMain"
    : "adminCategoryDropdownMain adminCategoryNone";
  return (
    <div
      className={myClass}
      onMouseEnter={() => {
        props.categoryDropdownOpener();
      }}
      onMouseLeave={() => {
        props.categoryDropdownCloser();
      }}
    >
      <div className="adminCategoryTrikon"></div>
      <ul className="adminCategoryCdUl">
        <li className="adminCategoryCdLi">
          <NavLink to="add-category">Add Category</NavLink>
        </li>
        <li className="adminCategoryCdLi">
          <NavLink to="view-category">View Categories</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CategoryDropdown;
