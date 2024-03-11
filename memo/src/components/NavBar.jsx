import React from "react";
import styled from "styled-components";
import iconClock from "../assets/images/icon-clock.svg";
import iconWeather from "../assets/images/icon-weather.svg";
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconPaintBoard from "../assets/images/icon-paintboard.svg";
import iconSlider from "../assets/images/icon-slider.svg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const handlePage = (item) => () => {
    navigate(`/${item}`);
  };
  return (
    <>
      <NavBarStyle>
        <li onClick={handlePage("clock")}>
          <img src={iconClock} alt="" />
          시계
        </li>
        <li onClick={handlePage("weather")}>
          <img src={iconWeather} alt="" />
          날씨
        </li>
        <li onClick={handlePage("calendar")}>
          <img src={iconCalendar} alt="" />
          달력
        </li>
        <li onClick={handlePage("paintboard")}>
          <img src={iconPaintBoard} alt="" />
          그림판
        </li>
        <li onClick={handlePage("imageslider")}>
          <img src={iconSlider} alt="" />
          슬라이다
        </li>
      </NavBarStyle>
    </>
  );
}

const NavBarStyle = styled.nav`
  background-color: #000000;
  width: 220px;
  grid-area: navbar;
  height: calc(100vh - 80px);
  padding-left: 20px;

  li {
    font-size: 30px;
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 25px;
    cursor: pointer;
  }
`;
