import React from "react";
import styled from "styled-components";
import questionBtn from "../assets/images/question-btn.svg";
import deleteBtn from "../assets/images/delete-btn.svg";
import AnalogClock from "../pages/AnalogClock";
import DigitalClock from "../pages/DigitalClock";
import Calendar from "../pages/Calendar";
import PaintBoard from "../pages/PaintBoard";
import Weather from "../pages/Weather";
import ImageSlider from "../pages/ImageSlider";

export default function Main() {
  return (
    <MainStyle>
      <MainHeader>
        <h2>시계</h2>
        <MainBtns>
          <button type="button">
            <img src={questionBtn} alt="" />
          </button>
          <button type="button">
            <img src={deleteBtn} alt="" />
          </button>
        </MainBtns>
      </MainHeader>
      <AnalogClock />
      <DigitalClock />
      <Calendar />
      <PaintBoard />
      <Weather />
      <ImageSlider />
    </MainStyle>
  );
}

const MainStyle = styled.main`
  width: 95%;
  margin: 25px auto;
  background-color: var(--color-grey);
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  margin: 6.5px;
  padding: 0 8px;
  background-color: var(--color-blue);
  color: var(--color-white);
  font-size: 30px;

  img {
    width: 35px;
    height: 35px;
  }
`;

const MainBtns = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
`;
