import React from "react";
import { Link } from "react-router-dom";
import { newData } from "../Storage/Arivsl";

export default function NewArrival() {
  return (
    <>
      <div className="py-10 mt-10 ">
        <div className="text-xl font-extrabold mb-10">New Arrivals</div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  ">
          {newData.map((item, id) => (
            <div className="px-5 mb-5 rounded-sm ">
              <div className="relative w-full  " key={id}>
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
        </div>
      </div>
    </>
  );
}
