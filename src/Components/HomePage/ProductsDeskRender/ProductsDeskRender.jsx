import React, { Component } from "react";
import ProductBox from "../../Common/ProductBox/ProductBox";
import axios from "axios";

class ProductsDeskRender extends Component {
  state = { products: [] };

  componentWillMount() {
    axios
      .get(
        `https://ambika-kadli.herokuapp.com/api/product/categoryWise/${this.props.categoryId}`
      )
      .then(({ data }) => {
        this.setState({ products: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // componentWillMount() {
  //   this.setState({
  //     products: this.props.categoryWiseData[this.props.categoryId],
  //   });
  // }
  render() {
    const productBoxRender = this.state.products.map((product) => {
      let productWeightOrPrice = `${product.productWeight} gram`;

      if (product.productPrice !== 0) {
        productWeightOrPrice = `₹ ${product.productPrice}`;
      }

      return (
        <ProductBox
          imgSource={`https://ambika-kadli.herokuapp.com/${product.productImages[0]}`}
          productName={product.productName}
          productWeightOrPrice={productWeightOrPrice}
          classContain={true}
          key={product._id}
          pid={product._id}
          movingToSingleProduct={this.props.movingToSingleProduct}
        />
      );
    });

    return productBoxRender;
  }
}

export default ProductsDeskRender;
