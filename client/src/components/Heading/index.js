import React from 'react';
import styled from '@emotion/styled';

const StyledHeading = styled.h1`
  font-size: 24px;
  color: #ffffff;
  padding: 10px;
  border-bottom: 3px solid #7a7a8c;
  border-top: 3px solid #7a7a8c;
  text-align: center
`;

const index = ({ children }) => <StyledHeading>{children}</StyledHeading>

export default index;