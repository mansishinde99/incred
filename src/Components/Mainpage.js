import React from "react";
import "../Styles/Mainpage.css";

let featureLists = [
  {
    img: "https://assets.incredmoney.com/images/webp/bond.webp",
    title: "High Yeilds Bonds",
    text: "10-12%  p.a.",
    subtext: "Fixed Returns",  
  },
  {
    img: "https://assets.incredmoney.com/images/webp/mld.webp",
    title: "MLDs",
    text: "Equity Upside with",
    subtext: "100% Principal Protection",  
  },
  {
    img: "https://assets.incredmoney.com/images/webp/fd-icon.webp",
    title: "Fixed Deposits",
    text: "Upto 9.10% interest p.a.*",
    subtext: "RBI Regulated",  
  },
  
]

const Mainpage = () => {
  return (
    <div className="main">
      <div className="jumbotron">
        {/* <div className="primaryJumbotron"> */}
          <div className="textSide">
            <p className="title">
            <span>Diversify </span><br/>with Confidence
            </p>
            <div className="featureList">
              {featureLists.map((featureList, i)=> (
                <div className="feature" key={i}>
                  <div className="featureImage">
                  <img className="image" src={featureList.img}/>
                  </div>
                  <div className="textpart">
                  <p className="featuretitle">{featureList.title}</p>
                  <p className="text">{featureList.text}</p>
                  <p className="subtext">{featureList.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="two-buttons">
              <div className="get-started">Get Started</div>
              {/* <div className="watch-video">
              <PlayCircleFilledOutlinedIcon/>
              <div>Watch Video</div>
              </div> */}
            </div>
          </div>
          <div className="imgSide">
            <img src="https://assets.incredmoney.com/images/webp/girlArrowWeb.webp" />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Mainpage;
