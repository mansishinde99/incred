import React from "react";
import "../Styles/Stats.css";

let folds = [
  {
    img: "https://assets.incredmoney.com/images/webp/sebiRegulated.webp",
    text: "SEBI Regulated",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/stock.webp",
    text: "Bonds Listed On Exchanges",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/anytimeLiquidity.webp",
    text: "Anytime Liquidity",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/hiddenCharge.webp",
    text: "No Hidden Charges",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/inc.webp",
    text: "Curated By Experts",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/principalProtected.webp",
    text: "Excellent Customer Support",
  },
];

const Stats = () => {
  return (
    <div className="stats">
      <div className="statsTitle">
        <h1 className="head">Why invest with InCred Money?</h1>
      </div>
      <div className="statsFold">
        {folds.map((fold, i) => {
          return <StatFold key={i} folded={fold} />;
        })}
      </div>
    </div>
  );
};

const StatFold = (props) => {
  return (
    <div className="entirestats">
        <img src={props.folded.img} />
        <div className="textPart">
          <p className="text">{props.folded.text}</p>
        </div>
    </div>
  );
};

export default Stats;
