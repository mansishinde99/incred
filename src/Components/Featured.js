import React from "react";
import "../Styles/Featured.css";

const featuredImages = [
  { img: "https://assets.incredmoney.com/images/webp/indExp.webp" },
  { img: "https://assets.incredmoney.com/images/webp/mint.webp" },
  { img: "https://assets.incredmoney.com/images/webp/buisline.webp" },
  { img: "https://assets.incredmoney.com/images/webp/forbes.webp" },
  { img: "https://assets.incredmoney.com/images/webp/moneycon.webp" },
  { img: "https://assets.incredmoney.com/images/webp/vccircle.webp" },
];

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="head">Featured In</h1>
      <div className="features">
        {featuredImages.map((featuredImage, i) => (
          <div className="featuredImages" key={i}>
            <img src={featuredImage.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
