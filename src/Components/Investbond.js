import React from 'react'
import "../Styles/Investbond.css"

let investbonds = [
    {
        img:"https://assets.incredmoney.com/images/webp/corporate.webp",
        title:"Corporate Bonds",
        text1: "0%-12% Fixed Returns",
        text2: "Investment Grade Rated Bonds",
        text3: "Secured & Listed",
    },
    {
        img:"https://assets.incredmoney.com/images/webp/ipo.webp",
        title:"NCD IPO",
        text1: "Invest Online up to 10L",
        text2: "No KYC Documents Required",
        text3: "Secured, Listed & Rated",
    },
    {
        img:"https://assets.incredmoney.com/images/webp/mld.webp",
        title:"Market Linked Debentures",
        text1: "100% Principal Protected",
        text2: "Nifty Linked",
        text3: "Secured, Listed & Rated",
    },
]

const Investbond = () => {
  return (
    <div className='investBonds'>
        <div className='bondsTitle'>
            <h1>Our Products</h1>
        </div>
        <div className='investsRow'>
            {investbonds.map((investbond, i) => {
                return <Investment key={i} invest= {investbond}/>
            })}
        </div>
    </div>
  )
};

const Investment = (props) => {
    return (
        <div className='entireBonds'>
            <img src={props.invest.img}/>
            <p>{props.invest.title}</p>
            <div className='lists'>
                <ul>
                <li>{props.invest.text1}</li>
                <li>{props.invest.text2}</li>
                <li>{props.invest.text3}</li>
                </ul>
                <button className='details'>View Details</button>
            </div>
        </div>
    )
}

export default Investbond