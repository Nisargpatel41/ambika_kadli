import React from "react";
import "./ProductsDropdown.css";

const ProductsDropdown = (props) => {
  const myClass = props.productsModalOpen
    ? "productsDropdownMain"
    : "productsDropdownMain none";

  const categoriesRender = props.categories.map((category) => {
    return (
      <li className="cdLi" key={category._id}>
        <a href="/h" id={category._id} onClick={props.movingToProductsFromNav}>
          {category.categoryName}
        </a>
      </li>
    );
  });

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
      <ul className="cdUl">{categoriesRender}</ul>
    </div>
  );
};

export default ProductsDropdown;
