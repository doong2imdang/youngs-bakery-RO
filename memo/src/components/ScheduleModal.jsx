import React from "react";
import styled from "styled-components";

export default function ScheduleModal() {
  return (
    <AddSchedule>
      <strong>
        <span>2024/04/04</span> 일정 추가
      </strong>
      <AddedContent>
        <AddedBox>
          <p>
            ▶<span>메모장완성하기</span>
          </p>
          <p>
            ▶<span>달력 일정 추가 모달 완성하기</span>
          </p>
          <p>
            ▶<span>깃헙 커밋 남기기</span>
          </p>
          <p>
            ▶<span>이력서 수정하기</span>
          </p>
        </AddedBox>
        <ScheduleInput type="text" />
        <AddCancelBtns>
          <button type="button">추가</button>
          <button type="button">취소</button>
        </AddCancelBtns>
      </AddedContent>
    </AddSchedule>
  );
}

const AddSchedule = styled.div`
  position: absolute;
  background-color: #bdbdbd;
  width: 500px;
  min-height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  box-shadow: inset 5px 5px 1px white, 5px 5px 2px black;
  z-index: 1000;
  /* display: none; */

  strong {
    display: block;
    height: 28px;
    font-size: 20px;
    line-height: 28px;
    color: white;
    background-color: #0b026b;
    padding-left: 5px;
    margin: 7px 3px 7px 7px;
  }
`;

const AddedContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const AddedBox = styled.div`
  width: 300px;
  font-size: 20px;
  box-shadow: inset 2px 2px 1px white, 2px 2px 1px black;
  padding: 10px 15px;
  line-height: 30px;
  margin: 25px 0 0 0;
  /* display: none; */

  spna {
    padding-left: 4px;
  }
`;

const ScheduleInput = styled.input`
  width: 320px;
  height: 25px;
  background-color: white;
  margin: 35px 0;
  outline: none;
  border: 1px solid black;
  padding: 5px;
  font-size: 18px;
`;

const AddCancelBtns = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 20px;

  button {
    width: 113px;
    height: 30px;
    font-size: 18px;
  }
`;
