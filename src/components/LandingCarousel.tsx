"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const LandingCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/Carousel1.png",
    },
    {
      id: 1,
      img: "/Carousel2.png",
    },
    {
      id: 2,
      img: "/Carousel3.png",
    },
  ];

  return (
    <div className="flex justify-center items-center w-11/12 overflow-hidden">
      <div className="container m-3 mb-5 md:m-5 ">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingCarousel;
