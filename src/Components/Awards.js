import React from "react";
import "../Styles/Awards.css";

let Recs = [
  {
    img: "https://assets.incredmoney.com/images/webp/hdfcAwards.webp",
    text: "HDFC MUTUAL FUNDS",
    subText: "Top 10 wisest advisors in India, 2017",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/dellAwards.webp",
    text: "DELL",
    subText: "Winner of the Dell Startup Challenge",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/ibmAwards.webp",
    text: "IBM SMARTCAMP",
    subText: "Top 10 Indian early stage fintech startups",
  },
  {
    img: "https://assets.incredmoney.com/images/webp/ubsAwards.webp",
    text: "UBS",
    subText: "Top 10 Asia Fintech in the future of finance challenge",
  },
];

const Awards = () => {
  return (
    <div className="awards">
      <div className="awardsTitle">
        <h2>Awards & Recognition</h2>
      </div>
      <div className="awardsRow">
        {Recs.map((Rec, i) => {
          return <Recognition key={i} recog={Rec} />;
        })}
      </div>
    </div>
  );
};

const Recognition = (props) => {
  return (
    <div className="eachAward">
      <img src={props?.recog?.img} />
      <p className="text">{props?.recog?.text}</p>
      <p className="subText">{props?.recog?.subText}</p>
    </div>
  );
};

export default Awards;
