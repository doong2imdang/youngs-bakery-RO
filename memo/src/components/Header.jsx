import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <h1>메모장</h1>
      </HeaderStyle>
    </>
  );
}

const HeaderStyle = styled.header`
  background-color: var(--color-black);
  grid-area: header;

  h1 {
    font-size: 45px;
    color: var(--color-white);
    text-align: center;
    line-height: 75px;
    height: 80px;
  }
`;
