import React, { useState } from "react";
import FilterWrapper from "./FilterWrapper";
const SearchToolbar = (props) => {
  const [toolbarData, setToolbarData] = useState({});
  const onChange = (property, value) => {
    setToolbarData((prev) => ({ ...prev, [property]: value }));
    props.onChange({ ...toolbarData, [property]: value });
  };
  // console.log("toolbarData", toolbarData);
  return (
    <div className="px-10">
      <section className="px-5 pb-3 bg-white text-gray-600 body-font flex content-between gap-5">
        <div className=" bg-white sm:w-2.5/12 w-4/5">
          <FilterWrapper
            selectType="location"
            widthPerc="70"
            propertyType={toolbarData.propertyType}
            onChange={onChange.bind(null, "location")}
          />
        </div>
        <div className=" bg-white sm:w-2.5/12 w-4/5">
          <FilterWrapper
            selectType="when"
            widthPerc="50"
            propertyType={toolbarData.propertyType}
            onChange={onChange.bind(null, "when")}
          />
        </div>
        <div className=" bg-white sm:w-2.5/12 w-4/5">
          <FilterWrapper
            selectType="price"
            widthPerc="50"
            propertyType={toolbarData.propertyType}
            onChange={onChange.bind(null, "price")}
          />
        </div>
        <div className=" bg-white sm:w-2.5/12 w-4/5">
          <FilterWrapper
            selectType="propertyType"
            widthPerc="50"
            propertyType={toolbarData.propertyType}
            onChange={onChange.bind(null, "propertyType")}
          />
        </div>
        <div className=" bg-white w-2/12 flex items-end content-end">
          <div className=" flex-grow ">
            <button
              onClick={props.onSearch}
              className="bg-violet-500 hover:bg-violet-700 block ml-auto text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchToolbar;
