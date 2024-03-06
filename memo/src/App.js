import React from "react";
import GlobalStyles from "./style/GlobalStyle";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <NavBar />
    </Container>
  );
}
export default App;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "navbar main";
  grid-template-columns: 240px auto;
`;

