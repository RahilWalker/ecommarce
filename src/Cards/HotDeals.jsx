import React from "react";
import {
  heartIcon,
  leftIcon,
  rightIcon,
  starIcon,
} from "../Icons/MaterialIcons";

export default function HotDeals() {
  return (
    <>
      <div className="flex justify-between py-5">
        <div className="text-xl font-extrabold">Hot Deals</div>
        <div className="text-xl font-extrabold">
          <div className="flex">
            {" "}
            <button className="  px-3 border roundem-sm py-1 opacity-40">
              {leftIcon}
            </button>
            <button className="  px-3 border roundem-sm ml-3 opacity-40">
              {rightIcon}
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-[50vh] md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2 hover:text-red-700">
                American Girls Jeans
              </h5>
              <div className="flex">
                <span className="text-red-600 pr-2 ">$25.00</span>{" "}
                <span className="opacity-25">
                  <s>$55.00</s>
                </span>
              </div>
              <div className="flex pb-2">
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}{" "}
              </div>
              <p className="text-gray-700 text-base mb-4 py-2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="flex">
                <button className="text-white bg-black py-2 px-3 mx-3">
                  {" "}
                  ADD TO CART
                </button>{" "}
                <button className="  px-3 border roundem-sm">
                  {heartIcon}{" "}
                </button>
                <button className="  px-3 border roundem-sm ml-3">
                  {heartIcon}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-[50vh] md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2 hover:text-red-700">
                American Girls Jeans
              </h5>
              <div className="flex">
                <span className="text-red-600 pr-2 ">$25.00</span>{" "}
                <span className="opacity-25">
                  <s>$55.00</s>
                </span>
              </div>
              <div className="flex pb-2">
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}{" "}
              </div>
              <p className="text-gray-700 text-base mb-4 py-2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="flex">
                <button className="text-white bg-black py-2 px-3 mx-3">
                  {" "}
                  ADD TO CART
                </button>{" "}
                <button className="  px-3 border roundem-sm">
                  {heartIcon}{" "}
                </button>
                <button className="  px-3 border roundem-sm ml-3">
                  {heartIcon}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
