import { useEffect } from "react";
import "./App.css";
import CityName from "./Components/CityName";
import { useSelector } from "react-redux";
import SearchResult from "./Components/SearchResult";

function App() {
  useEffect(() => {
    document.title = "Get Weather";
  }, []);

  var searchStoreData = useSelector((state) => {
    return state.Search;
  });

  const { searchResult } = searchStoreData;

  return (
    <div className="App">
      {Object.keys(searchResult).length === 0 ? <CityName /> : <SearchResult/>}
    </div>
  );
}

export default App;
