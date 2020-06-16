import React from "react";
import "./ProductBox.css";
const ProductBox = ({
  imgSource,
  productName,
  classContain,
  productWeight,
}) => {
  const boxClassName = classContain ? "wholeBox" : "box";
  return (
    <div className={boxClassName}>
      <div className="text-center">
        <div className="productImageDiv">
          <img src={imgSource} className="skillImage" alt="skill Images" />
        </div>
        <div className="productTitleDiv">
          <h3 className="skillTitle">{productName}</h3>
        </div>
        <div className="lastDiv">
          <div className="weightDiv">
            <h4 className="weight">{productWeight}</h4>
          </div>
          <div className="moveBtnDiv">
            <a className="moveBtn left" href="" role="button">
              <i className="fa fa-link leftSpan" aria-hidden="true"></i>
            </a>
            <a className="moveBtn right" href="" role="button">
              <i className="fa fa-whatsapp rightSpan" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
