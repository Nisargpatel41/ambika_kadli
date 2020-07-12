import React from "react";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ShareProduct from "./ShareProduct";

const ProductDetail = ({ linkValue, productObj, linkCopied, copid }) => {
  const price = () => {
    if (productObj.productPrice !== 0) {
      return (
        <tr>
          <th scope="row">Price </th>
          <td>{`₹ ${productObj.productPrice}`}</td>
        </tr>
      );
    }
  };

  const weight = () => {
    if (productObj.productWeight !== "0") {
      return (
        <tr>
          <th scope="row">Weight </th>
          <td>{`${productObj.productWeight}`}</td>
        </tr>
      );
    }
  };

  const touch = () => {
    if (productObj.productTouch !== 0) {
      return (
        <tr>
          <th scope="row">Touch </th>
          <td>{` ${productObj.productTouch}`}</td>
        </tr>
      );
    }
  };

  // else {
  //   return (
  //     <React.Fragment>
  //       <tr>
  //         <th scope="row">Touch </th>
  //         <td>{productObj.productTouch}</td>
  //       </tr>
  //       <tr>
  //         <th scope="row">Weight </th>
  //         <td>{productObj.productWeight} gram</td>
  //       </tr>
  //     </React.Fragment>
  //   );
  // }
  return (
    <div className="productDetailMain">
      <ShareProduct
        linkValue={linkValue}
        copid={copid}
        linkCopied={linkCopied}
      />

      <SectionTitle title="Product Details" />

      <div className="productDetailTableMain">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">Product Name </th>
              <td>{productObj.productName}</td>
            </tr>
            <tr>
              <th scope="row">Category </th>
              <td>{productObj.categoryName}</td>
            </tr>

            {price()}
            {touch()}
            {weight()}

            <tr>
              <th scope="row">Metal </th>
              <td>{productObj.productMetal}</td>
            </tr>
          </tbody>
        </table>
        <div className="buyNowDiv">
          <a
            href={`https://wa.me/919998538411?text=Hi Dharmendra, I Want to Buy this Product of Yours. ${linkValue} `}
            target="_blank"
            rel="noopener noreferrer"
            className="buyNowBtn"
          >
            Buy Now <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
