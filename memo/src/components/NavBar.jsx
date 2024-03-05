import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconClock from "../assets/images/icon-clock.svg";
import iconWeather from "../assets/images/icon-weather.svg";
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconPaintBoard from "../assets/images/icon-paintboard.svg";
import iconSlider from "../assets/images/icon-slider.svg";

export default function NavBar() {
  return (
    <>
      <NavBarStyle>
        <li>
          <img src={iconClock} alt="" />
          <Link to="#">시계</Link>
        </li>
        <li>
          <img src={iconWeather} alt="" />
          <Link to="#">날씨</Link>
        </li>
        <li>
          <img src={iconCalendar} alt="" />
          <Link to="#">달력</Link>
        </li>
        <li>
          <img src={iconPaintBoard} alt="" />
          <Link to="#">그림판</Link>
        </li>
        <li>
          <img src={iconSlider} alt="" />
          <Link to="#">슬라이다</Link>
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
  }
`;
