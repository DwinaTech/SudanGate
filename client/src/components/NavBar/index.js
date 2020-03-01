import React, { useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.nav`
  display: flex;
`;

const StyledMenuWrapper = styled.div`
  flex-grow: 1;
`;

const StyledMenu = styled.button`
  background-color: transparent;
  outline: none;
  border: navajowhite;
  color: #ffffff;
  font-size: 40px;
  padding: 10px;
  @media (min-width: 992px) {
    display: none;
  }
`;

const StyledUnorderedList = ({ show }) => styled.ul`
  padding: 0;
  @media (min-width: 0) and (max-width: 991px) {
    top: 143px;
    margin: 0;
    width: 100vw;
    height: 100vh;
    padding-top: 10px;
    position: absolute;
    text-align: center;
    background: #1f1c18;
    opacity: ${show ? 1 : 0};
  }
  @media (min-width: 992px) {
    margin: 10px;
    flex-grow: 1;
    margin-right: 0;
  }
`;

const StyledList = styled.li`
  list-style: none;
  @media (min-width: 992px) {
    display: inline;
  }
`;

const StyledAnchorTag = ({ active }) => styled.a`
  padding: 10px;
  color: #ffffff;
  margin-left: 10px;
  text-decoration: none;
  display: inline-block;
  background-color: ${active ? "red" : ""};
`;

const StyledLoginIcon = styled.button`
  background-color: transparent;
  outline: none;
  border: navajowhite;
  color: #ffffff;
  font-size: 40px;
  flex-grow: 0;
  padding: 10px;
  cursor: pointer
`;

const Index = ({ lists }) => {
  const [show, setIcon] = useState(false);
  const UnorderedListWrapper = StyledUnorderedList({ show });
  const renderAnchors = () => {
    return lists.map((list, idx) => {
      const { pathname } = window.location;
      const active = list.path === pathname;

      const AnchorTagWrapper = StyledAnchorTag({ active });
      return (
        <StyledList key={idx}>
          <AnchorTagWrapper href={list.path}>{list.name}</AnchorTagWrapper>
        </StyledList>
      );
    });
  };
  return (
    <StyledNav>
      <StyledMenuWrapper>
        <StyledMenu onClick={() => setIcon(!show)}>
          <FontAwesomeIcon icon={show ? faTimes : faBars} />
        </StyledMenu>
        <UnorderedListWrapper>{renderAnchors()}</UnorderedListWrapper>
      </StyledMenuWrapper>
      <StyledLoginIcon>
        <FontAwesomeIcon icon={faAddressCard} />
      </StyledLoginIcon>
    </StyledNav>
  );
};

export default Index;
