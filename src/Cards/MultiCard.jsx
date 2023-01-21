import React, { useEffect, useRef, useState } from "react";
import { leftIcon, rightIcon } from "../Icons/MaterialIcons";
import { deals } from "../Storage/HotItems";
import { Link } from "react-router-dom";

function MultiCard() {
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
    <div>
      <div className="relative items-center hidden lg:flex mt-5">
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
              className=" inline-block whitespace-normal p-2 cursor-pointer  "
            >
              <Link to={`single/${id}`}>
                <div className="rounded-lg bg-white shadow-lg text-center relative">
                  <img
                    className=" w-full lg:h-72  object-cover md:w-64 opacity-80 hover:opacity-100 hover:scale-105 ease-in-out duration-300  "
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

      {/* <div className="shadow-lg rounded-lg mr-2 border-t-2 border-red-700 my-10">
      <div className="flex justify-center">
        <img
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-trimode-720m-wireless-mouse/assets/mouse-aw720m-wh-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=4277&hei=3022&qlt=100,1&resMode=sharp2&size=4277,3022&chrss=full&imwidth=5000"
          alt=""
          className="h-40 "
        />
      </div>
      <div className="flex justify-center py-2 text-sm font-extrabold opacity-40">
        Discount of The Week
      </div>
    </div> */}
      {/* <div className="shadow-lg rounded-lg mr-2 border-t-2 border-red-700 my-10">
      <div className="flex justify-center">
        <img
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-trimode-720m-wireless-mouse/assets/mouse-aw720m-wh-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=4277&hei=3022&qlt=100,1&resMode=sharp2&size=4277,3022&chrss=full&imwidth=5000"
          alt=""
          className="h-40 "
        />
      </div>
      <div className="flex justify-center py-2 text-sm font-extrabold opacity-40">
        Discount of The Week
      </div>
    </div> */}
      {/* <div className="shadow-lg rounded-lg mr-2 border-t-2 border-red-700 my-10">
      <div className="flex justify-center">
        <img
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-trimode-720m-wireless-mouse/assets/mouse-aw720m-wh-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=4277&hei=3022&qlt=100,1&resMode=sharp2&size=4277,3022&chrss=full&imwidth=5000"
          alt=""
          className="h-40 "
        />
      </div>
      <div className="flex justify-center py-2 text-sm font-extrabold opacity-40">
        Discount of The Week
      </div>
    </div> */}
    </div>
  );
}

export default MultiCard;
