import ImageCard from "./components/ImageCard";
import SearchPropertiesToRent from "./components/SearchPropertiesToRent";
import SearchToolbar from "./components/SearchToolbar";
function App() {
  return (
    <div className="flex flex-col bg-violet-50">
      <SearchPropertiesToRent />
      <SearchToolbar />
      <ImageCard />
    </div>
  );
}

export default App;
