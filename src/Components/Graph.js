import React from "react";
import "../Styles/Graph.css";

let logImages = [
  {
  img: "https://assets.incredmoney.com/images/webp/assetManagement.webp",
  text: "₹ 1,185+ Crs",
  subText: "Assets Under Management",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/avgReturns.webp",
    text: "10%-12% XIRR",
    subText: "Avg. Returns Earned",
    },
  {
  img: "https://assets.incredmoney.com/images/webp/ontimePayment.webp",
  text: "100%",
  subText: "On Time Payments",
  },
  {
  img: "https://assets.incredmoney.com/images/webp/investorCommunity.webp",
  text: "1.3 Lakhs+",
  subText: "Users",
  },
  
]

const Graph = () => {
  return (
    <div className="defaults">
     <div className="date">
      <p className="zero">0</p>
      <p className="dtd">Defaults till Date</p>
     </div>
     <div className="payments">
      {logImages.map((logImage) => (
        <div className="logImage">
          <img src={logImage.img}/>
          <p className="text">{logImage.text}</p>
          <p className="subtext">{logImage.subText}</p>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Graph;
