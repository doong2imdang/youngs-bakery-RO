import React, { useState } from "react";
import styled from "styled-components";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      return nextDate;
    });
  };

  const getPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const prevDateCopy = new Date(prevDate);
      prevDateCopy.setMonth(prevDateCopy.getMonth() - 1);
      return prevDateCopy;
    });
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendarRows = [];
  let dayNumber = 1;

  for (let i = 0; i < 5; i++) {
    const calendarCells = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        // 첫째 주에는 빈 셀을 추가
        calendarCells.push(<td key={`empty-${j}`}></td>);
      } else if (dayNumber <= daysInMonth) {
        // 현재 월의 날짜를 추가
        calendarCells.push(<td key={dayNumber}>{dayNumber}</td>);
        dayNumber++;
      } else {
        // 마지막 주에는 빈 셀을 추가
        calendarCells.push(<td key={`empty-${j}`}></td>);
      }
    }
    calendarRows.push(<tr key={i}>{calendarCells}</tr>);
    if (dayNumber > daysInMonth) break;
  }

  return (
    <>
      <YearAndMonth>
        <button type="button" onClick={getPreviousMonth}>
          ◀
        </button>
        <p>
          <span>{year}</span>, <span>{months[month]}</span>
        </p>
        <button type="button" onClick={getNextMonth}>
          ▶
        </button>
      </YearAndMonth>
      <CalendarTable>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </CalendarTable>
    </>
  );
}

const YearAndMonth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border: 2px solid white;
  background-color: #000079;
  outline: 2px solid black;
  padding: 3px;
  margin-bottom: 12px;

  button {
    width: 50px;
    height: 50px;
    background-color: #afb0b3;
    color: #d9d9d9;
    font-size: 20px;
    line-height: 20px;
  }

  p {
    color: white;
    font-size: 45px;
  }
`;

const CalendarTable = styled.table`
  width: 91%;
  text-align: center;

  thead tr {
    background: #a9a9a9;
    border: 1px solid black;
    border-bottom: 0;

    th {
      padding: 5px 0;
      font-size: 40px;
    }
  }

  tbody tr {
    font-size: 40px;
    line-height: 40px;
    background-color: white;
    border-left: 1px solid black;
    border-right: 1px solid black;

    &:last-child {
      border-bottom: 1px solid black;
    }

    td {
      padding: 15px 0;

      span {
        cursor: pointer;
      }
    }
  }
`;
