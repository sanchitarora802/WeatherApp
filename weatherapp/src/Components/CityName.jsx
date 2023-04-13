import React from "react";
import "./CityName.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCityName } from "../store/slices/citySlice";
import { updateSearchResult } from "../store/slices/searchSlice";

function CityName() {
  var lat = "";
  var long = "";
  var url = "";

  const cityStoreData = useSelector((state) => {
    return state.City;
  });

  const { cityName } = cityStoreData;

  const dispatch = useDispatch();

  const getlocation = async () => {
    if (navigator.geolocation) {
      dispatch(updateCityName(''));
      const showPosition = async (position) => {
        lat = await position.coords.latitude;
        long = await position.coords.longitude;
        console.log("lat", lat, "long", long);
        fetchApiCityKey();
      }
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Sorry! your browser is not supporting");
    }
  };

  const fetchApiCityKey = async (event) => {
    if(event && event.preventDefault)
    event.preventDefault();
    try {
      const apiKey = "e50afef75fd38ff74b2fc831cda05c1d";
      if(cityName.length !== 0){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      }
      else{
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      }
      const res = await fetch(url);
      if(res.status === 200)
      {
        const resJson = await res.json();
        // console.log(resJson)
        dispatch(updateSearchResult(resJson));
        dispatch(updateCityName(""));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnChange = (e) => {
    if (e.target.name === "cityName") {
      dispatch(updateCityName(e.target.value));
    }
  };

  return (
    <div className="wrap">
      <div className="outerBox">
        <div className="headingDiv">
          <h1 className="heading">Weather App</h1>
        </div>
        <form onSubmit={fetchApiCityKey}>
          <div className="InputDiv">
            <input
              type="text"
              className="Textinput"
              name="cityName"
              placeholder="Enter City Name"
              onChange={handleOnChange}
              value={cityName}
              autoComplete="off"
            />
          </div>
          <div className="OrDiv">
            <h4 className="OrLine">
              <span>or</span>
            </h4>
          </div>
        </form>
        <div className="SubmitDiv">
          <button className="SubmitButton" onClick={getlocation}>
            Get Device Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityName;
