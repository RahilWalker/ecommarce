import React, { useState } from "react";
import { showCase } from "../Storage/Arivsl";

export default function Electronic() {
  const [show, setShow] = useState([]);

  const filterItems = (id) => {
    const filteredData = showCase.filter((item) => item.id === id);
    // console.log("new", filteredData);
    setShow(filteredData);
  };
  return (
    <>
      <div className="mt-16 lg:mx-20 mx-2 py-5">
        <div class="ecommerce-gallery vertical">
          <div class="grid grid-cols-1 lg:grid-cols-2  ">
            <div class="multi-carousel vertical flex">
              <div class="multi-carousel-inner">
                {showCase.map((item, id) => (
                  <div
                    class="multi-carousel-item active "
                    key={id}
                    onClick={() => filterItems(item.id)}
                  >
                    <img
                      src={item.image}
                      alt="Table Full of Spices"
                      className="active w-[180px] p-1"
                    />
                  </div>
                ))}
              </div>
              <div className="h-full">
                {" "}
                {show.map((item, id) => (
                  <div key={id}>
                    <img
                      src={item.image}
                      alt="Gallery image 1"
                      className="ecommerce-gallery-main-img active py-1 w-full h-full cover "
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quae. Sequi ad molestiae animi sunt modi quaerat
              voluptas illo, quasi necessitatibus, aliquam officia esse dolor
              culpa nam libero. Fugit cumque aspernatur at suscipit maxime
              tempora quae aut unde recusandae quibusdam possimus, ad neque
              ratione velit placeat. Nam error natus explicabo.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
