import React from "react";
import "../Styles/Testimonials.css";
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    text: "Corporate bonds were completely new to me. I saw their ad & signed up. I liked the intensive mitigations and promoter backing which gave me confidence to invest.",
    name: "George Liju",
  },
  {
    text: "These guys have a good track record, so it was a no-brainer for me to invest about 4 lakhs in their first issue. I'll also recommend to my family & friends to invest.",
    name: "Lakshminarayanan Iyer",
  },
  {
    text: "All information required for me to invest has been laid out in a transparent manner. Webinar has helped me take an informed decision.",
    name: "Nidhi Agarwal",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="head">Testimonials</h1>
      <p>What our patrons have to talk about us</p>
      <div className="patrons">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="data">
                <img className="coma1" src="https://assets.incredmoney.com/images/webp/ExcStart.webp"/>
                <p className="said">{testimonial.text}</p>
                <p className="by">{testimonial.name}</p>
                <span>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </span>
                <img className="coma2" src="https://assets.incredmoney.com/images/webp/ExcEnd.webp"/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
