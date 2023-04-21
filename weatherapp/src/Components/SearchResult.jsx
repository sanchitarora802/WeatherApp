import React, { useEffect } from "react";
import "./SearchResult.css";
import { BiArrowBack } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchResult } from "../store/slices/searchSlice";
import { updateCityName } from "../store/slices/citySlice";


function SearchResult() {

  useEffect(()=>{
    if(window)
    {
      const Res = window.localStorage.getItem('ApiRes')
      //console.log('res',JSON.parse(Res))
      if(Res !== '')
      dispatch(updateSearchResult(JSON.parse(Res)))
    }
  },[])

  const dispatch = useDispatch();

  const navigate = useNavigate();

  var searchStoreData = useSelector((state) => {
    return state.Search;
  });

  const { searchResult } = searchStoreData;

  const goBack = () => {
    dispatch(updateSearchResult({}))
    dispatch(updateCityName(''))
    navigate(-1)
  };

   return (
    <div className="wrap">
      <div className="outerBox">
        <div className="headingDiv">
          <button className="headingButton" onClick={goBack}>
            <BiArrowBack />
          </button>
          <h1 className="heading">Weather App</h1>
        </div>

        <div className="WeatherWrap">
          <div className="imagediv">
            { Object.keys(searchResult).length !== 0  && <img
              className="WeatherImage"
              src={`https://openweathermap.org/img/wn/${searchResult.weather[0].icon}@2x.png`}
              alt="Not Available"
            />}
          </div>
          <div>
          { Object.keys(searchResult).length !== 0  && <h1 className="Temp">{searchResult.main.temp}°C</h1>}
          </div>
          <div>
          { Object.keys(searchResult).length !== 0  && <h1 className="SubHead">{searchResult.weather[0].main}</h1>}
          </div>
          <div className="loactionDiv">
            <GoLocation style={{ padding: "10px 0px 0px 0px" }} />
            { Object.keys(searchResult).length !== 0  && <h1 className="Destination">{searchResult.name}, {searchResult.sys.country}</h1>}
          </div>
        </div>
        <div className="lastDiv">
          <div className="feelsLike">
            <CiTempHigh
              style={{ width: "24px", height: "24px", color: "#2EB9FA" }}
            />
            <div>
            { Object.keys(searchResult).length !== 0  && <h1 className="Temp2">{searchResult.main.feels_like}°C</h1>}
              <h1 className="Temp3">Feels Like</h1>
            </div>
          </div>
          <div className="vl"></div>
          <div className="humidity">
            <WiHumidity
              style={{ width: "24px", height: "24px", color: "#2EB9FA" }}
            />
            <div>
            {Object.keys(searchResult).length !== 0  && <h1 className="Temp2">{searchResult.main.humidity}%</h1>}
              <h1 className="Temp3">Humidity</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SearchResult;
