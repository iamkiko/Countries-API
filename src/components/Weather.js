import React, { useState, useEffect } from "react";
import axios from "axios";
import countryStyles from "./country.module.scss";

const Weather = ({ country }) => {
  //initial state for weather
  const [weather, setWeather] = useState("");
  const [displayWeather, setDisplayWeather] = useState(false);

  //using API with the specific country capital name for weather as per docs
  useEffect(() => {
    const key = `68af2c5582e650e0dc1c65f6c3717d65`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${key}&units=metric`;

    axios.get(url).then(response => {
      // console.log("response.data: ", response.data);
      setWeather(response.data); //updating state based off JSON values
      setDisplayWeather(true); //updating state
    });
  }, [country.capital]); //we want to only fetch data when the component mounts -> the effect depends on the query so when changed, data request is fired

  //using conditional flow; a) if init state of displayWeather is true, show the details b) loading/fetching data
  return (
    <div>
      {!displayWeather ? (
        <p>Please wait...</p>
      ) : (
        <div>
          <h3>Weather in {country.capital}</h3>
          <p>
            <span className={countryStyles.detail}>Current temperature:</span>{" "}
            {weather.main.temp}c
          </p>
          <p>
            <span className={countryStyles.detail}>Min temp:</span>{" "}
            {weather.main.temp_min}c
          </p>
          <p>
            <span className={countryStyles.detail}>Max temp:</span>{" "}
            {weather.main.temp_max}c
          </p>
          <p>
            {" "}
            <span className={countryStyles.detail}>Conditions: </span>
            {weather.weather[0].description}
          </p>

          <p>
            <span className={countryStyles.detail}>Wind: </span>{" "}
            {weather.wind.speed} kph with a direction of {weather.wind.deg}{" "}
            degrees
          </p>
          <p>
            <span className={countryStyles.detail}>Cloud coverage:</span>{" "}
            {weather.clouds.all}%
          </p>
          <p>
            <span className={countryStyles.detail}>Humidity:</span>{" "}
            {weather.main.humidity}%
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
