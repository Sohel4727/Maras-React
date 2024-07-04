import React from "react";
import buildingImg from "../assets/building.png";
import CustomBtn from "../../custom/CustomBtn";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 mb-8 md:mb-0 pl-4 md:pl-20">
        <p className="text-primary py-2 text-sm md:text-base">
          SUMMER VACATIONS
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-7xl w-full md:w-3/4 py-4">
          Luxury Hotel For Vacation.
        </h1>
        <p className="w-full md:w-3/4 py-4 text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor
        </p>
        <CustomBtn
          onClick={() => alert("Button Clicked!")}
          className="hover:bg-primary bg-white hover:text-white text-black"
        >
          Book Room
        </CustomBtn>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={buildingImg}
          width={600}
          className="w-full md:w-full "
          alt="banner-img"
        />
      </div>
    </div>
  );
};

export default Banner;
