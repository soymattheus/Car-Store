import React from "react";
import banner from "../../assets/img/mercedes.jpg";

const Banner = () => {
  return (
    <div>
      <img
        src={banner}
        style={{
          height: "auto",
          width: "100%",
          maxHeight: "25em",
          minHeight: "15em",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Banner;
