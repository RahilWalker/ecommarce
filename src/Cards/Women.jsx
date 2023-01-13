import React, { useRef } from "react";
import { addCart, leftIcon, rightIcon } from "../Icons/MaterialIcons";
import { deals } from "../Storage/HotItems";

export default function Women() {
  const slideLeft = () => {
    var slider = document.getElementById("devil");
    slider.scrollLeft = slider.scrollLeft - 220;
  };

  const slideRight = () => {
    var slider = document.getElementById("devil");
    slider.scrollLeft = slider.scrollLeft + 220;
  };

  return (
    <>
      <div className="flex justify-between py-10 mt-10">
        <div className="text-xl font-extrabold mt-1">Women</div>
        <div className="text-xl font-extrabold">
          <div className="flex">
            <button
              className="  px-3 border roundem-sm py-1 opacity-40"
              onClick={slideLeft}
            >
              {leftIcon}
            </button>
            <button
              className="  px-3 border roundem-sm ml-3 opacity-40"
              onClick={slideRight}
            >
              {rightIcon}
            </button>
          </div>
        </div>
      </div>
      <div
        id="devil"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {deals.map((item, id) => (
          <div
            key={id}
            className=" inline-block whitespace-normal p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 "
          >
            <div className="rounded-lg bg-white shadow-lg text-center">
              <div>
                <img
                  className=" w-full lg:h-88  object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
                <div>Heart start</div>
                <div>procer</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
