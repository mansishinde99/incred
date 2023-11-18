import React, { useState } from "react";
import "../Styles/TextImg.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const texts = [
  {
    text1: "Better Risk Adjusted Returns",
    text2:
      "Get higher returns on your investments without taking on too much additional risk.",
  },
  {
    text1: "Diversify your Portfolio",
    text2:
      "Diversification is beneficial in minimizing the negative impact on your portfolio, especially when there are periods of high market volatility.",
  },
  {
    text1: "Beat Inflation",
    text2:
      "Investing in Corporate Bonds & MLDs can give a return that is significantly better than Bank FD’s and help you beat inflation.",
  },
];

const TextImg = () => {
  const [open, setOpen] = useState(new Array(texts.length));

  const opened = (index) => {
    const updatedOpen = [...open];
    updatedOpen[index] = !updatedOpen[index];
    setOpen(updatedOpen);
  };

  return (
    <div className="textImgContainer">
      <div className="textImgTitle">
        <p>Why Alternate Assets</p>
      </div>
      <div className="textImgBlock">
        <img src="https://assets.incredmoney.com/images/webp/altGraph.webp" />
        <div className="alltext">
          {texts.map((text, index) => (
            <div className="texts" key={index}>
              <p className="text1">
                {text.text1}
                <KeyboardArrowRightIcon
                  onClick={() => opened(index)}
                  style={{
                    transform: open[index] ? "rotate(90deg)" : "rotate(360deg)",
                    float: "right",
                    color: "gray",
                    fontSize: "35px",
                  }}
                />
              </p>
              {open[index] ? <p className="text2">{text.text2}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextImg;