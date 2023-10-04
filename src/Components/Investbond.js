import React from 'react'
import "../Styles/Investbond.css"

let investbonds = [
    {
        img:"https://www.incredmoney.com/static/images/home/portfolio.png",
        desc:"Diversify your portfolio, beat inflation & build a passive income"
    },
    {
        img:"https://www.incredmoney.com/static/images/home/listed.png",
        desc:"Listed, Secured, and Credit Rated"
    },
    {
        img:"https://www.incredmoney.com/static/images/home/curated.png",
        desc:"Curated by a team of experts with decades of experience in credit research"
    },
]

const Investbond = () => {
  return (
    <div className='investBonds'>
        <div className='bondsTitle'>
            <h1>Invest in Bonds</h1>
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
            <p>{props.invest.desc}</p>
        </div>
    )
}

export default Investbond