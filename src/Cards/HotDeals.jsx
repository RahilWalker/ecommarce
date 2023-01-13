import React, { useRef } from "react";
import { addCart, leftIcon, rightIcon } from "../Icons/MaterialIcons";
import { deals } from "../Storage/HotItems";

export default function HotDeals() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="flex justify-between py-5 mt-10">
        <div className="text-xl font-extrabold">Hot Deals</div>
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
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {deals.map((item, id) => (
          <div
            key={id}
            className=" inline-block whitespace-normal p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 "
          >
            <div className="flex rounded-lg bg-white shadow-lg ">
              <div>
                <img
                  className=" w-full lg:h-88  object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                  alt=""
                />
              </div>
              <div className="p-6 flex flex-col justify-start w-[300px]">
                <h5 className="text-gray-900 text-xl font-medium mb-2 hover:text-red-700">
                  {item.Product}
                </h5>
                <div className="flex">
                  <span className="text-red-600 pr-2 ">{item.price} </span>{" "}
                  <span className="opacity-25">
                    <s>{item.droped} </s>
                  </span>
                </div>
                <div className="flex pb-2">{item.rate}</div>
                <p className="text-gray-700 text-base mb-4 py-2 hidden lg:block">
                  {item.about}
                </p>
                <div className="flex">
                  <button className="text-white bg-black py-1 px-3 mx-3 hidden lg:block">
                    <span>{item.add}</span>
                  </button>
                  <button className="py-1 px-3 mx-3 border rounded-lg block lg:hidden">
                    {item.mobile}
                  </button>
                  <button className=" py-1 px-3 rounded-lg border roundem-sm ">
                    {item.wishlist}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
