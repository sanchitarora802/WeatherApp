import React from "react";
import "./SearchResult.css";
import { BiArrowBack } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { CiTempHigh } from "react-icons/ci";
import {WiHumidity} from 'react-icons/wi'
import basicWeather from "../basicWeather.jpg";

function SearchResult({setSearch}) {
    const goBack = () => {
setSearch(true)
    }

  return (
    <div className="wrap">
      <div className="outerBox">
        <div className="headingDiv">
          <button className="headingButton">
            <BiArrowBack />
          </button>
          <h1 className="heading">Weather App</h1>
        </div>

        <div className="WeatherWrap">
          <div className="imagediv">
            <img
             onClick={goBack}
              className="WeatherImage"
              src={basicWeather}
              alt="Not Available"
            />
          </div>
          <div>
            <h1 className="Temp">13 C</h1>
          </div>
          <div>
            <h1 className="SubHead">Broken Clouds</h1>
          </div>
          <div className="loactionDiv">
            <GoLocation style={{ padding: "10px 0px 0px 0px" }} />
            <h1 className="Destination">Kathmandu, Nepal</h1>
          </div>
        </div>
        <div className="lastDiv">
          <div className="feelsLike">
            <CiTempHigh
              style={{ width: "24px", height: "24px", color: "#2EB9FA" }}
            />
            <div>
                <h1 className="Temp2">17 C </h1>
                <h1 className="Temp3">Feels Like</h1>
            </div>
          </div>
          <div className="vl"></div>
          <div className="humidity">
          <WiHumidity
              style={{ width: "24px", height: "24px", color: "#2EB9FA" }}
            />
            <div>
                <h1 className="Temp2">84%</h1>
                <h1 className="Temp3">Humidity</h1>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default SearchResult;
