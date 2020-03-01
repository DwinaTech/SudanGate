import React from "react";
import styled from "@emotion/styled";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Wrapper from "./components/Wrapper";
import "./App.css";

const StyledHeader = styled.div``;

const lists = [
  { name: "الرئيسية", path: "/" },
  { name: "عننا", path: "/about" },
  { name: "اتصل بنا", path: "/contact" }
];

function App() {
  return (
    <Wrapper>
      <NavBar lists={lists} />
      <StyledHeader>
        <Heading>نافزة السودان</Heading>
      </StyledHeader>
    </Wrapper>
  );
}

export default App;
