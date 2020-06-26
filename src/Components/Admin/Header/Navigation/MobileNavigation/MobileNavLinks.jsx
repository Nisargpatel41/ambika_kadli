import React from "react";
import { NavLink } from "react-router-dom";

import "./MobileNavLinks.css";

const MobileNavLinks = (props) => {
  const bgClass = props.isSliderOpen ? "adminMobileSliderBg" : "";
  const divClass = props.isSliderOpen
    ? "adminMobileSlider adminOpen"
    : "adminMobileSlider";
  const categoryCollapseIconClass = props.isCategoryCollapseOpen
    ? "minus"
    : "plus";
  const productCollapseIconClass = props.isProductCollapseOpen
    ? "minus"
    : "plus";

  return (
    <div
      className={bgClass}
      // onClick={() => {
      //   props.sliderCloser();
      // }}
    >
      <div className={divClass}>
        <div className="adminCloseBtnDiv">
          <i
            className={`fa fa-times`}
            onClick={() => {
              props.sliderCloser();
            }}
          ></i>
        </div>
        <nav className="adminNavigationMob">
          <ul className="adminNavigationUlMob">
            <li className="adminNavigationLiMob">
              <NavLink to="/admin-home-page">Home</NavLink>
            </li>
            <li className="adminNavigationLiMob">
              <a
                data-toggle="collapse"
                href="#category"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="adminProductsLink"
                onClick={() => {
                  props.categoryCollapseToggler();
                }}
              >
                Category
                <i
                  className={`fa fa-${categoryCollapseIconClass} adminPlusIcon`}
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <p className="collapse adminProductsContainer" id="category">
              <li className="adminNavigationLiMob adminProducts ">
                <NavLink to="add-category">Add Category</NavLink>
              </li>
              <li className="adminNavigationLiMob adminProducts">
                <NavLink to="view-category">View Categories</NavLink>
              </li>
            </p>
            <li className="adminNavigationLiMob">
              <a
                data-toggle="collapse"
                href="#product"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="productsLink"
                onClick={() => {
                  props.productCollapseToggler();
                }}
              >
                Products
                <i
                  className={`fa fa-${productCollapseIconClass} adminPlusIcon`}
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <p className="collapse adminProductsContainer" id="product">
              <li className="adminNavigationLiMob adminProducts ">
                <NavLink to="add-product">Add Product</NavLink>
              </li>
              <li className="adminNavigationLiMob adminProducts">
                <NavLink to="view-products">View Products</NavLink>
              </li>
            </p>
            <li className="adminNavigationLiMob">
              <NavLink to="edit-video">Video</NavLink>
            </li>
            <li className="adminNavigationLiMob">
              <NavLink to="view-messages">Messages</NavLink>
            </li>
            <li className="adminNavigationLiMob">
              <button
                className="adminLogoutBtn"
                onClick={() => {
                  props.logoutHandler();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavLinks;
