import React from 'react';
import "../Styles/Investbond.css";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const investbonds = [
    {
        img: "https://assets.incredmoney.com/images/webp/corporate.webp",
        title: "Corporate Bonds",
        text1: "0%-12% Fixed Returns",
        text2: "Investment Grade Rated Bonds",
        text3: "Secured & Listed",
    },
    {
        img: "https://assets.incredmoney.com/images/webp/ipo.webp",
        title: "NCD IPO",
        text1: "Invest Online up to 10L",
        text2: "No KYC Documents Required",
        text3: "Secured, Listed & Rated",
    },
    {
        img: "https://assets.incredmoney.com/images/webp/mld.webp",
        title: "Market Linked Debentures",
        text1: "100% Principal Protected",
        text2: "Nifty Linked",
        text3: "Secured, Listed & Rated",
    },
    {
        img: "https://assets.incredmoney.com/images/webp/fd-products.webp",
        title: "Fixed Deposits",
        text1: "DICGC Insured",
        text2: "Paperless Process",
        text3: "Easy Withdrawal",
    },
];

const Investbond = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='investBonds'>
            <div className='bondsTitle'>
                <h1>Our Products</h1>
            </div>
            <div className='investsRow'>
                <Slider {...settings}>
                    {investbonds.map((investbond, i) => (
                        <Investment key={i} invest={investbond} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const Investment = (props) => {
    return (
        <div className='entireBonds'>
            <img src={props.invest.img} alt={props.invest.title} />
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
    );
};

export default Investbond;
