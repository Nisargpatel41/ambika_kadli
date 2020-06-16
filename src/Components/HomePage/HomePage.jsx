import React from "react";
import Header from "../Common/Header/Header";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import InnerTitle from "../Common/InnerTitle/InnerTitle";
import Kadli1 from "../../Images/ProductImages/kadli1.jpg";
import Kadli2 from "../../Images/ProductImages/kadli2.jpg";
import Kadli3 from "../../Images/ProductImages/kadli3.jpg";
import Kadli4 from "../../Images/ProductImages/kadli4.jpg";
import Kadli5 from "../../Images/ProductImages/kadli5.jpg";
import Kadli6 from "../../Images/ProductImages/kadli6.jpg";

import ProductBox from "../Common/ProductBox/ProductBox";

import "./HomePage.css";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="homePageMain">
        <SectionTitle title="Featured Products" />

        <InnerTitle title="Kadli" />
        <ProductBox
          imgSource={Kadli1}
          productName="92.5 Silver Kadli"
          productWeight="412.12 g"
        />
        <ProductBox
          imgSource={Kadli2}
          productName="92.5 Silver Kadli"
          productWeight="123.19 g"
        />
        <ProductBox
          imgSource={Kadli3}
          productName="92.5 Silver Kadli"
          productWeight="200 g"
        />
        <ProductBox
          imgSource={Kadli4}
          productName="92.5 Silver Kadli"
          productWeight="878.324 g"
        />
        <ProductBox
          imgSource={Kadli5}
          productName="92.5 Silver Kadli"
          productWeight="120.9 g"
        />
        <ProductBox
          imgSource={Kadli6}
          productName="92.5 Silver Kadli"
          productWeight="20 g"
        />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
