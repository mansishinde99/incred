import React from "react";
import "../Styles/Graph.css";

const Graph = () => {
  return (
    <div className="graph">
      <div className="utImg">
        <a href="https://youtu.be/Kc-dchXkxrE">
          <img src="https://www.incredmoney.com/static/images/home/youtubeImg.png" />
        </a>
      </div>
      <div className="graphText">
        <h1 className="graphTitle">About InCred Money</h1>
        <p className="graphDesc">
          Democratizing Alternate Investments. Bringing you curated high yield
          investment opportunities, with a layer of safety.
        </p>
      </div>
    </div>
  );
};

export default Graph;
