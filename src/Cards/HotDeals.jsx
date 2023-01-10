import React, { useState } from "react";
import { leftIcon, rightIcon } from "../Icons/MaterialIcons";
import { deals } from "../Storage/HotItems";

export default function HotDeals() {
  const [counter, setCounter] = useState(0);

  // console.log("ddd", dealsData);

  // const handleScroll = (id) => {
  //   var copyData = [...dealsData];
  //   if (copyData[id]["slide"]) {
  //     copyData[id]["slide"] = false;
  //   } else {
  //     copyData[id]["slide"] = true;
  //   }
  //   setDealsData(copyData);
  // };

  const handleScroll = () => {
    setCounter(counter + 1);
  };
  console.log(counter);
  return (
    <>
      <div className="flex justify-between py-5">
        <div className="text-xl font-extrabold">Hot Deals</div>
        <div className="text-xl font-extrabold">
          <div className="flex">
            <button className="  px-3 border roundem-sm py-1 opacity-40">
              {leftIcon}
            </button>
            <button
              onClick={() => handleScroll()}
              className="  px-3 border roundem-sm ml-3 opacity-40"
            >
              {rightIcon}
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden  grid grid-flow-col">
        {deals?.map((item, id) => (
          <>
            <div
              key={id}
              className={`flex  ${
                counter === id ? `-translate-x-[${item.slide}]` : ""
              } transition-all flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg w-[36rem] mr-5 ml-5`}
            >
              <img
                className=" w-full h-[50vh] md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={item.image}
                alt="product"
              />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2 hover:text-red-700">
                  {item.Product} {id}
                </h5>
                <div className="flex">
                  <span className="text-red-600 pr-2 ">{item.price} </span>{" "}
                  <span className="opacity-25">
                    <s>{item.droped} </s>
                  </span>
                </div>
                <div className="flex pb-2">{item.rate}</div>
                <p className="text-gray-700 text-base mb-4 py-2">
                  {item.about}
                </p>
                <div className="flex">
                  <button className="text-white bg-black py-2 px-3 mx-3">
                    {" "}
                    {item.add}
                  </button>{" "}
                  <button className="  px-3 border roundem-sm">
                    {item.wishlist}
                  </button>
                  <button className="  px-3 border roundem-sm ml-3">
                    {item.wishlist}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
