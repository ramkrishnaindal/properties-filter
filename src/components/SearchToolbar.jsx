import React from "react";
import FilterWrapper from "./FilterWrapper";
const SearchToolbar = () => {
  const arrImageIndex = [1, 2, 3, 4];
  return (
    <div className="px-10">
      <section className="px-5 pb-3 bg-white text-gray-600 body-font flex content-between gap-5">
        {arrImageIndex.map((item, index) => {
          return (
            <div key={index} className=" bg-white sm:w-1/5 w-4/5">
              <FilterWrapper widthPerc="50" />
            </div>
          );
        })}
        <div className=" bg-white w-1/5 flex items-end content-end">
          <div className=" flex-grow ">
            <button className="bg-violet-500 hover:bg-violet-700 block ml-auto text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchToolbar;
