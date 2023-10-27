import React from "react";
import AliceCarousel from "react-alice-carousel";
import { MainCaroselData } from "./MainCaroselData";
import "react-alice-carousel/lib/alice-carousel.css";

const Maincarosel = () => {
  const items = MainCaroselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    ></img>
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default Maincarosel;
