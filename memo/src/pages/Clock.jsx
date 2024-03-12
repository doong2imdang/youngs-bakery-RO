import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import analogClockBg from "../assets/images/analog-clock-bg.svg";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const updateClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (time) => {
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, "0");
    const day = String(time.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <>
      <AnalogBox>
        <AnalogBoxInner image={analogClockBg}>
          <AnalogTime>
            <Time
              hr
              angle={
                (time.getHours() % 12) * 30 + (time.getMinutes() / 60) * 30
              }
            ></Time>
          </AnalogTime>
          <AnalogTime>
            <Time mn angle={time.getMinutes() * 6}></Time>
          </AnalogTime>
          <AnalogTime>
            <Time sc angle={time.getSeconds() * 6}></Time>
          </AnalogTime>
        </AnalogBoxInner>
      </AnalogBox>
      <DigitalBox>
        <DigitalTime>{formatTime(time)}</DigitalTime>
        <DigitalDate>{formatDate(time)}</DigitalDate>
      </DigitalBox>
    </>
  );
}

const AnalogBox = styled.div`
  width: 362px;
  height: 362px;
  border: 11px solid #3f3f3f;
  background-color: var(--color-white);
  margin: 20px auto 0 auto;
  border-radius: 50%;
`;

const AnalogBoxInner = styled.div`
  width: 344px;
  height: 344px;
  border-radius: 50%;
  border: 3px solid #b0b0b0;
  margin: 6px auto 0 auto;
  position: relative;
  text-align: center;
  background-image: url(${analogClockBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    width: 13px;
    height: 13px;
    background-color: #f6cf73;
    position: absolute;
    border-radius: 50%;
    z-index: 30;
  }
`;

const AnalogTime = styled.div`
  position: absolute;
`;

const Time = styled.div`
  display: flex;
  justify-content: center;
  transform: rotateZ(${(props) => props.angle}deg);
  ${(props) =>
    props.hr &&
    css`
      width: 190px;
      height: 190px;
      &::before {
        content: "";
        position: absolute;
        width: 17px;
        height: 105px;
        background: black;
        z-index: 10;
        border-radius: 50px;
      }
    `}
  ${(props) =>
    props.mn &&
    css`
      width: 240px;
      height: 240px;
      &::before {
        content: "";
        position: absolute;
        width: 17px;
        height: 130px;
        background: #ec1a1a;
        z-index: 20;
        border-radius: 50px;
      }
    `}
    ${(props) =>
    props.sc &&
    css`
      width: 275px;
      height: 275px;
      &::before {
        content: "";
        position: absolute;
        width: 9px;
        height: 140px;
        background: black;
        z-index: 0;
        border-radius: 50px;
      }
    `};
`;

const DigitalBox = styled.div`
  width: 500px;
  height: 150px;
  margin: 50px auto 0 auto;
  box-shadow: inset 2px 2px 1px white, 2px 2px 1px black;
`;

const DigitalTime = styled.div`
  font-size: 90px;
  text-align: center;
`;

const DigitalDate = styled.div`
  font-size: 35px;
  text-align: center;
`;
