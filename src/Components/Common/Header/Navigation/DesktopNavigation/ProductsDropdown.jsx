import React from "react";
import "./ProductsDropdown.css";

const ProductsDropdown = (props) => {
  const handleChange = (e) => {
    // props.updateCategory(e.target.value);
    props.productsDropdownToggler();
  };

  const myClass = props.productsModalOpen
    ? "productsDropdownMain"
    : "productsDropdownMain none";
  return (
    <div
      className={myClass}
      onMouseEnter={() => {
        props.productsDropdownOpener();
      }}
      onMouseLeave={() => {
        props.productsDropdownCloser();
      }}
    >
      <div className="trikon"></div>
      <ul className="cdUl">
        <li className="cdLi">
          <a href="#">Kadli</a>
        </li>
        <li className="cdLi">
          <a href="#">Lucky</a>
        </li>
        <li className="cdLi">
          <a href="#">Kada</a>
        </li>
      </ul>
    </div>
  );
};

export default ProductsDropdown;
