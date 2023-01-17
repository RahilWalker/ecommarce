import React from "react";
import { Link } from "react-router-dom";
import { newData, showCase } from "../Storage/Arivsl";

export default function NewArrival() {
  return (
    <>
      <div className="py-10  ">
        <div className="text-xl font-extrabold mb-10">New Arrivals</div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="grid justify-center shadow-lg rounded-lg p-5 mx-2 ">
            <div className="text-center">
              <div className="font-extrabold">Coming Soon</div>
              <img
                className="w-full h-40"
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380435/04/sv04/fnd/IND/fmt/png/Electron-E-Unisex-Shoes"
                alt="shoe"
              />
              <div className="text-xs text-red-500 hover:text-red-700">
                <Link to="">LEARN MORE</Link>
              </div>
            </div>
          </div>
          <div className="grid px-4 shadow-lg rounded-lg ">
            <span className="text-sm font-extrabold text-center">
              Discounts of the Week
            </span>
            <div className="grid grid-cols-2 pt-2 h-[240px]">
              {showCase.map((item, id) => (
                <div className="pr-2 rounded-sm text-center" key={id}>
                  <img className="h-20 w-full" src={item.image} alt="" />
                  <span className="text-xs">{item.data} </span>
                </div>
              ))}
            </div>
            <span className="text-sm text-center text-red-500 hover:text-red-700">
              <Link to=""> Shop</Link>
            </span>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  ">
          {newData.map((item, id) => (
            <div className="px-5 mb-5 rounded-sm " key={id}>
              <div className="relative w-full  ">
                {" "}
                <img
                  className="h-[250px] w-full hidden lg:block"
                  src={item.image}
                  alt="image"
                />
                <div className="lg:px-10 w-full relative  lg:absolute  justify-center text-center items-center">
                  <div className="h-28 lg:h-36 lg:-mt-8 rounded-md  border-red-400 border-4 font-extrabold text-center ">
                    <p className="text-lg lg:text-2xl mt-7 lg:mt-12 first-letter:capitalize ">
                      {item.data}{" "}
                    </p>
                    <Link
                      className="text-red-500 hover:text-red-700"
                      to={item.link}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
