import React, { useEffect, useState } from 'react';
import '../Styles/Voucher.css'

//url: "https://api.incredmoney.com/funds/getBannerData";


const Voucher = () => {
  const[alldata,setAlldata] = useState([])

  useEffect(() => {
    fetch("https://api.incredmoney.com/funds/getBannerData")
      .then((response) => response.json())
      .then((json) => setAlldata(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='voucherStrip'>
          {alldata.data?.map((data,i) => (
            <div className='voucherAlert' key={i}>
            <p className='text'>{data.bannerText}</p>
        </div>
          ))}
    </div>
  )
}

export default Voucher