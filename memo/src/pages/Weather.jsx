import React from "react";
import styled from "styled-components";
import Sun from "../assets/images/01d.png";

export default function Weather() {
  return (
    <WeatherBox>
      <WeatherIcon>
        <img src={Sun} alt="" />
      </WeatherIcon>
      <WeatherInfo>
        <strong>Ansan</strong>
        <p>
          <span>9</span>° <span>/ </span>
          <span>12</span>°
        </p>
      </WeatherInfo>
    </WeatherBox>
  );
}

const WeatherBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const WeatherIcon = styled.div`
  width: 300px;
  height: 300px;

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
