import React from "react";
import styled from "styled-components";

export default function Calendar() {
  return (
    <>
      <YearAndMonth>
        <button type="button">◀</button>
        <p>
          <span>2024</span>, <span>March</span>
        </p>
        <button type="button">▶</button>
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
        <tbody>
          <tr>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
          </tr>
          <tr>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
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
