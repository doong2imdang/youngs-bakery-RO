import React, { useState } from "react";
import styled from "styled-components";

export default function ScheduleModal({ onCancel, year, month, day }) {
  const [schedule, setSchedule] = useState([]);
  const [inputSchedule, setInputSchedule] = useState("");
  const [isAddedBoxVisible, setIsAddedBoxVisible] = useState(false);
  const fixedMonth = month < 10 ? `0${month}` : month;
  const fixedDay = day < 10 ? `0${day}` : day;

  const handleCancel = () => {
    onCancel();
  };

  const handleAddBtn = () => {
    if (inputSchedule.trim() !== "") {
      setSchedule([...schedule, inputSchedule]);
      setInputSchedule("");
      setIsAddedBoxVisible(true);
    }
  };

  const onChangeInput = (e) => {
    setInputSchedule(e.target.value);
  };

  return (
    <AddSchedule>
      <strong>
        <span>
          {year}/{fixedMonth}/{fixedDay}
        </span>{" "}
        일정 추가
      </strong>
      <AddedContent>
        <AddedBox style={{ display: isAddedBoxVisible ? "block" : "none" }}>
          {schedule.map((item, index) => (
            <p key={index}>
              ▶<span>{item}</span>
            </p>
          ))}
        </AddedBox>
        <ScheduleInput
          type="text"
          onChange={onChangeInput}
          value={inputSchedule}
        />
        <AddCancelBtns>
          <button type="button" onClick={handleAddBtn}>
            추가
          </button>
          <button type="button" onClick={handleCancel}>
            취소
          </button>
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
  display: none;

  span {
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
