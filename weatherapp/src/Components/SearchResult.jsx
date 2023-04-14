import React from "react";
import "./SearchResult.css";
import { BiArrowBack } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchResult } from "../store/slices/searchSlice";

function SearchResult() {

  var searchStoreData = useSelector((state) => {
    return state.Search;
  });

  const { searchResult } = searchStoreData;


  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(updateSearchResult({}));
  };

  return (
    <div className="wrap">
      <div className="outerBox">
        <div className="headingDiv">
          <button className="headingButton">
            <BiArrowBack onClick={goBack} />
          </button>
          <h1 className="heading">Weather App</h1>
        </div>

        <div className="WeatherWrap">
          <div className="imagediv">
            <img
              className="WeatherImage"
              src={`https://openweathermap.org/img/wn/${searchResult.weather[0].icon}@2x.png`}
              alt="Not Available"
            />
          </div>
          <div>
            <h1 className="Temp">{searchResult.main.temp}°C</h1>
          </div>
          <div>
            <h1 className="SubHead">{searchResult.weather[0].main}</h1>
          </div>
          <div className="loactionDiv">
            <GoLocation style={{ padding: "10px 0px 0px 0px" }} />
            <h1 className="Destination">{searchResult.name}, {searchResult.sys.country}</h1>
          </div>
        </div>
        <div className="lastDiv">
          <div className="feelsLike">
            <CiTempHigh
              style={{ width: "24px", height: "24px", color: "#2EB9FA" }}
            />
            <div>
              <h1 className="Temp2">{searchResult.main.feels_like}°C</h1>
              <h1 className="Temp3">Feels Like</h1>
            </div>
          </div>
          <div className="vl"></div>
          <div className="humidity">
            <WiHumidity
              style={{ width: "24px", height: "24px", color: "#2EB9FA" }}
            />
            <div>
              <h1 className="Temp2">{searchResult.main.humidity}%</h1>
              <h1 className="Temp3">Humidity</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
