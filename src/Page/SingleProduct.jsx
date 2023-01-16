import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { showCase } from "../Storage/Arivsl";

export default function SingleProduct() {
  const [show, setShow] = useState([]);

  const filterItems = (id) => {
    const filterImage = showCase.filter((image) => image.id === id);
    console.log("image", filterImage);
  };

  const { id } = useParams();
  return (
    <>
      <div className="mt-16 lg:mx-20 mx-2 py-5">
        Sin{id}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="lg:px-10">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
              alt="Gallery image 1"
              className="h-[80vh] w-full"
            />
            <div className="flex">
              {showCase.map((item, id) => (
                <div
                  className="col-3 mt-1 pr-1"
                  key={id}
                  onClick={() => filterItems(item.id)}
                >
                  <img
                    src={item.image}
                    alt="Gallery image 4"
                    className="w-100"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste omnis
            aperiam excepturi adipisci totam vero debitis qui? Perspiciatis, vel
            quibusdam quas tenetur ipsum excepturi harum, recusandae libero
            sapiente illum commodi labore nobis cumque consequatur officia ullam
            minima voluptate repellendus tempora vero? Totam nesciunt eveniet
            iste nostrum hic officia ex assumenda laborum debitis voluptates
            quia, nam voluptate, omnis, delectus illo est facilis amet. Ea
            voluptatem ipsam, iure quia quos facilis hic numquam, error
            accusamus, nemo sapiente debitis deleniti saepe nesciunt quis ex
            tempore consequuntur nulla officia quibusdam atque qui voluptatibus
            sequi itaque. Voluptates, doloribus vitae similique quis deleniti
            dolorum omnis corrupti.
          </div>
        </div>
      </div>
    </>
  );
}
