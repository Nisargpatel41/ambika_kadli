import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductsDropdown.css";

const ProductsDropdown = (props) => {
  const myClass = props.productsModalOpen
    ? "adminProductsDropdownMain"
    : "adminProductsDropdownMain adminNone";
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
      <div className="adminTrikon"></div>
      <ul className="adminCdUl">
        <li className="adminCdLi">
          <NavLink to="add-product">Add Product</NavLink>
        </li>
        <li className="adminCdLi">
          <NavLink to="view-products">View Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProductsDropdown;
