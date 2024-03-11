import React from "react";
import styled from "styled-components";
import questionBtn from "../assets/images/question-btn.svg";
import deleteBtn from "../assets/images/delete-btn.svg";
import Router from "../routes/Router";

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
      <MainContent>
        <Router />
      </MainContent>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  width: 95%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainBtns = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
`;
