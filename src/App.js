import { useState } from "react";
import ImageCard from "./components/ImageCard";
import SearchPropertiesToRent from "./components/SearchPropertiesToRent";
import SearchToolbar from "./components/SearchToolbar";
import {
  data as originalData,
  residential,
  commercial,
} from "./assets/data/data";
function App() {
  // const [dataSelected, setDataSelected] = useState({});
  const [dataPassed, setDataPassed] = useState(originalData);
  const onChange = (value) => {
    console.log("value!!!", value);
    // setDataSelected(value);
    let data1 = originalData;
    if (value?.location) {
      data1 = data1.filter((i) => i.state === value?.location);
      setDataPassed(data1);
    } else {
      setDataPassed(data1);
    }
    if (value?.propertyType) {
      data1 = data1.filter((i) => i.propertyType === value?.propertyType);
      setDataPassed(data1);
    } else {
      setDataPassed(data1);
    }
    if (value?.price?.min) {
      data1 = data1.filter(
        (i) => i.price >= value?.price?.min && i.price <= value?.price?.max
      );
      setDataPassed(data1);
    } else {
      setDataPassed(data1);
    }
    console.log("dataPassed", dataPassed);
  };

  return (
    <div className="flex flex-col bg-violet-50">
      <SearchPropertiesToRent />
      <SearchToolbar onChange={onChange} />
      <ImageCard data={dataPassed} />
    </div>
  );
}

export default App;
