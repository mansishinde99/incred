import React from "react";
import "../Styles/Awards.css";

let Recs = [
  {
    img: "https://www.incredmoney.com/static/images/about/img_trophy_1.png",
    text: "HDFC MUTUAL FUNDS",
    subText: "Top 10 wisest advisors in India, 2017", 
},
{
    img: "https://www.incredmoney.com/static/images/about/img_trophy_2.png",
    text: "DELL",
    subText: "Winner of the Dell Startup Challenge", 
},
{
    img: "https://www.incredmoney.com/static/images/about/img_trophy_3.png",
    text: "IBM SMARTCAMP",
    subText: "Top 10 Indian early stage fintech startups", 
},
{
    img: "https://www.incredmoney.com/static/images/about/img_trophy_4.png",
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
        {Recs.map((Rec,i) => {
            return <Recognition key={i} recog = {Rec}/>
        })}
      </div>
    </div>
  );
};

const Recognition = (props) => {
    return(
        <div className="eachAward">
            <img src= {props.recog.img}/>
            <p className="text">{props.recog.text}</p>
            <p className="subText">{props.recog.subText}</p>
        </div>
    )
}

export default Awards;
