import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const display = useSelector(selectDisplay);

  useEffect(() => {
    // Define the API endpoint and parameters
    const apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json";
    const headers = {
      'X-RapidAPI-Key': '91f42443b6msh46b27c1469077f3p1c2a60jsn303e207197a4', // Replace with your actual RapidAPI key
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    };
    const params = {
      q: `${display.capitalInfo.latlng[0]},${display.capitalInfo.latlng[1]}`,
    };

    // Make the API request using Axios
    axios
      .get(apiUrl, { headers, params })
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [display]); // Dependency array includes display to update weather when display changes

  return (
    <div>
      <h2>Weather in {display.capital}</h2>
      {weather ? (
        <table className="overview-table">
          <tbody>
            <tr>
              <td>Conditions: {weather.current.condition.text}</td>
            </tr>
            <tr>
              <td>Temperature: {weather.current.temp_c}°C</td>
            </tr>
            <tr>
              <td>Feels Like: {weather.current.feelslike_c}°C</td>
            </tr>
            <tr>
              <td>Humidity: {weather.current.humidity}%</td>
            </tr>
            <tr>
              <td>Wind Speed: {weather.current.wind_kph} km/h</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
