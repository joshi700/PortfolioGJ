import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { alignPropType } from "react-bootstrap/esm/types";
import { FaAlignCenter } from "react-icons/fa";


const Carousel = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    fade: true,
    FaAlignCenter:true,
  };

  const images = [
    
    "https://github.com/joshi700/PortfolioGJ/blob/a14415fdeb4929b265e045a6c84706675d59455a/Portfolio-master/src/Assets/1.jpg",
    "https://github.com/joshi700/PortfolioGJ/blob/a14415fdeb4929b265e045a6c84706675d59455a/Portfolio-master/src/Assets/2.jpg",
    "https://github.com/joshi700/PortfolioGJ/blob/a14415fdeb4929b265e045a6c84706675d59455a/Portfolio-master/src/Assets/3.jpg",
    "https://github.com/joshi700/PortfolioGJ/blob/a14415fdeb4929b265e045a6c84706675d59455a/Portfolio-master/src/Assets/4.jpg",
    "https://github.com/joshi700/PortfolioGJ/blob/a14415fdeb4929b265e045a6c84706675d59455a/Portfolio-master/src/Assets/5.jpg",
    "https://github.com/joshi700/PortfolioGJ/blob/a14415fdeb4929b265e045a6c84706675d59455a/Portfolio-master/src/Assets/6.jpg",
    "https://github.com/joshi700/PortfolioGJ/blob/a14415fdeb4929b265e045a6c84706675d59455a/Portfolio-master/src/Assets/7.jpg",
  ];

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
