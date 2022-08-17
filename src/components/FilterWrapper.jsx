import React from "react";
import FilterSelect from "./FilterSelect";
const FilterWrapper = ({ selectType, propertyType, onChange, widthPerc }) => {
  return (
    <div className="flex flex-col">
      <p className="text-gray-400">
        {selectType.substr(0, 1).toUpperCase() +
          selectType.substr(1, selectType.length).toLowerCase()}
      </p>
      <FilterSelect
        propertyType={propertyType}
        selectType={selectType}
        widthPerc={widthPerc}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterWrapper;
