import React, { Component } from "react";
import Header from "../Common/Header/Header";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import InnerTitle from "../Common/InnerTitle/InnerTitle";
import ProductsMobileRender from "./ProductsMobileRender/ProductsMobileRender";
import ProductsDeskRender from "./ProductsDeskRender/ProductsDeskRender";
import preloader from "./loader.gif";
import disableScroll from "disable-scroll";
import axios from "axios";
import "./HomePage.css";

class HomePage extends Component {
  state = { categories: [], categoryWiseData: {}, preloader: false };

  async componentDidMount() {
    await axios.put("http://localhost:5000/api/views");
  }

  movingToSingleProduct = (e) => {
    this.props.history.push(`product/${e.currentTarget.id}`);
  };

  movingToProducts = (e) => {
    this.props.history.push(`products/${e.currentTarget.id}`);
  };

  movingToProductsFromNav = (e) => {
    e.preventDefault();
    disableScroll.off();
    this.props.history.push(`products/${e.target.id}`);
  };

  // preloaderFun = () => {
  //   return this.setState({ preloader: false });
  // };
  // this.preloaderFun();

  render() {
    const categoryWiseProducts = this.props.categories.map((category) => {
      return (
        <div key={category._id} className="categoryWiseProductsDiv">
          <InnerTitle title={category.categoryName} />
          <ProductsMobileRender
            categoryId={category._id}
            // categoryWiseData={this.state.categoryWiseData}
            movingToSingleProduct={this.movingToSingleProduct}
          />
          <div className="viewBtnDiv">
            <button
              className="viewBtn"
              id={category._id}
              onClick={this.movingToProducts}
            >
              View More
            </button>
          </div>
        </div>
      );
    });
    const categoryWiseDeskProducts = this.props.categories.map((category) => {
      return (
        <div key={category._id} className="categoryWiseDeskProductsDiv">
          <InnerTitle title={category.categoryName} />
          <ProductsDeskRender
            categoryId={category._id}
            // categoryWiseData={this.state.categoryWiseData}
            movingToSingleProduct={this.movingToSingleProduct}
          />
          <div className="viewBtnDiv">
            <button
              className="viewBtn"
              id={category._id}
              onClick={this.movingToProducts}
            >
              View More
            </button>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <Header
          categories={this.props.categories}
          movingToProductsFromNav={this.movingToProductsFromNav}
        />

        <div className="homePageMain">
          <div className="productsDiv">
            <SectionTitle title="Featured Products" />
            {this.state.preloader && (
              <div className="loaderDiv" id="loader">
                <div className="loaderContent">
                  <img src={preloader} className="loaderImg" alt="preloader" />
                </div>
              </div>
            )}
            {categoryWiseProducts}
            {categoryWiseDeskProducts}
          </div>
          <div className="aboutMeDiv">
            <SectionTitle title="About Me" />
            <div className="aboutMeTextDiv">
              <p className="aboutMeText">
                Hi, I'm Dharmendra Patel and I am Wholesaler merchant of Kadli,
                Kada, Lucky, Rakhadi etc. if you want to purchase any of the
                items which you have seen in my website contact me any time, if
                the items which you are looking for is available then you can
                purchase it or i will make it for you within few days.{" "}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
