import { useEffect } from "react";
import "./App.css";
import CityName from "./Components/CityName";
import { useSelector } from "react-redux";
import SearchResult from "./Components/SearchResult";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      {Object.keys(searchResult).length === 0 ? <CityName /> : <SearchResult />}
      <ToastContainer position="bottom-center" icon={true} />
    </div>
  );
}

export default App;
