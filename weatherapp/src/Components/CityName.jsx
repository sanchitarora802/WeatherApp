import React, { useEffect } from "react";
import "./CityName.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCityName } from "../store/slices/citySlice";
import { updateSearchLoading, updateSearchResult } from "../store/slices/searchSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CityName() {
  var lat = "";
  var long = "";
  var url = "";

  const navigate = useNavigate();

   const cityStoreData = useSelector((state) => {
    return state.City;
  });

  const searchStoreData = useSelector((state) => {
    return state.Search;
  });

  const {searchLoading } = searchStoreData;
  const { cityName } = cityStoreData;

  const dispatch = useDispatch();

  const getlocation = async () => {
    dispatch(updateSearchLoading(true))
    if (navigator.geolocation) {
      dispatch(updateCityName(""));
      const showPosition = async (position) => {
        lat = await position.coords.latitude;
        long = await position.coords.longitude;
        // console.log("lat", lat, "long", long);
        fetchApiCityKey();
      };
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      toast.error("Sorry! your browser is not supporting");
    }
  };

  const fetchApiCityKey = async (event) => {
    if (event && event.preventDefault) event.preventDefault();
    try {
      const apiKey = "e50afef75fd38ff74b2fc831cda05c1d";
      if (cityName.length !== 0) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      }
      const res = await fetch(url);
      if (res.status === 200) {
        dispatch(updateSearchLoading(false))
        const resJson = await res.json();
        // console.log(resJson)
        window.localStorage.setItem('ApiRes',JSON.stringify(resJson))
        dispatch(updateSearchResult(resJson));
        if(cityName !== '')
        navigate(`/searchResult/${cityName}`)
        else
        navigate(`/searchResult/lat/${lat}/long/${long}`)
      } else {
        toast.error("Location Not Found");
      }
    } catch (e) {
      console.log(e)
      toast.error("Server Error. Please try Again after some time");
    }
  };

  const handleOnChange = async (e) => {
    // if (e.target.name === "cityName") {
      dispatch(updateCityName(e.target.value));
    // }
  };

   useEffect(()=>{
     if(cityName !== '')
    fetchApiCityKey()
  },[cityName])

  return (
    <div className="wrap">
      <div className="outerBox">
        <div className="headingDiv">
          <h1 className="heading">Weather App</h1>
        </div>
         {!searchLoading && <form onSubmit={fetchApiCityKey}>
          <div className="InputDiv">
            {/* <input
              type="text"
              className="Textinput"
              name="cityName"
              placeholder="Enter City Name"
              onChange={handleOnChange}
              value={cityName}
              autoComplete="off"
              required
            /> */}
            <select  className="Textinput"  onChange={handleOnChange}>
              <option value="">Select an option</option>
              <option value='delhi'>Delhi</option>
              <option value='goa'>goa</option>
              <option value='chennai'>chennai</option>
              <option value='Mumbai'>Mumbai</option>
            </select>
          </div>
          <div className="OrDiv">
            <h4 className="OrLine">
              <span>or</span>
            </h4>
          </div>
        </form>}
        <div className="SubmitDiv">
          <button disabled={searchLoading} className="SubmitButton" onClick={getlocation}>
          {searchLoading ? 'Fetching Location...' :'Get Device Location'}
          </button>
        </div>
        {searchLoading && 
      <div className="loadingDiv">
          <h1 className="loadingText">Click Allow And please Wait while we fetch your location !!</h1>
      </div>}
      </div>
    </div>
  );
}

export default CityName;