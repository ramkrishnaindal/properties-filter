import React from "react";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const FilterSelect = (props) => {
  console.log("props", props);
  const { widthPerc } = props;

  return <Select className={`min-w-[${widthPerc || 30}%]`} options={options} />;
};

export default FilterSelect;
