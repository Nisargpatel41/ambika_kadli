import React, { Component } from "react";
import axios from "axios";
import Header from "../Common/Header/Header";
import ImageSlideShow from "./ImageSlideShow";
import ProductDetail from "./ProductDetail";

import "./SingleProduct.css";
class SingleProduct extends Component {
  state = {
    productImages: [],
    productObj: {},
    linkValue: "",
    copid: false,
    imageModal: false,
    imgSrc: "",
  };
  componentWillMount() {
    axios
      .get(
        `https://ambika-kadli.herokuapp.com/api/product/${this.props.match.params.pid}`
      )
      .then((result) => {
        const productObj = result.data;

        this.setState({
          linkValue: `https://ambika-kadli.netlify.app${this.props.match.url}`,
        });

        let productImages = [];
        let finalArray = [];
        let booleanValue;
        productImages = result.data.productImages;

        for (let i = 0; i < productImages.length; i++) {
          if (i === 0) {
            booleanValue = true;
          } else {
            booleanValue = false;
          }

          // finalArray.push(finalObj);
          finalArray.push({
            imagePath: productImages[i],
            onScreen: booleanValue,
          });
        }
        this.setState({ productImages: finalArray, productObj });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  linkCopied = () => {
    this.setState({ copid: true });
    setInterval(() => {
      this.setState({ copid: false });
    }, 3000);
  };

  render() {
    return (
      <React.Fragment>
        <Header categories={this.props.categories} />

        <div className="singleProductMain">
          <ImageSlideShow productImages={this.state.productImages} />
          <ProductDetail
            linkValue={this.state.linkValue}
            productObj={this.state.productObj}
            copid={this.state.copid}
            linkCopied={this.linkCopied}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SingleProduct;
