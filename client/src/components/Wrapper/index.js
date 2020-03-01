import React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  max-width: 100%;
  @media (min-width: 576px) {

  }
  @media (min-width: 768px) {

  }
  @media (min-width: 992px) {
    max-width: 960px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const index = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default index;
