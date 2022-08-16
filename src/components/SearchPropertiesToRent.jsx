import React from "react";
import FilterSelect from "./FilterSelect";
const SearchPropertiesToRent = () => {
  return (
    <div className="px-10 mt-10">
      <div className="px-5 bg-white flex justify-between py-5">
        <h2 className="text-3xl bg-white">Search properties to rent</h2>
        <FilterSelect />
      </div>
    </div>
  );
};

export default SearchPropertiesToRent;
