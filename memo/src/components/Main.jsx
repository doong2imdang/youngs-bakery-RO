import React from "react";
import styled from "styled-components";
import questionBtn from "../assets/images/question-btn.svg";
import deleteBtn from "../assets/images/delete-btn.svg";
import Router from "../routes/Router";
import { useLocation } from "react-router-dom";

export default function Main() {
  const location = useLocation();
  const path = location.pathname;
  const itemPart = path.split("/").pop();
  console.log(itemPart);

  let content;
  switch (itemPart) {
    case "clock":
      content = "시계";
      break;
    case "weather":
      content = "날씨";
      break;
    case "calendar":
      content = "달력";
      break;
    case "imageslider":
      content = "슬라이다";
      break;
    case "paintboard":
      content = "그림판";
      break;
    default:
      content = "";
  }

  return (
    <MainStyle>
      <MainHeader>
        <h2>{content}</h2>
        <MainBtns>
          <button type="button">
            <img src={questionBtn} alt="" />
          </button>
          <button type="button">
            <img src={deleteBtn} alt="" />
          </button>
        </MainBtns>
      </MainHeader>
      <MainContent>
        <Router />
      </MainContent>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  width: 95%;
  height: 95%;
  margin: 25px auto;
  background-color: var(--color-grey);
  box-shadow: inset 5px 5px 1px white, 5px 5px 2px black;
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

  button {
    width: 35px;
    height: 35px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainBtns = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
`;
