import React from "react";
import "./ImageZoom.css";

const ImageZoom = ({ imgSrc }) => {
  return (
    <div className="imageZoomMain">
      <img src={imgSrc} alt="zoom" className="zoomImage" />
    </div>
  );
};

export default ImageZoom;
