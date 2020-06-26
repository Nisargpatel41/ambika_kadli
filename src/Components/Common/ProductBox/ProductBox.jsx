import React, { Component } from "react";
import disableScroll from "disable-scroll";
import ImageZoom from "./ImageZoom";
import BackDrop from "../Backdrop/Backdrop";
import "./ProductBox.css";

class ProductBox extends Component {
  state = {
    imageModal: false,
    imgSrc: "",
  };

  imageZoomOpener = (e) => {
    this.setState({ imageModal: true, imgSrc: e.target.src });
    // this.disableScroll(e);
    disableScroll.on();
  };

  imageZoomCloser = () => {
    this.setState({ imageModal: false, imgSrc: "" });
    disableScroll.off();
  };

  imageZoomRender() {
    if (this.state.imageModal) {
      return <ImageZoom imgSrc={this.state.imgSrc} />;
    } else return null;
  }

  render() {
    const {
      imgSource,
      productName,
      classContain,
      productWeightOrPrice,
      pid,
    } = this.props;

    const boxClassName = classContain ? "boxInline" : "box";

    const imageDivClassName = classContain
      ? "productImageDivInline"
      : "productImageDiv";
    const titleDivClassName = classContain
      ? "productTitleDivInline"
      : "productTitleDiv";
    const weightClassName = classContain ? "weightInline" : "weight";

    return (
      <React.Fragment>
        <div className={boxClassName}>
          {/* <div className="text-center"> */}
          <div className={imageDivClassName}>
            <img
              src={imgSource}
              onClick={this.imageZoomOpener}
              className="skillImage"
              alt="skill Images"
            />
          </div>
          <div
            className="remainingContent"
            id={pid}
            onClick={this.props.movingToSingleProduct}
          >
            <div className={titleDivClassName}>
              <h3 className="skillTitle">{productName}</h3>
            </div>
            <div className="lastDiv">
              <div className="weightDiv">
                <h4 className={weightClassName}>{productWeightOrPrice}</h4>
              </div>
              <div className="moveBtnDiv">
                {/* <a className="moveBtn left" href="" role="button">
                  <i className="fa fa-link leftSpan" aria-hidden="true"></i>
                </a>
                <a className="moveBtn
                 right" href="" role="button">
                  <i
                    className="fa fa-whatsapp rightSpan"
                    aria-hidden="true"
                  ></i>
                </a> */}
              </div>
            </div>
          </div>
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

export default ProductBox;
