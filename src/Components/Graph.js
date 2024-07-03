import React, { useEffect, useState } from "react";
import "../Styles/Graph.css";

const Graph = () => {
  const [logImages, setLogImages] = useState([]);

  useEffect(() => {
    const url = "https://api.incredmoney.com/content/stats";

    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const statsData = await resp.json();
        console.log("Fetched Data:", statsData);
        setLogImages(statsData.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="defaults">

      <div className="date">
        <p className="zero">
          <img src={logImages.imgUrl} />
        </p>
        <p className="dtd">{logImages.imgTitle}</p>
      </div>

      <div className="payments">
        {logImages.stats?.map((logImage, i) => (
          <div className="logImage" key={i}>
            <div className="image">
              <img src={logImage.imgUrl} alt="description" />
            </div>
            <p className="text">{logImage.text}</p>
            <p className="subtext">{logImage.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
