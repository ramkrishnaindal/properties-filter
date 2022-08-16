import React from "react";
import FilterSelect from "./FilterSelect";
const FilterWrapper = (props) => {
  return (
    <div className="flex flex-col">
      <p className="text-gray-400">Location</p>
      <FilterSelect widthPerc={props.widthPerc} />
    </div>
  );
};

export default FilterWrapper;
