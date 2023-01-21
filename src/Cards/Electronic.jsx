import React from "react";
import MultiCard from "./MultiCard";

export default function Electronic() {
  return (
    <>
      <div className=" mb-5 lg:mt-10 ">
        <div className="text-xl font-extrabold my-2">Electronic</div>
        <div className="grid grid-cols-2 ">
          <div className="shadow-lg rounded-lg mr-2 border-t-2 border-red-700">
            <img
              className="hover:opacity-100 hover:scale-105 ease-in-out duration-300 p-10"
              src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-trimode-720m-wireless-mouse/assets/mouse-aw720m-wh-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=4277&hei=3022&qlt=100,1&resMode=sharp2&size=4277,3022&chrss=full&imwidth=5000"
              alt=""
            />
            <div className="justify-center flex text-xs mb-2">
              <button className="bg-black text-white px-5 py-1 rounded-3xl">
                New Design
              </button>
            </div>
          </div>
          <MultiCard />
        </div>
      </div>
    </>
  );
}
