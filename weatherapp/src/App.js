import { useEffect } from "react";
import "./App.css";

import CityName from "./Components/CityName";
import { useSelector } from "react-redux";
import SearchResult from "./Components/SearchResult";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    document.title = "Get Weather";
  }, []);

  var searchStoreData = useSelector((state) => {
    return state.Search;
  });

  const cityStoreData = useSelector((state) => {
    return state.City;
  });

  const { searchResult } = searchStoreData;
  const { cityName } = cityStoreData;

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<CityName />} />
        <Route path="/searchResult/:cityName" element={<SearchResult />} />
        <Route path="/searchResult/lat/:lat/long/:long" element={<SearchResult />} />
        </Routes>
      {/* {Object.keys(searchResult).length === 0 ? <CityName /> : <SearchResult />} */}
      <ToastContainer position="bottom-center" icon={true} />
    </div>
  );
}

export default App;
