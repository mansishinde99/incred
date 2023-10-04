import React from "react";
import "../Styles/Stats.css";

let folds = [
  {
    img: "https://www.incredmoney.com/static/images/home/volume.png",
    text: "₹1,170+ Cr",
    subtext: "AUM (Assets Under Management)",
  },
  {
    img: "https://www.incredmoney.com/static/images/home/return.png",
    text: "10-12% XIRR",
    subtext: "Avg returns (p.a.) earned",
  },
  {
    img: "https://www.incredmoney.com/static/images/home/date.png",
    text: "0",
    subtext: "Defaults till date",
  },
  {
    img: "https://www.incredmoney.com/static/images/home/group.png",
    text: "100%",
    subtext: "On-time payments",
  },
];

const Stats = () => {
  return (
    <div className="stats">
      <div className="statsTitle">
        <h1>Join our community of 1,00,000+ investors</h1>
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
          <p className="subText">{props.folded.subtext}</p>
        </div>
    </div>
  );
};

export default Stats;
