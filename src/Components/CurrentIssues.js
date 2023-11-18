import React, { useEffect, useState } from "react";
import "../Styles/CurrentIssues.css";

const CurrentIssues = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://api.incredmoney.com/orobonds/bonds/")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  return (
    <div className="currentIssues">
      <h1 className="head">Current Issues</h1>
      <div className="bonds">
        {datas.data?.map((data) => {
          return data.soldOutTxt >= 1 && data.soldOutTxt <=10  ? (
            <div className="bondsCards" key={data.id}>
              <div class="progress">
                <div className="progress-bar" role="progressbar"></div>
              </div>
              <p className="soldout">{data.soldOutTxt}% sold out</p>
              <div className="logo-displayName">
                <img className="logo" src={data.logoUrl} />
                <p className="displayName">{data.displayName}</p>
              </div>
              <div className="mid">
                <li>Corporate Bond</li>
                <p className="issuer">Issuer: {data.productName}</p>
                <p className="desc">{data.description}</p>
              </div>
              <p className="maturity">Maturity Date: {data.maturityDate}</p>
              <div className="wrapper">
                <div className="content">
                <p className="text1">Min. Investment Amount</p>
                <p className="text2">₹{data.minAmt}</p>
                </div>
                <div className="content">
                <p className="text1">Credit Rating</p>
                <p className="text2">{data.rating}</p>
                </div>
                <div className="content">
                <p className="text1">Interest Payout</p>
                <p className="text2">{data.couponType}</p>
                </div>
                <div className="content">
                <p className="text1">Principal Repayment</p>
                <p className="text2">{data.principalRepayment}</p>
                </div>
              </div>
              <button className="details">View Details</button>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default CurrentIssues;
