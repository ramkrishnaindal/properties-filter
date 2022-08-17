import React from "react";
import heart from "../assets/images/heart.svg";
import bed from "../assets/images/bed-svgrepo-com.svg";
import bath from "../assets/images/bathtub-svgrepo-com.svg";
// import { data } from "../assets/data/data";
const ImageCard = ({ data }) => {
  // console.log("arrImageIndex",arrImageIndex);
  return (
    <div className="p-10 bg-violet-50 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {data.map((item, index) => {
        // console.log(
        //   "'../assets/images/' + item + '.jpg'",
        //   "../assets/images/img" + item + ".jpg"
        // );
        const {
          title,
          state,
          price,
          propertyType,
          address,
          beds,
          bathrooms,
          area,
        } = item;
        const image = require("../assets/images/img" +
          ((index % 6) + 1) +
          ".jpg");
        return (
          <div
            key={index}
            className="bg-white rounded overflow-hidden shadow-lg "
          >
            <img className="w-full h-52" src={image} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="font-bold text-violet-400 text-xl mb-2">
                    {`$${price}`}
                  </div>
                  <div className="font-bold text-violet-400 text-xl mb-2">
                    /month
                  </div>
                </div>
                <div>
                  <img className="text-violet-400 text-9xl" src={heart} />
                </div>
              </div>
              <div className="font-bold text-xl mb-2">{title}</div>
              <div className="text-violet-400 text-sm">{address}</div> {" "}
              <div className="flex">
                <img className="text-violet-400 text-lg w-3 mr-2" src={bed} />
                <label className="mr-2 text-xs">{beds + " Beds"} </label>
                <img className="text-violet-400 text-lg w-3 mr-2" src={bath} />
                <label className="mr-2 text-xs">
                  {bathrooms + " Bathrooms"}{" "}
                </label>
                <img className="text-violet-400 text-lg w-3 mr-2" src={bath} />
                <label className="mr-2 text-xs">
                  {area + " m"}
                  <sup>2</sup>{" "}
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
