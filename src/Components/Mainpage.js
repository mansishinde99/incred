import React from "react";
import "../Styles/Mainpage.css";

const Mainpage = () => {
  return (
    <div className="main">
      <div className="jumbotron">
        <div className="primaryJumbotron">
          <div className="textSide">
            <p className="title">
              Get <span>10-12% </span>fixed returns
              <br /> on your Alternate Investments
            </p>
            <a className="subsButton" href="/signup">
              Sign Up
            </a>
            {/* <div className="note">
            <img src="https://www.incredmoney.com/static/images/home/gift-box.png" />
            <p>
              *Get 12.5% p.a. returns on 1st investment.<br/> Hurry, we're 90% sold
              out! *T&C apply.
            </p>
          </div> */}
          </div>
          <div className="imgSide">
            <img src="https://www.incredmoney.com/static/images/home/jumbotron-img.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
