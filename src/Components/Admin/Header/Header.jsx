import React, { Component } from "react";
import Logo from "./Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation/DesktopNavigation";
import NavButton from "./Navigation/MobileNavigation/NavButton";
import MobileNavLinks from "./Navigation/MobileNavigation/MobileNavLinks";
import ProductsDropdown from "./Navigation/DesktopNavigation/ProductsDropdown";
import CategoryDropdown from "./Navigation/DesktopNavigation/CategoryDropdown";
import "./Header.css";

class Header extends Component {
  state = {
    isSliderOpen: false,
    scrolled: false,
    isCategoryCollapseOpen: false,
    isProductCollapseOpen: false,
    productsModalOpen: false,
    categoryModalOpen: false,
  };

  sliderOpener = () => {
    this.setState({ isSliderOpen: true });
  };
  sliderCloser = () => {
    this.setState({ isSliderOpen: false });
  };

  categoryCollapseToggler = () => {
    this.setState({
      isCategoryCollapseOpen: !this.state.isCategoryCollapseOpen,
    });
  };

  productCollapseToggler = () => {
    this.setState({ isProductCollapseOpen: !this.state.isProductCollapseOpen });
  };

  productsDropdownOpener = () => {
    this.setState({ productsModalOpen: true });
  };

  productsDropdownCloser = () => {
    this.setState({ productsModalOpen: false });
  };

  categoryDropdownOpener = () => {
    this.setState({ categoryModalOpen: true });
  };

  categoryDropdownCloser = () => {
    this.setState({ categoryModalOpen: false });
  };

  render() {
    return (
      <div className={this.state.scrolled ? `scrolledHeader` : `header`}>
        <NavButton sliderOpener={this.sliderOpener} />
        <Logo />
        <DesktopNavigation
          productsDropdownOpener={this.productsDropdownOpener}
          productsDropdownCloser={this.productsDropdownCloser}
          categoryDropdownOpener={this.categoryDropdownOpener}
          categoryDropdownCloser={this.categoryDropdownCloser}
          productsModalOpen={this.state.productsModalOpen}
          categoryModalOpen={this.state.categoryModalOpen}
        />
        <ProductsDropdown
          productsModalOpen={this.state.productsModalOpen}
          productsDropdownOpener={this.productsDropdownOpener}
          productsDropdownCloser={this.productsDropdownCloser}
        />
        <CategoryDropdown
          categoryModalOpen={this.state.categoryModalOpen}
          categoryDropdownOpener={this.categoryDropdownOpener}
          categoryDropdownCloser={this.categoryDropdownCloser}
        />
        <MobileNavLinks
          isSliderOpen={this.state.isSliderOpen}
          sliderCloser={this.sliderCloser}
          isCategoryCollapseOpen={this.state.isCategoryCollapseOpen}
          isProductCollapseOpen={this.state.isProductCollapseOpen}
          categoryCollapseToggler={this.categoryCollapseToggler}
          productCollapseToggler={this.productCollapseToggler}
        />
      </div>
    );
  }
}

export default Header;
