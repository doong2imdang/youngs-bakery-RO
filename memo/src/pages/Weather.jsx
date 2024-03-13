import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [iconURL, setIconURL] = useState(null);

  const API_KEY = "7a6a90c96c3f2c1fd8fcfc41c610e8ff";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeather(latitude, longitude);
  };

  const fail = () => {
    alert("좌표를 받아올 수 없음");
  };

  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setWeatherData(json);

        const icon = json.weather[0].icon;
        const iconData = `https://openweathermap.org/img/w/${icon}.png`;
        setIconURL(iconData);
        console.log("icon", iconData);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <WeatherBox>
      {weatherData && iconURL && (
        <>
          <WeatherIcon>
            <img src={iconURL} alt="weather icon" />
          </WeatherIcon>
          <WeatherInfo>
            <strong>{weatherData.name.split("-")[0].trim()}</strong>
            <p>
              <span>{Math.round(weatherData.main.temp_min)}</span>°{" "}
              <span>/ </span>
              <span>{Math.round(weatherData.main.temp_max)}</span>°
            </p>
          </WeatherInfo>
        </>
      )}
    </WeatherBox>
  );
}

const WeatherBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const WeatherIcon = styled.div`
  width: 400px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const WeatherInfo = styled.div`
  text-align: center;

  strong {
    font-size: 80px;
  }

  p {
    font-size: 60px;
    margin-top: 20px;
  }
`;
