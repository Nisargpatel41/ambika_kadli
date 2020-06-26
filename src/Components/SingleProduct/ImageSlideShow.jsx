import React from "react";

const ImageSlideShow = ({ productImages, imageZoomOpener }) => {
  let count = -1;
  let key = 0;
  const slideShowCounter = productImages.map((image) => {
    const activeClass = image.onScreen ? "active" : "";
    count += 1;
    return (
      <li
        key={count}
        data-target="#carouselExampleIndicators"
        data-slide-to={count}
        className={activeClass}
      ></li>
    );
  });
  const slideShowRender = productImages.map((image) => {
    const activeClass = image.onScreen ? "active" : "";
    key += 1;
    return (
      <div className={`carousel-item ${activeClass}`} key={key}>
        <img
          src={`http://localhost:5000/${image.imagePath}`}
          alt="Product img"
          className="slideShowImage"
          onClick={imageZoomOpener}
        />
      </div>
    );
  });
  return (
    <div className="imageSlideShowMain">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">{slideShowCounter}</ol>
        <div className="carousel-inner">{slideShowRender}</div>
      </div>
    </div>
  );
};

export default ImageSlideShow;
