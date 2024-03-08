import React from "react";
import styled, { css } from "styled-components";
import analogClockBg from "../assets/images/analog-clock-bg.svg";

export default function AnalogClock() {
  return (
    <AnalogBox>
      <AnalogBoxInner image={analogClockBg}>
        <AnalogTime>
          <Time hr></Time>
        </AnalogTime>
        <AnalogTime>
          <Time mn></Time>
        </AnalogTime>
        <AnalogTime>
          <Time sc></Time>
        </AnalogTime>
      </AnalogBoxInner>
    </AnalogBox>
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
  ${(props) =>
    props.hr &&
    css`
      width: 220px;
      height: 220px;
      &::before {
        content: "";
        position: absolute;
        width: 17px;
        height: 120px;
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
        width: 13px;
        height: 145px;
        background: black;
        z-index: 0;
        border-radius: 50px;
      }
    `}
`;
