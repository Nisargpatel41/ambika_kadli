import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Header from "../Common/Header/Header";
import ProductBox from "../Common/ProductBox/ProductBox";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import "./ProductsPage.css";

class ProductsPage extends Component {
  state = { products: [], redirect: false, categoryId: "", oldCid: "" };
  componentWillMount() {
    this.setState({ categoryId: this.props.match.params.cid });
    // if (this.state.categoryId !== this.state.oldCid) {
    //   console.log(this.state.categoryId);
    //   console.log(this.props.match.params.cid);
    // }
    // console.log(this.state.categoryId);

    // this.props.match.params.cid

    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ oldCid: this.props.match.params.cid });
    });
  }
  componentDidMount() {
    if (this.state.categoryId) {
      axios
        .get(
          `https://ambika-kadli.herokuapp.com/api/product/categoryWise/${this.state.categoryId}`,

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
  }
  componentWillUnmount() {
    this.unlisten();
  }
  movingToSingleProduct = (e) => {
    this.props.history.push(`/product/${e.currentTarget.id}`);
  };

  movingToProductsFromNav = (e) => {
    e.preventDefault();

    this.props.history.push(`/products/${e.target.id}`);
  };

  render() {
    // console.log(this.state.redirect);
    // this.setState({ redirect: false });

    // if (this.state.redirect) {
    //   return <Redirect to={`/products/${this.state.categoryId}`} />;
    // }
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
