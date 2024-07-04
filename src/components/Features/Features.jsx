import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Features = () => {
  const data = [1, 2, 3];
  return (
    <>
      <div className="w-full bg-slate-100 p-4">
        <p className="text-primary text-center my-2">EXCLUSIVE OFFERS</p>
        <h1 className="text-center my-4 text-xl md:text-2xl lg:text-3xl">
          Featured Special Offers
        </h1>
        <div className="w-full flex flex-col md:flex-row md:justify-around items-center ">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 lg:w-1/4 relative mb-8 md:mb-0"
            >
              <div className="absolute top-8 right-5 left-5  flex justify-center py-2">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f1/6e/89/exterior.jpg?w=1200&h=-1&s=1"
                  alt="img"
                  width={250}
                  className="z-20"
                />
              </div>
              <div className="flex justify-center items-center flex-col bg-white p-2 mt-36 pt-16 relative">
                <p className="py-4 text-lg md:text-xl">Kick of Summer in NYC</p>
                <p className="text-center text-xs md:text-base p-2 my-2 mb-8 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className=" hover:bg-primary hover:text-white cursor-pointer bg-white p-4 rounded-full flex justify-center items-center transition-colors duration-300 absolute -bottom-6 ">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
