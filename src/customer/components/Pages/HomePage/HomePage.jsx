import React from "react";
import Maincarosel from "../../HomeCarosel/Maincarosel";
import HomeSectioncarosel from "../../HomeSectionCarosel/HomeSectioncarosel";
import { mens_kurta } from "../../../../Data/mens_kurta";
export default function HomePage() {
  return (
    <div className="">
      <Maincarosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 ">
        <HomeSectioncarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectioncarosel data={mens_kurta} sectionName={"Men's Shoose"}/>
        <HomeSectioncarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectioncarosel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectioncarosel data={mens_kurta} sectionName={"Women's Dress"}/>
      

        
      </div>
    </div>
  );
}
