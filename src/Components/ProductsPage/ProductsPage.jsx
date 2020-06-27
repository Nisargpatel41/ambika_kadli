import React, { Component } from "react";
import axios from "axios";
import Header from "../Common/Header/Header";
import ProductBox from "../Common/ProductBox/ProductBox";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import disableScroll from "disable-scroll";

import "./ProductsPage.css";

class ProductsPage extends Component {
  state = { products: [], redirect: false, categoryId: "", oldCid: "" };

  ajaxApiCall() {
    axios
      .get(
        `https://ambika-kadli.herokuapp.com/api/product/categoryWise/${this.props.match.params.cid}`,

        {
          headers: {
            "x-parameter": "productspage",
          },
        }
      )
      .then(({ data }) => {
        this.setState({ products: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.setState({ categoryId: this.props.match.params.cid });
    this.ajaxApiCall();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.cid !== this.props.match.params.cid) {
      this.ajaxApiCall();
    }
  }

  movingToSingleProduct = (e) => {
    this.props.history.push(`/product/${e.currentTarget.id}`);
  };

  movingToProductsFromNav = (e) => {
    e.preventDefault();
    disableScroll.off();
    this.props.history.push(`/products/${e.target.id}`);
  };

  render() {
    const productBoxRender = this.state.products.map((product) => {
      let productWeightOrPrice = `${product.productWeight} gram`;

      if (product.productPrice !== 0) {
        productWeightOrPrice = `₹ ${product.productPrice}`;
      }

      return (
        <ProductBox
          imgSource={`https://ambika-kadli.herokuapp.com/${product.productImages[1]}`}
          productName={product.productName}
          productWeightOrPrice={productWeightOrPrice}
          classContain={true}
          key={product._id}
          pid={product._id}
          movingToSingleProduct={this.movingToSingleProduct}
        />
      );
    });

    return (
      <React.Fragment>
        <Header
          categories={this.props.categories}
          movingToProductsFromNav={this.movingToProductsFromNav}
        />
        <div className="productsPageMain">
          <SectionTitle title="all products" />
          {productBoxRender}
        </div>
      </React.Fragment>
    );
  }
}

export default ProductsPage;
