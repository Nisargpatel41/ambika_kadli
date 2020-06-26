import React, { Component } from "react";
import axios from "axios";
import Header from "../Common/Header/Header";
import ImageSlideShow from "./ImageSlideShow";
import ProductDetail from "./ProductDetail";
import ImageZoom from "../Common/ProductBox/ImageZoom";
import BackDrop from "../Common/Backdrop/Backdrop";

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

  imageZoomOpener = (e) => {
    this.setState({ imageModal: true, imgSrc: e.target.src });
  };

  imageZoomCloser = () => {
    this.setState({ imageModal: false, imgSrc: "" });
  };

  imageZoomRender() {
    if (this.state.imageModal) {
      return <ImageZoom imgSrc={this.state.imgSrc} />;
    } else return null;
  }

  render() {
    return (
      <React.Fragment>
        <Header categories={this.props.categories} />

        <div className="singleProductMain">
          <ImageSlideShow
            productImages={this.state.productImages}
            imageZoomOpener={this.imageZoomOpener}
          />
          <ProductDetail
            linkValue={this.state.linkValue}
            productObj={this.state.productObj}
            copid={this.state.copid}
            linkCopied={this.linkCopied}
          />
        </div>
        {this.imageZoomRender()}
        <BackDrop
          imageModal={this.state.imageModal}
          imageZoomCloser={this.imageZoomCloser}
        />
      </React.Fragment>
    );
  }
}

export default SingleProduct;
