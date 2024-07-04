import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import StarRating from "../../custom/StartRating";
import CustomBtn from "../../custom/CustomBtn";
import { BiBorderRadius } from "react-icons/bi";
const RoomCard = () => {
  const data = [1, 2, 3];
  return (
    <>
      <div className="w-full bg-slate-100 p-4">
        <p className="text-primary text-center my-2">DISCOVER</p>
        <h1 className="text-center my-4 text-xl md:text-2xl lg:text-3xl">
          Rooms & Suites
        </h1>
        <div className="w-full flex flex-col md:flex-row md:justify-around items-center ">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 lg:w-1/4 relative mb-8 md:mb-0"
            >
              <div className="flex justify-center relative">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f1/6e/89/exterior.jpg?w=1200&h=-1&s=1"
                  alt="img"
                  width={305}
                  className=" object-cover"
                />
                <div className="absolute -bottom-4 text-xs font-bold rounded-full hover:text-white bg-white cursor-pointer hover:bg-primary py-2 px-4 z-10">
                  Start from{" "}
                  <strong className="hover:text-white text-primary">
                    $55.0
                  </strong>
                  /night
                </div>
              </div>
              <div className="flex justify-start items-start p-6 flex-col bg-white  ">
                <div className="mt-6 ">
                  <StarRating rating={4} />
                </div>
                <p className="py-4 text-lg md:text-xl">Luxury Room</p>
                <p className=" text-xs md:text-base  my-2 mb-8 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <CustomBtn
                  onClick={() => alert("Button Clicked!")}
                  className="hover:bg-primary bg-white hover:text-white text-black"
                  
                >
                  Book Now
                </CustomBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomCard;
