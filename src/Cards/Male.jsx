import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { addCart, leftIcon, rightIcon } from "../Icons/MaterialIcons";
import { deals } from "../Storage/HotItems";
import "../App.css";

export default function Male() {
  const [filterCategory, setFilterCategory] = useState([]);

  const filterItems = () => {
    const filteredProducts = deals.filter(
      (product) => product.category === "male"
    );
    // console.log("new", filteredProducts);
    setFilterCategory(filteredProducts);
  };
  // console.log(filterCategory);
  useEffect(() => {
    filterItems();
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("male");
    slider.scrollLeft = slider.scrollLeft - 280;
  };

  const slideRight = () => {
    var slider = document.getElementById("male");
    slider.scrollLeft = slider.scrollLeft + 280;
  };

  return (
    <>
      <div className="flex justify-between mb-5 lg:mt-10">
        <div className="text-xl font-extrabold mt-2">MEN</div>
        <div className="">
          <div className="lg:flex  hidden  ">
            <p className="px-1 text-red-400 hover:text-red-700 cursor-pointer text-md">
              Best Sellers
            </p>{" "}
            <span className="opacity-30">|</span>
            <p className="px-1 text-red-400 hover:text-red-700 cursor-pointer text-md">
              Best Sellers
            </p>
            <span className="opacity-30">|</span>{" "}
            <p className="px-1 text-red-400 hover:text-red-700 cursor-pointer text-md">
              Best Sellers
            </p>{" "}
            <span className="opacity-30">|</span>
            <p className="px-1 text-red-400 hover:text-red-700 cursor-pointer text-md">
              Best Sellers
            </p>
          </div>
        </div>
      </div>
      <div className="relative items-center hidden lg:flex">
        <div
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
        >
          {leftIcon}
        </div>
        <div
          id="male"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth invisible-scrollbar"
        >
          {/* {console.log("dddd", deals)} */}
          {filterCategory.map((item, id) => (
            <div
              key={id}
              className=" inline-block whitespace-normal p-2 cursor-pointer  hover:scale-105 ease-in-out duration-300 "
            >
              <Link to={`single/${id}`}>
                <div className="rounded-lg bg-white shadow-lg text-center relative">
                  <img
                    className=" w-full lg:h-72  object-cover md:w-64 opacity-80 hover:opacity-100 "
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
                  />
                  <div className="flex  -mt-16 left-8 absolute">
                    <button className="text-black bg-red-100 rounded-md py-1 px-3 mr-3 hidden lg:block">
                      <span>{item.add}</span>
                    </button>
                    <button className="bg-red-100 py-1 px-3 rounded-lg border roundem-sm ">
                      {item.wishlist}
                    </button>
                  </div>
                  <div className="py-5">
                    <div className="text-lg font-medium">{item.Product} </div>
                    <div className="flex  justify-center">
                      <span className="text-red-600 ">{item.price} </span>{" "}
                      <span className="opacity-30 pl-3">
                        <s>{item.droped} </s>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="opacity-50 cursor-pointer hover:opacity-100 "
          onClick={slideRight}
        >
          {rightIcon}
        </div>
      </div>
    </>
  );
}
