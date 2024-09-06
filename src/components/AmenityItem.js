import React from "react";
import { Col } from "react-bootstrap";

const AmenityItem = ({ imageSrc, altText, description }) => {
  return (
    <div
      className="amenity-item p-3 text-center mb-4"
      style={{
        backgroundColor: "rgba(189, 189, 189, 0.2)",
        borderRadius: "10px",
        width: "100%", 
        height:"50%",
      }}
    >
      <img src={imageSrc} alt={altText} className="img-fluid mb-2" />
      <p>{description}</p>
    </div>
  );
};

export default AmenityItem;
