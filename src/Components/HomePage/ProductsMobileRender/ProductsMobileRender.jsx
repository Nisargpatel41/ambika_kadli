import React, { Component } from "react";
// import Img1 from "../ProductImages/kadli1.jpg";
import ProductBox from "../../Common/ProductBox/ProductBox";
import axios from "axios";
import "./ProductsMobileRender.css";

class ProductsMobileRender extends Component {
  state = { products: [] };

  componentWillMount() {
    axios
      .get(
        `https://ambika-kadli.herokuapp.com/api/product/categoryWise/${this.props.categoryId}`
      )
      .then(({ data }) => {
        let tempArray = [];
        let finalArray = [];
        let booleanValue;
        tempArray = data;

        for (let i = 0; i < tempArray.length; i++) {
          if (i === 0) {
            booleanValue = true;
          } else {
            booleanValue = false;
          }

          finalArray.push({
            productObj: tempArray[i],
            onScreen: booleanValue,
          });
        }
        this.setState({ products: finalArray });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const productBoxRender = this.state.products.map((productWholeObj) => {
      const onScreen = productWholeObj.onScreen;
      const product = productWholeObj.productObj;

      const activeClass = onScreen ? "active" : "";

      let productWeightOrPrice = `${product.productWeight} gram`;

      if (product.productPrice !== 0) {
        productWeightOrPrice = `₹ ${product.productPrice}`;
      }

      return (
        <div className={`carousel-item ${activeClass}`} key={product._id}>
          <ProductBox
            imgSource={`https://ambika-kadli.herokuapp.com/${product.productImages[0]}`}
            productName={product.productName}
            productWeightOrPrice={productWeightOrPrice}
            classContain={false}
            pid={product._id}
            movingToSingleProduct={this.props.movingToSingleProduct}
          />
        </div>
      );
    });

    return (
      <div className="productsMobileRenderMain">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">{productBoxRender}</div>
          {/* <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a> */}
        </div>
      </div>
    );
  }
}

export default ProductsMobileRender;