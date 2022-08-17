import React, { useState, useRef } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data, residential, commercial } from "../assets/data/data";
import calendar from "../assets/images/calendar.png";
const FilterSelect = (props) => {
  // console.log("data", data);
  const [startDate, setStartDate] = useState(null);
  const calendarRef = useRef();
  const [state, setState] = useState();
  const [price, setPrice] = useState();
  const [propertyTypeSelected, setPropertyTypeSelected] = useState();
  let component;
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const handleStateChange = (selectedOptions) => {
    setState(selectedOptions);
    props.onChange(selectedOptions.value);
  };
  const handlePriceChange = (selectedOptions) => {
    debugger;
    // console.log("priceSelected", selectedOptions);
    setPrice(selectedOptions);
    props.onChange(selectedOptions.value);
  };
  const handlePropertyTypeChange = (selectedOptions) => {
    setPropertyTypeSelected(selectedOptions);
    props.onChange(selectedOptions.value);
  };
  const openDatepicker = () => {
    calendarRef.current.setOpen(true);
  };
  const getUniqueStates = () => {
    let dataToUse;
    if (propertyType) {
      switch (propertyType) {
        case "Residential":
          dataToUse = residential;
          break;
        case "Commercial":
          dataToUse = commercial;
          break;
        default:
          dataToUse = data;
      }
    } else {
      dataToUse = data;
    }
    const states = dataToUse.map((a) => a.state).filter(onlyUnique);
    states.unshift("");
    // console.log("states", states);
    return states.map((i) => ({ label: i, value: i }));
  };
  // console.log("props", props);
  const { widthPerc, selectType, propertyType } = props;
  const priceRanges = [
    { label: "", value: {} },
    { label: "$100-$400", value: { min: 100, max: 400 } },
    { label: "$400-$700", value: { min: 400, max: 700 } },
    { label: "$1100-$1400", value: { min: 1100, max: 1400 } },
    { label: "$1400-$1700", value: { min: 1400, max: 1700 } },
    { label: "$2100-$2400", value: { min: 2100, max: 2400 } },
    { label: "$2400-$2700", value: { min: 2400, max: 2700 } },
  ];
  switch (selectType) {
    case "location":
      component = (
        <Select
          className={`min-w-[${widthPerc || 30}%]`}
          value={state}
          onChange={handleStateChange}
          options={getUniqueStates()}
        />
      );
      break;
    case "when":
      component = (
        <label
          style={{
            display: "flex",
            width: "100%",
            marginRight: 10,
            border: "1px solid lightgray",
            padding: 4,
          }}
        >
          <DatePicker
            placeholderText={"Select move-in date"}
            selected={startDate}
            ref={calendarRef}
            style={{ width: "80%" }}
            onChange={(date) => {
              setStartDate(date);
              props.onChange(date);
            }}
          />
          <img
            style={{ width: 50, height: 30 }}
            src={calendar}
            onClick={openDatepicker}
          />
        </label>
      );
      break;
    case "price":
      component = (
        <Select
          className={`min-w-[${widthPerc || 30}%]`}
          options={priceRanges}
          value={price}
          onChange={handlePriceChange}
        >
          <p>{price}</p>
        </Select>
      );
      break;
    case "propertyType":
      component = (
        <Select
          className={`min-w-[${widthPerc || 30}%]`}
          options={[
            { label: "", value: "" },
            { label: "Residential", value: "Residential" },
            { label: "Commercial", value: "Commercial" },
          ]}
          value={propertyTypeSelected}
          onChange={handlePropertyTypeChange}
        />
      );
      break;
  }

  return component;
};

export default FilterSelect;
