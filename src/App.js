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
  const [dataSelected, setDataSelected] = useState({});
  const [dataPassed, setDataPassed] = useState(originalData);
  const onChange = (value) => {
    console.log("value!!!", value);
    setDataSelected(value);

    console.log("dataPassed", dataPassed);
  };
  const onSearch = () => {
    let data1 = originalData;
    if (dataSelected?.location) {
      data1 = data1.filter((i) => i.state === dataSelected?.location);
      setDataPassed(data1);
    } else {
      setDataPassed(data1);
    }
    if (dataSelected?.propertyType) {
      data1 = data1.filter(
        (i) => i.propertyType === dataSelected?.propertyType
      );
      setDataPassed(data1);
    } else {
      setDataPassed(data1);
    }
    if (dataSelected?.price?.min) {
      data1 = data1.filter(
        (i) =>
          i.price >= dataSelected?.price?.min &&
          i.price <= dataSelected?.price?.max
      );
      setDataPassed(data1);
    } else {
      setDataPassed(data1);
    }
  };
  return (
    <div className="flex flex-col bg-violet-50">
      <SearchPropertiesToRent />
      <SearchToolbar onChange={onChange} onSearch={onSearch} />
      <ImageCard data={dataPassed} />
    </div>
  );
}

export default App;
