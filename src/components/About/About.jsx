import React from "react";
import aboutImg from "../assets/aboutImg.png";
import CustomBtn from "../../custom/CustomBtn";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={aboutImg}
          style={{ width: "500px" }}
          className="w-full md:w-full "
          alt="banner-img"
        />
      </div>
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 mb-8 md:mb-0 pl-4 md:pl-20">
        <p className="text-primary py-2 text-sm md:text-base">
          ABOUT ROYALKING
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-4xl w-full md:w-3/5 py-4">
          Luxury Hotel In the Heart of Saudi Arabia.
        </h1>
        <p className="w-full md:w-3/4 text-stone-500 py-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptas odit rerum corrupti explicabo, minima fugiat sint vero
          repudiandae, modi labore dicta? Sint incidunt nam mollitia deleniti
          vel molestias laborum? dolor
        </p>
        <CustomBtn
          onClick={() => alert("Button Clicked!")}
          className="hover:bg-primary bg-white hover:text-white text-black"
        >
          DISCOVER MORE
        </CustomBtn>
      </div>
    </div>
  );
};

export default About;
